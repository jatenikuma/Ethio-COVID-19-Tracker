import React , {useState, useContext, useEffect, useMemo, useReducer} from 'react'
import { Bar } from 'react-chartjs-2';
import {Data_Context} from './dataContext' 


const CovidBar = () =>{
    
    
    //chart labels
    const {dates} = useContext (Data_Context)
    const [ Dates , setDates] = dates

    const {confirmed} = useContext (Data_Context)
    const [ Confirmed , setConfirmed] = confirmed


     
    return (
      
        <Bar
            data={
                {
                labels: Dates,
                datasets: [{
                  label: 'Number of Cases',
                  data: Confirmed,
                  backgroundColor: 'rgb(0,255,0)',
                  borderColor: 'rgba(255,99,132,1)',
                  borderWidth: 1,
                  hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                  hoverBorderColor: 'rgba(255,99,132,1)',
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

export default CovidBar
