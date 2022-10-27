import { useState, useEffect } from "react";

function useWeather(defaultCity) {
    const [humidity, setHumidity] = useState('');
    const [tepmerature, setTepmerature] = useState('');
    const [condition, setCondition] = useState('');
    const [country, setCountry] = useState('');
    const [inputLocationName, setInputLocationName] = useState(defaultCity);
    const [LocationTime, setLocationTime] = useState('');
    const [WeatherIcon, setWeatherIcon] = useState('./imgSvg/imgage-1.png');
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch('https://api.weatherapi.com/v1/current.json?key=237b94cd56344d69b80133558221510&q=' + inputLocationName + '+"&aqi=no')
            .then(el => el.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error.message);
                } else {
                    setHumidity(data?.current?.humidity);
                    setTepmerature(data?.current?.temp_c);
                    setCondition(data?.current?.condition.text);
                    setCountry(data?.location?.country);
                    setLocationTime(data?.location?.localtime);
                    setWeatherIcon(data?.current?.condition?.icon);
                    setError(false);
                }
            });

    }, [inputLocationName]);

    return {
        humidity: humidity,
        tepmerature,
        condition,
        country,
        LocationTime,
        WeatherIcon,
        error,
        inputLocationName,
        setInputLocationName,
    };
}

export default useWeather;