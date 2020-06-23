import React, { useEffect } from 'react';
import './App.css';
import DataContext from './components/dataContext'
import StatusBar from './components/status-bar'
import { Row, Card, CardBody, Modal , Col} from 'reactstrap';
import CovidBar from './components/covid-bar'
import CovidLine from './components/covid-line';
import covid_treatment_centers from './components/covid_treatment_centers';
import CovidTreatmentCenters from './components/covid_treatment_centers';
import Footer from './components/footer'

const App = () => {

  useEffect(() => {

  },[])
  
  return (
    <div className="App">
      <DataContext>
        <div>
              <h1 style = {{fontSize : "400%", fontFamily : "Titillium Web, sans-serif"}} >ETHIOPIAN COVID-19 TRACKER</h1>
              <h3 style = {{fontSize : "200%", fontFamily : "Overpass, sans-serif", textAlign:"left", marginLeft:'5%' , marginBottom : '0.5%'}} > REALTIME STATUS</h3>

                      <div style={{paddingTop:'0%', marginBottom: '2%'}}>

                        <Card style={{boxShadow: '0 0 15px 0 rgb(0,255,0)', overflow: 'hidden', display: 'flex' ,  marginLeft:'5%' , marginRight:'5%'}}>
                            <div style={{paddingBottom:'1%'}} className="card-body">
                                <div style={{paddingTop:'20px'}}  >
                            </div>
                            </div>
                        
                            <CardBody style={{paddingTop:'0%', margin: '0%'}}>

                                <div style={{paddingTop:'0%', marginBottom: '2%'}}>
                                  <StatusBar />
                                </div>
                                </CardBody>
                    
                          </Card>
                      </div>

                      <h3 style={{fontSize : '110%' ,  marginBottom: '0.5%' , fontFamily : "Overpass, sans-serif",textAlign : "center"}}> በአጠቃላይ በበሽታው የተያዙ ሰዎች ቁጥር</h3>

                      <div style={{paddingTop:'0%', marginBottom: '2%'}}>

                        <Card style={{boxShadow: '0 0 10px 0 rgb(255,255,0)' ,  marginLeft:'5%' , marginRight:'5%'}}>
                          <CardBody>

                            <CovidBar />

                          </CardBody>
                        </Card>
                      </div>


                    {/* Line chart */}
                    <h3 style={{fontSize : '110%' ,  marginBottom: '0.5%' , fontFamily : "Overpass, sans-serif",textAlign : "center"}}> በአጠቃላይ በበሽታው የሞቱ ሰዎች ቁጥር </h3>

                      <div  style={{paddingTop:'0%', marginBottom: '2%'}}>

                        <Card style={{boxShadow: '0 0 10px 0 rgb(255,0,0)' ,  marginLeft:'5%' , marginRight:'5%'}}>
                          <CardBody>

                            <CovidLine />

                          </CardBody>
                        </Card>
                      </div>

                    {/* Treatment Centers Location */}
                    <h3 style={{fontSize : '110%' ,  marginBottom: '0.5%' , fontFamily : "Overpass, sans-serif",textAlign : "center"}}> የምርመራ ማዕከላት (Testing Centers) </h3>

                      <div  style={{paddingTop:'0%', marginBottom: '2%'}}>

                        <Card style={{boxShadow: '0 0 10px 0 rgb(255,0,0)' ,  overflow: 'hidden', display: 'flex' , marginLeft:'5%' , marginRight:'5%'}}>
                          <CardBody>

                            <CovidTreatmentCenters />

                          </CardBody>
                        </Card>
                      </div>

                    {/* Footer */}
                    <h3 style={{fontSize : '110%' ,  marginBottom: '0.5%' , fontFamily : "Overpass, sans-serif",textAlign : "center"}}> Contact Us</h3>

                        <div style={{paddingTop:'0%',display: 'flex',  justifyContent:'center', alignItems:'center'}}>

                        <Footer />
                          
                    </div>

        </div>
      </DataContext>
    </div>
  );
}

export default App;
