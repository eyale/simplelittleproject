import axios from 'axios'

const API_KEY = '88dfe612a9b31f32b091650395a238e1'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  if (city ==='') {
    city = 'Kyiv'
  }
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
