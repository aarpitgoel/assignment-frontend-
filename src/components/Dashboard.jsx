import React from "react";
import "../styles.css";
import { SearchOutlined } from "@ant-design/icons";
import { articles } from "./info";
import Sort from "./Sort";
import Greet from "./Greet";

export default function Dashboard() {
  const [data, setData] = React.useState(articles);
  const [input, setInput] = React.useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    let filterValue = event.target.value.toLowerCase();
    if (filterValue === "") {
      setData(articles);
    } else {
      let filteredData = articles.filter(
        (obj) =>
          obj.title.toLowerCase().includes(filterValue) ||
          obj.company.toLowerCase().includes(filterValue)
      );
      setData(filteredData);
    }
  };

  return (
    <div className="Application">
      <div className="header">
        <div className="companyLogo">
          <img
            className="logo"
            src="//d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
            alt="companyLogo"
          />
        </div>
        <div className="greetUser">
          <Greet />
        </div>
        <div className="searchBar">
          <div className="searchSymbol">
            <SearchOutlined />
          </div>
          <input
            type="search"
            placeholder="Search stories by title, url or author"
            className="searchInput"
            value={input}
            onChange={(event) => handleChange(event)}
          ></input>
        </div>
      </div>
      <div className="sortbar">
        <Sort length={data.length} />
      </div>
      <div className="blank"></div>
      <div className="listContent">
        {data.map((obj) => (
          <div className="block">
            <div className="titleblock">
              <div className="storytitle">{obj.title}</div>
              <div>
                <a className="web-link" href={obj.link} target={obj.link}>
                  ({obj.link})
                </a>
              </div>
            </div>
            <div className="details">
              <a className="link" href={obj.points} target="_blank">
                {obj.points} points |{" "}
              </a>{" "}
              |
              <a className="link" href={obj.company} target="_blank">
                {obj.company} |{" "}
              </a>{" "}
              |
              <a className="link" href={obj.time} target="_blank">
                {obj.time} |
              </a>{" "}
              |
              <a className="link" href={obj.comments} target="_blank">
                {obj.comments} comments{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
