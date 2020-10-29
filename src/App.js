import React, { useEffect } from "react";
import "./App.css";
import DataContext from "./components/dataContext";
import StatusBar from "./components/status-bar";
import { Card, CardBody, Container } from "reactstrap";
import CovidBar from "./components/covid-bar";
import CovidLine from "./components/covid-line";
import CovidTreatmentCenters from "./components/covid_treatment_centers";
import Footer from "./components/footer";

const App = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <div className="App">
        <DataContext>
          {/* <div className="w-100" style={{ maxWidth: "900px" }}> */}
          <div>
            <div className="header-text">
              <h1
                style={{
                  fontSize: "400%",
                  fontFamily: "Titillium Web, sans-serif",
                }}
              >
                ETHIO COVID-19 TRACKER
              </h1>
              <h3
                style={{
                  fontSize: "200%",
                  fontFamily: "Overpass, sans-serif",
                  textAlign: "left",
                  marginLeft: "5%",
                  marginBottom: "0.5%",
                }}
              >
                {" "}
                REALTIME STATUS
              </h3>
            </div>

            <div style={{ paddingTop: "0%", marginBottom: "2%" }}>
              <Card
                style={{
                  boxShadow: "0 0 5px 0 rgb(0,255,0)",
                  overflow: "hidden",
                  display: "flex",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <div style={{ paddingBottom: "1%" }} className="card-body">
                  <div style={{ paddingTop: "20px" }}></div>
                </div>

                <CardBody style={{ paddingTop: "0%", margin: "0%" }}>
                  <div style={{ paddingTop: "0%", marginBottom: "2%" }}>
                    <StatusBar />
                  </div>
                </CardBody>
              </Card>
            </div>

            <h3
              style={{
                fontSize: "110%",
                marginBottom: "0.5%",
                fontFamily: "Overpass, sans-serif",
                textAlign: "center",
              }}
            >
              {" "}
              በአጠቃላይ በበሽታው የተያዙ ሰዎች ቁጥር
            </h3>

            <div
              className="bar-chart"
              style={{ paddingTop: "0%", marginBottom: "2%" }}
            >
              <Card
                style={{
                  boxShadow: "0 0 5px 0 rgb(255,255,0)",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <CardBody>
                  <CovidBar />
                </CardBody>
              </Card>
            </div>

            {/* Line chart */}
            <h3
              style={{
                fontSize: "110%",
                marginBottom: "0.5%",
                fontFamily: "Overpass, sans-serif",
                textAlign: "center",
              }}
            >
              {" "}
              በአጠቃላይ በበሽታው የሞቱ ሰዎች ቁጥር{" "}
            </h3>

            <div style={{ paddingTop: "0%", marginBottom: "2%" }}>
              <Card
                style={{
                  boxShadow: "0 0 10px 0 rgb(255,0,0)",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <CardBody>
                  <CovidLine />
                </CardBody>
              </Card>
            </div>

            {/* Treatment Centers Location */}
            <h3
              style={{
                fontSize: "110%",
                marginBottom: "0.5%",
                fontFamily: "Overpass, sans-serif",
                textAlign: "center",
              }}
            >
              {" "}
              የምርመራ ማዕከላት (Testing Centers){" "}
            </h3>

            <div style={{ paddingTop: "0%", marginBottom: "2%" }}>
              <Card
                style={{
                  boxShadow: "0 0 5px 0 rgb(255,0,0)",
                  overflow: "hidden",
                  display: "flex",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <CardBody>
                  <CovidTreatmentCenters />
                </CardBody>
              </Card>
            </div>

            {/* Footer */}
            <h3
              style={{
                fontSize: "110%",
                marginBottom: "0.5%",
                fontFamily: "Overpass, sans-serif",
                textAlign: "center",
              }}
            >
              {" "}
              Contact
            </h3>

            <div
              style={{
                paddingTop: "0%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Footer />
            </div>
          </div>
        </DataContext>
      </div>
    </Container>
  );
};

export default App;
