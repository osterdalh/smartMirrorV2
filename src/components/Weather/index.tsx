import { WeatherWrapper, TempAndIconWrapper, ArrowContainer, WindAndSun, WindContainer } from './styles'
import { useState, useEffect } from 'react';
import { getCurrentWeatherForecast, getSunsetSunrise } from '../../api';
import React from 'react';
import getIcon from './iconsNew/index'
import WindIcon from './iconsNew/arrow-narrow-up-svgrepo-com';
import SunriseIcon from './iconsNew/sunrise-svgrepo-com';
import SunsetIcon from './iconsNew/sunset-svgrepo-com';

const Weather: React.FC = () => {
    const [weather, setWeather] = useState<null | { [key: string]: any }>(null)

    useEffect(() => {
        getWeatherForecast()
        {getSunsetSunrise(cities[1].lat, cities[1].lon)}

    }, []);


    const cities = {
        1: {
            city: 'Svolvær',
            altitude: '0',
            lat: '68.2392848',
            lon: '14.5433442'
        }
    }

    const getWeatherForecast = async () => {
        const data = await getCurrentWeatherForecast(cities[1].lat, cities[1].lon)
        console.log("data", data)

        setWeather(data);
    }

    // const getWeatherIcon = (): any => {
    //     if (weather) {
    //         // const iconName = String(weather.timeseries[0].data.next_1_hours.summary.symbol_code);
    //         console.log("weather", weather)
    //         return weatherIcons['cloudy']
    //     }

    // }

   
    return (
        weather && <WeatherWrapper>
            <TempAndIconWrapper>
                
                <div>{Math.round(weather.properties.timeseries[0].data.instant.details.air_temperature)} °C</div>

                <div>{getIcon(weather.properties.timeseries[0].data.next_1_hours.summary.symbol_code)}</div>
            </TempAndIconWrapper>
            <WindAndSun >
                <WindContainer windAngle={weather.properties.timeseries[0].data.instant.details.wind_from_direction}>
                    <WindIcon></WindIcon>
                    {Math.round(weather.properties.timeseries[0].data.instant.details.wind_speed)} ({Math.round(weather.properties.timeseries[0].data.instant.details.wind_speed_of_gust)}) m/s
                </WindContainer>
                <div>
                    <SunriseIcon></SunriseIcon>
                    <SunsetIcon></SunsetIcon>
                </div>
            </WindAndSun>



        </WeatherWrapper>
    );
};

export default Weather;
