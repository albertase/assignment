import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Countries.scss";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState();

  console.log(value)


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <select name="" id="">
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      <br />
      <div className="phoneInput_container">
        <PhoneInput
          international
          className="phoneInput"
          defaultCountry="NG"
          value={value}
          onChange={value => setValue(value)}
        />
      </div>
      {value}
      <div className="sass">
        <button>Sass</button>
      </div>
    </div>
  );
};

export default Countries;
