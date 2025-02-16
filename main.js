require('dotenv').config();
const { arraysUrls } = require('./utils');
const { fetchData } = require('./fetchData');

const initDate = process.env.INITDATE || '20241001';
var endDate  = process.env.ENDDATE || new Date().getFullYear().toString() +String(new Date().getMonth() + 1).padStart(2, '0') +String(new Date().getDate()).padStart(2, '0');

const urls = arraysUrls(initDate, endDate);

fetchData(urls)
  .then((chillHours) => {
    console.log(`Chill Hours from ${initDate} to ${endDate}: ${chillHours} hours`);
  })
  .catch((error) => {
    console.error('Error fetching chill hours:', error);
  });

