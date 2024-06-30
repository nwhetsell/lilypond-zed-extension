; From https://tree-sitter.github.io/tree-sitter/syntax-highlighting#language-injection,
; the standard capture for injections is @injection.content (not @content), and
; the standard properties are injection.language and injection.combined (not
; language and combined), but Zed doesn’t use standard Tree-sitter names. See
; https://github.com/zed-industries/zed/issues/9656 and
; https://github.com/zed-industries/zed/pull/9654 for more information.
((scheme_embedded_lilypond
    (scheme_embedded_lilypond_text) @content)
  (#set! language "lilypond")
  (#set! combined))
