const argv = require('yargs')
	.option('n',{
		alias:'num',
		type: 'number',
		demandOpion: true
	})
	.check((argv, options) =>{
		if (isNaN(argv.n)) {
			throw 'Ingrese una base valida';
		}
		return true;
	})
	.argv;
module.exports = argv;