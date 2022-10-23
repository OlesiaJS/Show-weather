import { useState } from "react";
import "../components/style.css";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import GetSvgCondition from "./Condition";

console.log('WeatherList here');
function WeatherList() {
    const [humidity, setHumidity] = useState('');
    const [tepmerature, setTepmerature] = useState('');
    const [condition, setCondition] = useState('');
    const [country, setCountry] = useState('');
    const [inputLocationName, setInputLocationName] = useState('Oslo');
    const [LocationTime, setLocationTime] = useState('');
    const [WeatherIcon, setWeatherIcon] = useState('./imgSvg/imgage-1.png');
    const [error, setError] = useState(false);

    const updateWeather = () => {
        fetch('https://api.weatherapi.com/v1/current.json?key=237b94cd56344d69b80133558221510&q=' + inputLocationName + '+"&aqi=no')
            .then(el => el.json())
            .then(data => {
                setInputLocationName(data.location.name);
                setHumidity(data.current.humidity);
                setTepmerature(data.current.temp_c);
                setCondition(data.current.condition.text);
                setCountry(data.location.country);
                setLocationTime(data.location.localtime);
                setWeatherIcon(data.current.condition.icon);
                setError(false);

            })
            .catch(error => setError(true));
    };


    return (
        <><section className="weather-search">
            <div className="search-field">
                <input className="search-field-input" name="search" type='text' value={inputLocationName} onChange={(event) => {
                    setInputLocationName(event.target.value);
                }} />
                <button className="search-field-button" type='button' onClick={updateWeather}></button>
            </div>
            <div className="weather-info">
                <div className="weather-info-temp">
                    {(error)
                        ? <><p>'Oops, no data for this place'</p>
                            <ul>
                                <li className="weather-info-temp-current temp-style"><span className="temp-current-value"><FaTemperatureLow size="16px" /></span></li>
                                <li className="drizzle-type"><GetSvgCondition size="16px" myCondition={condition} /></li>
                                <li className="drizzle-type"><WiHumidity size="16px" /> {humidity}</li>
                            </ul></>
                        : <><div className="weather-info-icon">
                            <img className="weather-icon-img" src={WeatherIcon} alt=''></img>
                        </div>
                            <div className="weather-info-temp-current">
                                <p className="drizzle-type"><FaTemperatureLow size="16px" />{tepmerature}</p>
                                <p className="drizzle-type"><GetSvgCondition size="16px" myCondition={condition} /> {condition}</p>
                                <p className="drizzle-type"><WiHumidity size="20px" /> {humidity}</p>
                            </div> </>}
                </div>
                <div className="weather-info-location">
                    <p className="drizzle-type">{inputLocationName},{country}</p>
                    <p className="drizzle-type">{LocationTime}</p>
                </div>

            </div>

            <p className="text-12-grey create-sign"> Create with love</p>

        </section>
            <h2 className="header-2">Check the weather in most popular cities in the world</h2>
            <section className="popular-cities-section">

                <div className="popular-cities-list">
                    <div className="popular-cities NewYork">
                        <button className="button-cities">New York</button>
                    </div>
                    <div className="popular-cities Paris">
                        <button className="button-cities" type='button' onClick={(event) => { setInputLocationName('Paris'); }}>Paris</button>   {/*key={Paris} onClick={() => updateWeather(Paris)} */}
                    </div>
                    <div className="popular-cities London">
                        <button className="button-cities">London</button>
                    </div>
                    <div className="popular-cities Dubai">
                        <button className="button-cities">Dubai</button>
                    </div>
                </div>
            </section></>

    );
}

export {WeatherList};
