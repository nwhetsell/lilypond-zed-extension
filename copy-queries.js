const { execSync } = require('child_process');
const fs = require('fs');
const toml = require('toml');

const data = toml.parse(fs.readFileSync('./extension.toml', 'utf8'));

execSync(`
  git clone ${data.grammars.lilypond.repository} &&
  cd tree-sitter-lilypond &&
  git checkout ${data.grammars.lilypond.commit}
`);
fs.cpSync('tree-sitter-lilypond/queries/highlights-builtins.scm', 'languages/lilypond/highlights-builtins.scm');
fs.cpSync('tree-sitter-lilypond/queries/highlights.scm', 'languages/lilypond/highlights.scm');
fs.rmSync('tree-sitter-lilypond', {recursive: true, force: true});

execSync(`
  git clone ${data.grammars.lilypond_scheme.repository} &&
  cd tree-sitter-lilypond-scheme &&
  git checkout ${data.grammars.lilypond_scheme.commit}
`);
fs.cpSync('tree-sitter-lilypond-scheme/queries/highlights-builtins.scm', 'languages/lilypond/highlights-scheme-builtins.scm');
fs.cpSync('tree-sitter-lilypond-scheme/queries/highlights-lilypond-builtins.scm', 'languages/lilypond/highlights-scheme-lilypond-builtins.scm');
fs.cpSync('tree-sitter-lilypond-scheme/queries/highlights.scm', 'languages/lilypond/highlights-scheme.scm');
fs.rmSync('tree-sitter-lilypond-scheme', {recursive: true, force: true});
