require('dotenv').config()

var initDate = process.env.INITDATE || '20241001'
var endDate  = process.env.ENDDATE || new Date().getFullYear().toString() +String(new Date().getMonth() + 1).padStart(2, '0') +String(new Date().getDate()).padStart(2, '0');

//main
fetchComLimite(arraysUrls(initDate,endDate),1)


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
    var dateloop = initDate;
    var array = [];
    for( var i=0 ; i < calculateDaysInInterval(endDate,initDate) ; i++ ){
        array.push(dateloop)
        dateloop = addDays(dateloop,1)
    }
    return array;
}

async function fetchComLimite(urls) {
    let chillHours = 0;    
      try {
        const responses = await Promise.all(urls.map(url=> fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        data.forEach(x=> {
            let acumulated = x.observations.reduce((total, obs) => {
                if (obs.metric && obs.metric.tempAvg < 7.2) {
                    return total + (5 / 60);
                }
                return total ;
            }, 0);    
            
            chillHours += acumulated
        })
       
      } catch (error) {
        console.error("Error getting data", error);
      }
    
    console.log('Chill Hours since '+ (process.env.INITDATE || initDate ) + ' until ' +(process.env.ENDDATE || endDate) +' : '  + chillHours )
}  