const preprocess = require('svelte-preprocess');
module.exports = {
  preprocess: [
    preprocess.typescript(),
    preprocess({
			defaults: { style: 'postcss' },
			postcss: true,
      typescript: false, // svite -ts injects it's own typescript preprocessor
    }),
  ],
}
// const { postcss, typescript } = require('svelte-preprocess');
// // TODO: may need a different config for prod builds
// module.exports = {
//   extensions: ['.svelte'],
//   preprocess: [
//     typescript(),
//     postcss()
//   ],
// };
