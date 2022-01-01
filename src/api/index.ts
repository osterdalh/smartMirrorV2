import { endpoints } from './paths'
const axios = require('axios').default;


export const getCurrentWeatherForecast = async (lat: string, lon: string) => {
    try {
        const response = await axios.get(`${endpoints.yrWeatherForecast.replace('*LAT*', lat).replace('*LON*', lon)}`);
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}