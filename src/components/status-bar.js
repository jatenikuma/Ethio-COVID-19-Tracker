import React, { useContext } from "react";
import { Data_Context } from "./dataContext";
import "../App.css";

const StatusBar = () => {
  const { country } = useContext(Data_Context);
  const [Country] = country;

  const { totalConfirmed } = useContext(Data_Context);
  const [TotalConfirmed] = totalConfirmed;

  const { totalDeaths } = useContext(Data_Context);
  const [TotalDeaths] = totalDeaths;

  const { new_cases } = useContext(Data_Context);
  const [New_cases] = new_cases;

  const { new_deaths } = useContext(Data_Context);
  const [New_deaths] = new_deaths;

  return (
    <div className="status-bar">
      <table className="table">
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>

        <tr>
          <th>COUNTRY</th>
          <th>TOTAL CASES</th>
          <th>TOTAL DEATHS</th>
          <th>NEW CASES</th>
          <th>NEW DEATHS</th>
        </tr>

        <tr>
          <td>{Country}</td>
          <td>{TotalConfirmed}</td>
          <td>{TotalDeaths}</td>
          <td>{New_cases}</td>
          <td>{New_deaths}</td>
        </tr>
      </table>
    </div>
  );
};

export default StatusBar;
