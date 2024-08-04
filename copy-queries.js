const { execSync } = require('child_process');
const fs = require('fs');
const toml = require('toml');

const data = toml.parse(fs.readFileSync('./extension.toml', 'utf8'));

execSync(`
  git clone ${data.grammars.lilypond.repository} &&
  cd tree-sitter-lilypond &&
  git checkout ${data.grammars.lilypond.commit}
`);
for (const suffix of ['', '-builtins']) {
  fs.cpSync(`tree-sitter-lilypond/queries/highlights${suffix}.scm`, `languages/lilypond/highlights${suffix}.scm`);
}
fs.rmSync('tree-sitter-lilypond', {recursive: true, force: true});

execSync(`
  git clone ${data.grammars.lilypond_scheme.repository} &&
  cd tree-sitter-lilypond-scheme &&
  git checkout ${data.grammars.lilypond_scheme.commit}
`);
for (const suffix of ['', '-builtins', '-lilypond-builtins']) {
  fs.cpSync(`tree-sitter-lilypond-scheme/queries/highlights${suffix}.scm`, `languages/lilypond/highlights-scheme${suffix}.scm`);
}
fs.rmSync('tree-sitter-lilypond-scheme', {recursive: true, force: true});
