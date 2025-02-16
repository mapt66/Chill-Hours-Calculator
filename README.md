Chill Hours - Automatic Calculation with Node.js

This project calculates chill hours (temperatures below 7.2°C) based on weather data from a Weather Underground station.

🚀 Features

Retrieves weather data from the Weather Underground API.

Calculates chill hours within a defined period.

Automatically updates the accumulated chill hours.

🛠️ Installation and Setup

Clone the repository:

git clone https://github.com/your-username/your-repository.git
cd your-repository

Install dependencies:

npm install

Create a .env file with the following variables:

API_KEY=YOUR_WEATHER_UNDERGROUND_API_KEY
STATION_ID=YOUR_STATION_ID
INIT_DATE=YYYY-MM-DD  # Start date for calculation
END_DATE=YYYY-MM-DD   # End date for calculation

▶️ How to Use

Run the script

node index.js

The script will fetch the data, calculate chill hours, and display the results.

📌 Example Output

Accumulated Chill Hours: 193 hours
Chill Hours on the Last Day: 5 hours

📦 Main Dependencies

fetch - For making HTTP requests to the Weather Underground API.

dotenv - For managing environment variables.

📜 License

This project is licensed under the MIT License. Feel free to use and modify it.



