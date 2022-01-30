const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    describe:'base a multiplicar',
    demandOption:true
})
.option('l',{
    alias:'listar',
    type:'boolean',
    describe:'muestra en la ventana',
    demandOption:false
}).option('f',{
    alias:'hasta',
    type:'number',
    describe:'Multiplica hasta valor ingresado'
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero';
    }
     return true; 
})
.argv;

module.exports = argv;