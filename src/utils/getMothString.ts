

export const obtenerMesAbreviado = (mes: string, languaje:'es'|'en'='es'): string => {
  if (mes.toLowerCase() === 'actualidad' ) return 'actualidad';
  if(mes.toLowerCase() === 'present') return 'present'

  
  const meses = languaje === 'es'
  ? ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [mesStr, anioStr] = mes.split(',').map(s => s.trim());

  const numeroMes = parseInt(mesStr, 10);
  const anio = parseInt(anioStr, 10);

  if (
    isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12 ||
    isNaN(anio)
  ) {
    throw new Error('Formato inválido. Debe ser "MM, YY" o "actualidad"');
  }

  const anioCompleto = 2000 + anio; // Asume año en formato 2000+

  return `${meses[numeroMes - 1]}, ${anioCompleto}`;
};
