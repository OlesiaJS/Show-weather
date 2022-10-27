
import "../components/style.css";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import GetSvgCondition from "./Condition";
import useWeather from "../hooks/useWeather";


function WeatherList() {

const {humidity, tepmerature, condition, country, LocationTime, WeatherIcon, error, inputLocationName, setInputLocationName, isLoading} = useWeather('Oslo');

    return (
        <><section className="weather-search">
            <form className="search-field">
                <input className="search-field-input" type='text' value={inputLocationName} onChange={({target: {value}}) => {
                    setInputLocationName(value);
                }} />
            </form>
            <div className="weather-info">
                {isLoading && <div style = {{textAlign: 'center'}}>Loading</div>}
                {error && <div style = {{textAlign: 'center'}}>Oops, no data for this place</div>}
                <div className="weather-info-temp">
                    {!error && tepmerature && (
                         <>
                         <div className="weather-info-icon">
                            <img className="weather-icon-img" src={WeatherIcon} alt=''></img>
                        </div>
                        <div className="weather-info-temp-current">
                                <p className="drizzle-type"><FaTemperatureLow size="16px" />{tepmerature}</p>
                                <p className="drizzle-type"><GetSvgCondition size="16px" myCondition={condition} /> {condition}</p>
                                <p className="drizzle-type"><WiHumidity size="20px" /> {humidity}</p>
                        </div> </>
                    )} 
                </div>
                <div className="weather-info-location">
                    <p className="drizzle-type">{inputLocationName} {country}</p>
                    <p className="drizzle-type">{LocationTime}</p>
                </div>

            </div>
            <p className="text-12-grey create-sign"> Create with love</p>
        </section>
            <h2 className="headerH2">Check the weather in most popular cities in the world</h2>
            <section className="popular-cities-section">
                <div className="popular-cities-list">
                    <div className="popular-cities London">
                        <button className="button-cities" type='button' onClick={(event) => { setInputLocationName('London'); }}>London
                        </button> 
                    </div>
                    <div className="popular-cities Paris">
                        <button className="button-cities" type='button' onClick={(event) => { setInputLocationName('Paris'); }}>Paris</button>   {/*key={Paris} onClick={() => updateWeather(Paris)} */}
                    </div>
                    <div className="popular-cities Dublin">
                        <button className="button-cities" type='button' onClick={(event) => { setInputLocationName('Dublin'); }}>Dublin
                        </button> 
                    </div>
                    <div className="popular-cities Dubaj">
                         <button className="button-cities" type='button' onClick={(event) => { setInputLocationName('Dubaj'); }}>Dubaj
                        </button> 
                    </div>
                </div>
            </section></>

    );
}

export {WeatherList};
