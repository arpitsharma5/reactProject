import {useState} from "react";

function DropDown() {

  const countryStateCityData = {
    India: {
      Delhi: ["New Delhi", "Dwarka", "Rohini"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    },
    USA: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      Texas: ["Houston", "Dallas", "Austin"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
    Canada: {
      Ontario: ["Toronto", "Ottawa", "Hamilton"],
      Quebec: ["Montreal", "Quebec City", "Laval"],
      Alberta: ["Calgary", "Edmonton", "Red Deer"],
    }
  };

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    const states = Object.keys(countryStateCityData[e.target.value]);
    setStates(states);
    setCities([]);
  }

  const handleStateChange = (e) => {
    const state= e.target.value;
    const cities = countryStateCityData[country][state];
    setState(state);
    setCities(cities);
  }

  const handleCityChange = (e) => {

  }
  return (
      <>
        <div style={{marginLeft: "146px"}}>
          <label>Country</label>
          <div>
            <select onChange={handleCountryChange}>
              <option>Select</option>
              {Object.keys(countryStateCityData).map((country) => {
                return <option key={country} value={country}>
                  {country}
                </option>
              })}
            </select>
          </div>
          <div>
            <label>State</label>
            <div>
              <select onChange={handleStateChange}>
                <option>Select</option>

                {states.map(state => (
                    <option value={state}>
                      {state}
                    </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label>Cities</label>
            <div>
              <select onChange={handleCityChange}>
                <option>Select</option>
                {cities.map(city => (
                    <option value={city}>
                      {city}
                    </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </>
  )

}

export default DropDown