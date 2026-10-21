import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const htmlPath = path.join(root, 'public', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const fail = message => { console.error(`FAIL: ${message}`); process.exitCode = 1; };
const pass = message => console.log(`PASS: ${message}`);

if (!/<title>[^<]*Sanskode[^<]*<\/title>/i.test(html)) fail('Page title should include Sanskode.');
else pass('Sanskode page title found.');
if (!/name=["']description["']/i.test(html)) fail('Meta description is missing.');
else pass('Meta description found.');
if (!fs.existsSync(path.join(root, 'public', 'assets', 'branding', 'favicon.svg'))) fail('Local favicon is missing.');
else pass('Local favicon exists.');

const ids = [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map(m => m[1]);
const seen = new Set();
const duplicates = new Set();
for (const id of ids) { if (seen.has(id)) duplicates.add(id); seen.add(id); }
if (duplicates.size) fail(`Duplicate HTML IDs: ${[...duplicates].join(', ')}`);
else pass(`No duplicate HTML IDs (${ids.length} IDs checked).`);

// The runtime should not depend on remote assets or remote script/style includes.
const externalIncludes = [...html.matchAll(/<(?:script|link|img|iframe)\b[^>]*(?:src|href)\s*=\s*["']https?:\/\/[^"']+["'][^>]*>/gi)].map(m => m[0].slice(0, 140));
if (externalIncludes.length) fail(`External runtime includes found: ${externalIncludes.join(' | ')}`);
else pass('No remote script, style, image, or iframe includes found.');

const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
if (!scripts.length) fail('No inline JavaScript blocks found.');
else {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sanskode-check-'));
  let syntaxOk = true;
  try {
    scripts.forEach((match, index) => {
      if (/\bsrc\s*=/.test(match[1])) return; // External scripts are not expected, but don't syntax-check them as inline.
      const filename = path.join(tempDir, `inline-${index + 1}.js`);
      fs.writeFileSync(filename, match[2], 'utf8');
      const result = spawnSync(process.execPath, ['--check', filename], { encoding: 'utf8' });
      if (result.status !== 0) {
        syntaxOk = false;
        console.error(`JavaScript block ${index + 1} failed syntax check:\n${result.stderr || result.stdout}`);
      }
    });
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  if (!syntaxOk) fail('One or more inline JavaScript blocks have syntax errors.');
  else pass(`JavaScript syntax valid (${scripts.length} script blocks checked).`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log('Sanskode validation completed successfully.');
