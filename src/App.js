import web from "./images/web.jpg";
import logo from "./images/logo.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [quantityOfCompost, setQuantityOfCompost] = useState("");
  const [totalOrganicWaste, setTotalOrganicWaste] = useState("");
  const [ratePerTon, setRatePerTon] = useState("");
  return (
    <>
      <div className="App">
        <img src={web} className="App" alt="bg-img" />
      </div>
      <div className="main-bar">
        <div className="bar">
          <img src={logo} alt="" logo />
        </div>
        <div className="bar">
          <a href="#home">Eco Model-1</a>
        </div>
        <div className="bar">
          <a href="#home">Eco Model-2</a>
        </div>
        <div className="bar">
          <a href="#home">Eco Model-3</a>
        </div>
        <div className="bar">
          <a href="#home">Qtm & Eco. Benefit</a>
        </div>
        <div className="bar">
          <a href="#home">Scenarios </a>
        </div>
      </div>
      <div className="main-bar2">
        <div className="big-box">
          <div className="box">
            <label>
              {" "}
              Enter Quantity Of Compost
              <input
                type="text"
                value={quantityOfCompost}
                onChange={(e) => setQuantityOfCompost(e.target.value)}
              />
              {console.log(quantityOfCompost)}
            </label>
          </div>
          <div className="box">
            <label>
              {" "}
              Enter Total Organic Wastes
              <input
                type="text"
                value={totalOrganicWaste}
                onChange={(e) => setTotalOrganicWaste(e.target.value)}
              />
              {console.log(totalOrganicWaste)}
            </label>
          </div>
          <div className="box">
            <label>
              {" "}
              Enter compost per ton rate
              <input
                type="text"
                value={ratePerTon}
                onChange={(e) => setRatePerTon(e.target.value)}
              />
              {console.log(ratePerTon)}
            </label>
          </div>
          <button className="submit-btn" type="submit">
            Calculate
          </button>
        </div>
        <div className="big-box">
          <div className="box">
            <h3>Total Organic Waste is 697 Tons / day</h3>
          </div>
          <div className="box">
            <h3>Total compost is 105 Tons / day</h3>
          </div>
          <div className="box">
            <h3>Total revenue is 836400 Rs / Kg</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
