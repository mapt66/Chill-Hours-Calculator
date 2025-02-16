# Chill Hours - Automatic Calculation Wunderground Station

This project calculates chill hours (temperatures below 7.2°C) based on weather data from a Weather Underground station.

# Features

Retrieves weather data from the Weather Underground API.

Calculates chill hours within a defined period.

Automatically updates the accumulated chill hours.

# Installation and Setup
Option 1

Clone the repository:

git clone https://github.com/mapt66/Chill-Hours-Calculator.git
cd Chill-Hours-Calculator

Install dependencies:

npm install

Create a .env file with the following variables:

API_KEY=YOUR_WEATHER_UNDERGROUND_API_KEY
STATION_ID=YOUR_STATION_ID
INIT_DATE=YYYY-MM-DD  # Start date for calculation
END_DATE=YYYY-MM-DD   # End date for calculation

Option 2: Run with Docker 🐳

Build the Docker image:

docker build -t chill-hours .

Run the container:

docker run --rm -e STATION_ID=YOUR_STATION -e API_KEY=YOUR_API -e INIT_DATE=20241001 -e END_DATE=20241231 chill-hours

Explanation:

--rm → Removes the container after execution.

-e STATION_ID=YOUR_STATION → Passes the station ID.

-e API_KEY=YOUR_API → Passes the API key.

-e INIT_DATE=20241001 → Passes the start date.

-e END_DATE=20241231 → Passes the end date.

# How to Use

Run the script

node main.js

The script will fetch the data, calculate chill hours, and display the results.

# Example Output
Chill Hours since 20241001 until 20250210 : 5 hours





