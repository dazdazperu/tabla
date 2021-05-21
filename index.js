const { multiplicar } = require('./inc/tabla.js');
const argv = require('./inc/yargs.js');

console.log(argv.n);

multiplicar(argv.n)
	.then(multiplicar => console.log(multiplicar))
	.catch(err => console.log(err));