import UnpluginTypia from '@ryoppippi/unplugin-typia/bun'

await Bun.build({
	entrypoints: ["./index.ts" ,"./index.build.ts"],
	outdir: "./out",
	plugins: [
    UnpluginTypia({ cache: false })
	]
});
