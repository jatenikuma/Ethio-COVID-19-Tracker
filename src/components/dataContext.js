import React , {useState, useEffect,createContext} from 'react'
import axios from 'axios'

export const Data_Context = createContext({});

const DataContext = (props) => {
    const [ country , setCountry ] = useState("")
    const [Regional_phone_numbers , setRegionalNumber]= useState([
    {"region":"Addis Ababa" , "number" :"1234"},
    {"region":"Oromia" , "number" : "1234" },
    {"region":"Tigray" , "number" : "1234" },
    {"region":"SNNPR" , "number" : "1234"},
    {"region":"Amhara" , "number" : "1234"}
  ])
   const [covid_numbers , setCovidNumbers ] = useState([])
   const [totalConfirmed , setTotalConfimed] = useState(0)
   const [totalDeaths , setTotalDeaths] = useState(0)
   const [new_cases , setNewCases] = useState(0)
   const [new_deaths , setNewDeaths ] =    useState(0)
   const [regional , setRegional] = useState([])
   const [deaths , setDeaths] = useState([])
   const [confirmed , setConfirmed ] = useState([])

   const [last_update , setLastUpdate] = useState ("")
   const [time_update , setTimeUpdate] = useState("")
   const [dates , setDates] = useState([])

    
   //base urls
   const url = "https://corona.lmao.ninja/v2/countries/Ethiopia?yesterday&strict&query%20"
   const historic_url = "https://corona.lmao.ninja/v2/historical/Ethiopia?lastdays=30" 

   //Fetching data
   const API_calls = async () => {
    
    const daily_response = await axios (url)

    setCountry(daily_response.data.country)
    setTotalConfimed(daily_response.data.cases)
    setTotalDeaths(daily_response.data.deaths)
    setNewCases(daily_response.data.todayCases)
    setNewDeaths(daily_response.data.todayDeaths)

    //console.log(daily_response)

    const historic_data = await axios (historic_url)

    Object.keys(historic_data.data.timeline.deaths).forEach(element => {
        
        setDates(prevState => [...prevState , element])

        setConfirmed(prevState => [...prevState , historic_data.data.timeline.cases[element]])

        setDeaths(prevState => [...prevState , historic_data.data.timeline.deaths[element]])
    });

 
   }


   const Realtime_Update = () =>{

    setInterval(() => {
        
        setConfirmed(prevState => [])
        setDeaths(prevState => [])
        setDates(prevState => [])
        setCountry(prevState => "")
        setNewCases(prevState => 0)
        setNewDeaths(prevState => 0)
        setTotalConfimed(prevState => 0)
        setTotalDeaths(prevState => 0)

        API_calls()
    }, 120000);
   }

useEffect(() =>{
    
    API_calls()
    //Realtime_Update()

},[])
   
    return(
        <div>

        {/* Exporting data to components */}
        <Data_Context.Provider value= 
        {{ country : [country , setCountry],
           totalConfirmed : [totalConfirmed , setTotalConfimed],
           totalDeaths : [totalDeaths , setTotalDeaths],
           new_cases : [new_cases , setNewCases],
           new_deaths : [new_deaths , setNewDeaths],

           //Bar data
            dates : [dates , setDates],
            confirmed : [confirmed , setConfirmed],
            
            //Line Data and share the dates with bar
            deaths : [deaths , setDeaths]
        
        }}>

        {props.children}
        </Data_Context.Provider>
        </div>
    )

}

export default DataContext