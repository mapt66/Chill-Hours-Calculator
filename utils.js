function addDays(inputDate, daysToAdd) {
  const year = parseInt(inputDate.substring(0, 4), 10);
  const month = parseInt(inputDate.substring(4, 6), 10) - 1; 
  const day = parseInt(inputDate.substring(6, 8), 10);

  const date = new Date(year, month, day);
  date.setDate(date.getDate() + daysToAdd);

  const newDate = date.getFullYear().toString() +
                       String(date.getMonth() + 1).padStart(2, '0') +
                       String(date.getDate()).padStart(2, '0');

  return newDate;
}
  
  function calculateDaysInInterval(endDate,initDate){
    const yearEnd = parseInt(endDate.substring(0, 4), 10);
    const monthEnd = parseInt(endDate.substring(4, 6), 10) - 1; 
    const dayEnd = parseInt(endDate.substring(6, 8), 10);

    const endDateFormatted = new Date(yearEnd, monthEnd, dayEnd);
    const year = parseInt(initDate.substring(0, 4), 10);
    const month = parseInt(initDate.substring(4, 6), 10) - 1; 
    const day = parseInt(initDate.substring(6, 8), 10);

    const initDateFormatted = new Date(year, month, day);

    return  Math.floor( Math.abs(endDateFormatted - initDateFormatted) / (1000 * 60 * 60 * 24)); 

}

function arraysUrls(initDate,endDate){
  const arrayURLS = [];
  const arrayDates = createArray(initDate,endDate)
  arrayDates.forEach(x=> arrayURLS.push(`https://api.weather.com/v2/pws/history/all?stationId=${process.env.STATIONID}&format=json&units=m&date=${x}&apiKey=${process.env.API_KEY}&numericPrecision=decimal`))
  return arrayURLS;
}

function createArray(initDate, endDate) {
  var array = [];
  var dateloop = initDate
  for( var i=0 ; i <= calculateDaysInInterval(endDate,initDate) ; i++ ){
      array.push(dateloop)
      dateloop = addDays(dateloop,1)
  }
  return array;
}
  module.exports = {arraysUrls };
  