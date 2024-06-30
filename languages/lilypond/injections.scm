; From https://tree-sitter.github.io/tree-sitter/syntax-highlighting#language-injection,
; the standard capture for injections is @injection.content (not @content), and
; the standard properties are injection.language and injection.combined (not
; language and combined), but Zed doesn’t use standard Tree-sitter names. See
; https://github.com/zed-industries/zed/issues/9656 and
; https://github.com/zed-industries/zed/pull/9654 for more information. In
; addition, Tree-sitter supports an injection.include-children property that
; should be used here to support parsing LilyPond Scheme as a true injection,
; but it appears that Zed doesn’t support that at all; searching the Zed
; repository for include-children produces no results:
;   https://github.com/search?q=repo%3Azed-industries%2Fzed+include-children%22&type=code
((embedded_scheme
    (embedded_scheme_text) @content)
  (#set! language "lilypond_scheme")
  (#set! combined))
