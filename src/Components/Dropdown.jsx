import React from "react";
import { Country, State, City } from "country-state-city";
import { useState } from "react";

const Dropdown = () => {
  const [selectCountry, setselectCountry] = useState("");

  const [states, setstates] = useState([]);

  const [cities, setcities] = useState([]);

  const allCountries = Country.getAllCountries(); //its an array

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
   setselectCountry(countryCode)
   setcities([])
   const fetchedStates = State.getStatesofCountry(countryCode); 
   setstates(fetchedStates);
  };

  return (
    <div className="p-5  sm:w-[600px] bg-white/10 backdrop-blur-md border border-white/20  rounded-lg shadow-lg text-center h-15 mt-[12%] ml-[25%] ">
      <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold ">
        Country State City DropDown List
      </h1>
      <div className="mt-5 space-y-4 ">
        <select className="block w-full outline-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 text-white shadow-md  " value={selectCountry}
          onChange={handleCountryChange}>
          
          <option value="">Select Country</option>
          {allCountries.map((country) => {
            return (
              <option
                key={country.isoCode}
                value={country.isoCode}
                className="text-black"
              >
                {country.name}
              </option>
            );
          })}
        </select>
        <select className="block w-full outline-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 text-white shadow-md ">
          <option value="">Select State</option>
        </select>
        <select className="block w-full outline-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-1 text-white shadow-md ">
          <option value="">Select City</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
