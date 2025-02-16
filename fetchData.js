
async function fetchData(urls) {
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
    throw error;
  }
  return chillHours;
}

module.exports = { fetchData };
