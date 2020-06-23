import React , {useState, useContext, useEffect} from 'react'
import { Line } from  'react-chartjs-2';
import {Data_Context} from './dataContext' 


const CovidLine = () =>{

    //chart labels
    const {dates} = useContext (Data_Context)
    const [ Dates , setDates] = dates

    const {deaths} = useContext (Data_Context)
    const [Deaths , setDeaths] = deaths

    

    


    return(
        <Line 
        
        data={
            {
            labels: Dates,
            datasets: [{
              label: 'Number of Deaths',
              data: Deaths,
              backgroundColor: 'rgb(0,255,0)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)'
            }]
        }
        }
        options = {{
            legend: {
                labels: {
                    fontColor: 'black',
                    fontSize : 20
                }
            }
        }
        }
        />
    )

}
export default CovidLine
