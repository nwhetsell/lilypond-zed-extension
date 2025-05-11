const { execSync } = require('child_process');
const fs = require('fs');

execSync(`
  git clone https://github.com/nwhetsell/tree-sitter-lilypond &&
  cd tree-sitter-lilypond
`);
for (const suffix of ['', '-builtins']) {
  fs.cpSync(`tree-sitter-lilypond/queries/highlights${suffix}.scm`, `languages/lilypond/highlights${suffix}.scm`);
}
for (const suffix of ['', '-builtins', '-lilypond-builtins']) {
  fs.cpSync(`tree-sitter-lilypond-scheme/queries/highlights-scheme${suffix}.scm`, `languages/lilypond/highlights-scheme${suffix}.scm`);
}
fs.rmSync('tree-sitter-lilypond', {recursive: true, force: true});
