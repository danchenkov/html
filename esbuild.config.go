// READ FIRST: https://github.com/evanw/esbuild/issues/39

package main

// import (
// 	"log"
// 	//   "os"
// 	//   "github.com/evanw/esbuild/pkg/api"
// )

func main() {
	// 	// This may be is working, but use npm script to run the esbuild

	// 	//   modulalResult := api.Build(api.BuildOptions{
	// 	//     EntryPoints:       []string{"src/form.mjs", "src/main.mjs", "src/modules.js"},
	// 	//     Bundle:            true,
	// 	//     Format:            api.FormatESModule,
	// 	//     MinifyIdentifiers: true,
	// 	//     MinifySyntax:      true,
	// 	//     MinifyWhitespace:  true,
	// 	//     Outdir:            "assets",
	// 	//     Sourcemap:         api.SourceMapLinked,
	// 	//     Splitting:         true,
	// 	//     // Watch: &api.WatchMode{
	// 	//     //   OnRebuild: func(result api.BuildResult) {
	// 	//     //     if len(result.Errors) > 0 {
	// 	//     //       fmt.Printf("watch build failed: %d errors\n", len(result.Errors))
	// 	//     //     } else {
	// 	//     //       fmt.Printf("watch build succeeded: %d warnings\n", len(result.Warnings))
	// 	//     //     }
	// 	//     //   },
	// 	//     // },
	// 	//     Engines: []api.Engine{
	// 	//       {Name: api.EngineChrome, Version: "88"},
	// 	//       {Name: api.EngineFirefox, Version: "86"},
	// 	//       {Name: api.EngineSafari, Version: "14"},
	// 	//       {Name: api.EngineEdge, Version: "16"},
	// 	//       {Name: api.EngineNode, Version: "12.19.0"},
	// 	//     },
	// 	//     Write: true,
	// 	//   })

	// 	//   if len(modulalResult.Errors) > 0 {
	// 	//     for _, e := range modulalResult.Errors {
	// 	//       log.Println(e)
	// 	//     }
	// 	//     os.Exit(1)
	// 	//   }

	// 	//   // modulalResult.Stop()

	// 	//   fallbackResult := api.Build(api.BuildOptions{
	// 	//     EntryPoints:       []string{"src/form.mjs", "src/main.mjs", "src/modules.js"},
	// 	//     Bundle:            true,
	// 	//     Format:            api.FormatIIFE,
	// 	//     MinifyIdentifiers: true,
	// 	//     MinifySyntax:      true,
	// 	//     MinifyWhitespace:  true,
	// 	//     Outdir:            "assets/fallback",
	// 	//     Sourcemap:         api.SourceMapLinked,
	// 	//     // Watch: &api.WatchMode{
	// 	//     //   OnRebuild: func(result api.BuildResult) {
	// 	//     //     if len(result.Errors) > 0 {
	// 	//     //       fmt.Printf("watch build failed: %d errors\n", len(result.Errors))
	// 	//     //     } else {
	// 	//     //       fmt.Printf("watch build succeeded: %d warnings\n", len(result.Warnings))
	// 	//     //     }
	// 	//     //   },
	// 	//     // },
	// 	//     Engines: []api.Engine{
	// 	//       {Name: api.EngineChrome, Version: "88"},
	// 	//       {Name: api.EngineFirefox, Version: "86"},
	// 	//       {Name: api.EngineSafari, Version: "14"},
	// 	//       {Name: api.EngineEdge, Version: "16"},
	// 	//       {Name: api.EngineNode, Version: "12.19.0"},
	// 	//     },
	// 	//     Write: true,
	// 	//   })

	// //   if len(fallbackResult.Errors) > 0 {
	// //     for _, e := range fallbackResult.Errors {
	// //       log.Println(e)
	// //     }
	// //     os.Exit(1)
	// //   }
	// log.Println("Success")
	// //   // fallbackResult.Stop()
}
