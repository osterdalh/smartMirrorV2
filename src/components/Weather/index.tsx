import { WeatherWrapper, TempAndIconWrapper, ArrowContainer } from './styles'
import { useState, useEffect } from 'react';
import { getCurrentWeatherForecast } from '../../api';
import weatherIcons from './icons/resolver';
import { WiDirectionUp } from 'react-icons/wi';

const Weather: React.FC = () => {
    const [weather, setWeather] = useState<null | { [key: string]: any }>(null)

    useEffect(() => {
        const weatherId = setInterval(getWeatherForecast, 1000000);
        return function cleanup() {
            clearInterval(weatherId);
        };
    });

    const cities = {
        1: {
            city: 'Oslo',
            altitude: '0',
            lat: '59.911322',
            lon: '10.733997'
        }
    }

    const getWeatherForecast = async () => {
        const data = await getCurrentWeatherForecast(cities[1].lat, cities[1].lon)
        setWeather(data.properties);
    }

    const getWeatherIcon = (): any => {
        if (weather) {
            // const iconName = String(weather.timeseries[0].data.next_1_hours.summary.symbol_code);
            console.log("weather", weather)
            return weatherIcons['cloudy']
        }

    }

    return (
        weather && <WeatherWrapper>
            <TempAndIconWrapper>
                <div>
                    <h1>{Math.round(weather.timeseries[0].data.instant.details.air_temperature)}°C</h1>
                    <h3>{Math.round(weather.timeseries[0].data.instant.details.wind_speed)}m/s
                        <ArrowContainer angle={weather.timeseries[0].data.instant.details.wind_from_direction}><WiDirectionUp></WiDirectionUp></ArrowContainer>
                    </h3>

                </div>
                <div>
                    {getWeatherIcon()}
                </div>
            </TempAndIconWrapper>
            


        </WeatherWrapper>
    );
};

export default Weather;
