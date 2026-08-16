const { execSync } = require("child_process");
const fs = require("fs");

execSync("git clone https://github.com/nwhetsell/tree-sitter-lilypond");

const queryFiles = [
    "highlights.scm",
    "highlights-builtins.scm",
    "highlights-scheme.scm",
    "highlights-scheme-builtins.scm",
    "highlights-scheme-lilypond-builtins.scm",
];

const highlights = queryFiles
    .map((file) => {
        const contents = fs.readFileSync(
            `tree-sitter-lilypond/queries/${file}`,
            "utf8",
        );
        return `; ${file}\n${contents.trimEnd()}`;
    })
    .join("\n\n");

fs.writeFileSync("languages/lilypond/highlights.scm", `${highlights}\n`);
fs.rmSync("tree-sitter-lilypond", { recursive: true, force: true });
