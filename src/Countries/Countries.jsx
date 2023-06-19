import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import "./Country.css";
import { countries } from "./data";

const Countries = () => {
  const [drop, setDrop] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    setFilteredData(
      countries.filter((item) => item.toLocaleLowerCase().startsWith("a"))
    );
  }, []);

  return (
    <section className="container">
      <div className="main">
        <h1 className="title" onClick={() => setDrop(!drop)}>
          {select || "Select a Country"}
          <span>
            <MdKeyboardArrowDown
              className={`${drop ? "rotate" : "normal"}`}
              style={{ fontSize: "1.6rem", pointerEvents: "none" }}
            />
          </span>
        </h1>

        {/* countries data  */}
        <div className={`country_data ${drop && "showDrop"}`}>
          <div className="search">
            <span>
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="search for countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="country">
            {!search
              ? filteredData.map((country, i) => (
                  <span onClick={() => setSelect(country)} key={i}>
                    {country}
                  </span>
                ))
              : countries.map((country, i) => (
                  <span
                    onClick={() => setSelect(country)}
                    key={i}
                    className={`${
                      country.toLocaleLowerCase().startsWith(search)
                        ? "block"
                        : "hidden"
                    }`}>
                    {country}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
