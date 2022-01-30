const fs = require('fs');
const color = require('colors')
const crearArchivo = async(base=5,listar=false,hasta=10)=>{

    try{
    let salida =''
    let consola  =''
    for (let i=1;i<=hasta;i++){ 

         salida+=`${base} * ${i} = ${base*i} \n`; 
         consola+=`${base} * ${i} ${color.red('=')} ${base*i} \n`; 

    }
    if(listar){ 
        console.log(color.yellow('=============================='))
        console.log('         Tabla del'.green,base       )
        console.log(color.yellow('==============================') )
        console.log(consola);
    } 

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
    return `tabla-${base}.txt`;
   } catch(err){
    throw err;
   }
} 
module.exports={
    crearArchivo
}