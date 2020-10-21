const svite = require('svite')
module.exports = {
  optimizeDeps: {
    exclude: ['@roxi/routify'],
	},
	plugins: [svite({hot:{noPreserveState: false}})],
};
