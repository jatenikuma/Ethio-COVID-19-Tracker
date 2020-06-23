import React, {useState , useContext } from 'react';
import TreatmentCenters from './TreatmentCenters.json'
import ReactMapGl, {Marker,Popup} from 'react-map-gl'
import { Row, Card, CardBody, Col, CardHeader} from 'reactstrap';



const CovidTreatmentCenters = () => {

    const [viewport , setViewPort] = useState ({
        width: "100vw",
        height:"100vh",
        zoom: 5.5,
        latitude : 9.0107934,
        longitude: 40.7612525
    })

    const [selectedCenter , setSelectedCenter] = useState(null)

    //https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    return (
        <div>

            <ReactMapGl 
            {...viewport} 
            mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle = {"mapbox://styles/jateni/ckb5mh8rb1pu61inz7fo28s4k"}
            onViewportChange = {viewport => {
                setViewPort(viewport)
            }}
            
            >

            {
                Object.keys(TreatmentCenters).map( element  => (
                    

                    <Marker

                    key = {element}
                    latitude = {parseInt(TreatmentCenters[element].latitude)}
                    longitude = {parseInt(TreatmentCenters[element].longitude)}
                    >
                        <button className = "marker-btn" 
                        
                        onClick = {e => {
                            e.preventDefault()
                            setSelectedCenter({
                                title : element,
                                latitude : parseInt(TreatmentCenters[element].latitude),
                                longitude : parseInt(TreatmentCenters[element].longitude),
                                description : TreatmentCenters[element].description
                            })
                        }}
                        >
                            <img src = "/placeholder.png" />
                        </button>

                    </Marker>
                ))
            }
            {
                selectedCenter ? (

                    
                        <Popup
                        latitude = {selectedCenter.latitude}
                        longitude = {selectedCenter.longitude}
                        onClose = {() => {
                            setSelectedCenter(null)
                        }}
                        >
                        
                          <div>
                                <h3>{selectedCenter.title}</h3>
                          </div>
                                        
                            <p>{selectedCenter.description}</p>
                         
                        </Popup>
                   
                   
                ): null
            }
            
                
            </ReactMapGl>

            
        </div>
      );

}


export default CovidTreatmentCenters