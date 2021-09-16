package main

import (
  "log"
  "os"

  "github.com/evanw/esbuild/pkg/api"
)

func main() {
  result := api.Build(api.BuildOptions{
    EntryPoints:       []string{"src/form.mjs"},
    Bundle:            true,
    MinifyWhitespace:  true,
    MinifyIdentifiers: true,
    MinifySyntax:      true,
    Outdir:            "assets",
    External:          []string{"modernizr"},
    Engines: []api.Engine{
      {api.EngineChrome, "88"},
      {api.EngineFirefox, "86"},
      {api.EngineSafari, "112"},
      {api.EngineEdge, "16"},
    },
    Write: true,
  })

  if len(result.Errors) > 0 {
    for _, e := range result.Errors {
      log.Println(e)
    }
    os.Exit(1)
  }
}
