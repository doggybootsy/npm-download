import esbuild from "esbuild";

try {
  await esbuild.build({
    entryPoints: [
      "src/index.ts"
    ],
    platform: "node",
    outfile: "./dist/index.mjs",
    format: "esm",
    sourcemap: "external",
    sourcesContent: true
  });
  console.log("Compiled format 'mjs'");
} catch (error) {
  console.log("Error compiling format 'mjs'");
};

try {
  await esbuild.build({
    entryPoints: [
      "src/index.ts"
    ],
    platform: "node",
    outfile: "./dist/index.cjs",
    format: "cjs",
    sourcemap: "external",
    sourcesContent: true
  });
  console.log("Compiled format 'cjs'");
} catch (error) {
  console.log("Error compiling format 'cjs'");
};