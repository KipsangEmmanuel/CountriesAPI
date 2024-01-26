import React, { useReducer } from "react";
import Search from "../components/Search";
import Region from "../components/Region";
import Card, { HomeCards } from "../components/Card";

const initialState = {
  search: "",
  region: HomeCards
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_REGION":
      return { ...state, region: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { search, region } = state;

  const searchCountry = (e) => {
    const foundCountry = HomeCards.filter(country =>
      country.name.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    dispatch({ type: "SET_REGION", payload: e.target.value === "" ? HomeCards : foundCountry });
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  const regionFilter = (e) => {
    dispatch({
      type: "SET_REGION",
      payload: e.target.value === "All" ? HomeCards : HomeCards.filter(country => country.region === e.target.value)
    });
  };

  return (
    <main>
      <div className="bars">
        <Search searchCountry={searchCountry} />
        <Region regionFilter={regionFilter} />
      </div>
      <div className="cards-grid">
        {region.map((country) => (
          <Card country={country} key={country.alpha3Code} />
        ))}
      </div>
    </main>
  );
};

export default Home;
