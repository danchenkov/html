# boilerplate
HTML boilerplate pages with examples of video, list style, vue operations

### Sass
**Precompile css before running the server**
`fswatch -o src/scss | xargs -n1 -I{} sass -C -l -f -t compressed src/scss/main.scss assets/main.css`
