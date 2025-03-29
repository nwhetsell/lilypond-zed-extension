(
  (escaped_word) @preproc
  (#match? @preproc "^\\\\(?:include|maininput|version)$") ; These are handled directly by LilyPond’s lexer.
)

(embedded_scheme_prefix) @preproc
