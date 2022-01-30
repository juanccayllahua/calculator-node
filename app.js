const argv  = require('./config/yargs');
const color = require('colors')
const {crearArchivo} = require('./helpers/multiplicar')
//5 x 1 = 5
console.clear();
 
//console.log(process.argv)

//const[,,arg3='base=5'] = process.argv;
//const [,base=5] = arg3.split('=')
//console.log(base)
 
crearArchivo(argv.b,argv.l,argv.f)
.then(nombreArchivo=>console.log(color.yellow( nombreArchivo,'creado')))
.catch(err=>console.log(err))