import React from "react";
import Api from "../services/Api";
const Home = (props) => {
  const generateString = (e) => {
    e.preventDefault();
    let result = Api.generate_random_data1(200000);
    console.log(result);
  };
  return (
    <div className="home">
      <div>
        <button className="button" onClick={generateString}>
          <span>Generate</span>
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
