const {DateTime} = require('luxon')

const fechaHoy = DateTime.now()
const fechaNac = DateTime.fromISO('2001-08-29')

if(fechaHoy.isValid && fechaNac.isValid){
    const days = fechaHoy.diff(fechaNac).as('days');
    const dRedondeados = Math.floor(days);
    console.log(`Han pasado ${dRedondeados} dias desde que nací.`);
}else{
    console.log('Fecha inválida.')
}
