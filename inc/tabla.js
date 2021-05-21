const fs = require('fs');
const colors = require('colors');
const multiplicar = async(num=2) => {
	try{
		const titulo = `
		======================
		Tabla del ${colors.brightYellow(num)}
		======================`;
		let datos = '';
		for (var i = 1; i < 10; i++) {
			datos +=`${num} x ${i} = ${num*i}\n`;
		}

		console.log(titulo);
		console.log(datos);

		fs.writeFileSync(`./salida/tabla-del-${num}.txt`, datos);
		return `Archivo tabla-del-${num}.txt Creado`.rainbow;
	} catch(err){
		throw err;
	}

}

module.exports = {
	multiplicar
}