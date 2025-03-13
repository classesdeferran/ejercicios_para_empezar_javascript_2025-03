// CONTAR SEGUNDOS

// console.log(preguntaSegundos);
// const preguntaSegundos = 4566788989;


// A dias : B horas : C minutos : D segundos

// PISTA:
// const num = 4.75
// console.log(parseInt(num));


// let prueba1 = convertirSegundos(3601);
console.log(convertirSegundos(3601));
console.log(convertirSegundos(7263));
console.log(convertirSegundos(3601));




function convertirSegundos(segundos) {
  const SEGUNDOS_MINUTO = 60;
  const SEGUNDOS_HORA = SEGUNDOS_MINUTO * 60;
  const SEGUNDOS_DIA = SEGUNDOS_HORA * 24;

  const dias = parseInt(segundos / SEGUNDOS_DIA);
  let segundos_restantes = segundos % SEGUNDOS_DIA;
  const horas = parseInt(segundos_restantes / SEGUNDOS_HORA);
  segundos_restantes = segundos_restantes % SEGUNDOS_HORA;
  const minutos = parseInt(segundos_restantes / SEGUNDOS_MINUTO);
  segundos_restantes = segundos_restantes % SEGUNDOS_MINUTO;

  return `${dias} dias : ${horas} horas : ${minutos} minutos : ${segundos_restantes} segundos`;
}
