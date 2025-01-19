; Tree-sitter supports an injection.include-children property that should be
; used here to support parsing LilyPond Scheme as a true injection, but it
; appears that Zed doesn’t support that. Searching the Zed repository for
; include-children produces no results:
;   https://github.com/search?q=repo%3Azed-industries%2Fzed+include-children%22&type=code
((embedded_scheme
    (embedded_scheme_text) @injection.content)
  (#set! injection.language "lilypond_scheme")
  (#set! injection.combined))
