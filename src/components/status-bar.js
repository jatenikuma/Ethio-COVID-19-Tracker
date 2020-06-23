import React , {useState , useContext} from 'react'
import {Data_Context} from './dataContext' 

import { Row, Card, CardBody, Col} from 'reactstrap';
import {Table , TableCell, TableBody, TableContainer, TableHead, TableRow} from '@material-ui/core';

const StatusBar = () =>{

    const { country } = useContext (Data_Context)
    const [Country , setCountry ] = country

    const { totalConfirmed } = useContext (Data_Context)
    const [TotalConfirmed , setTotalConfimed] = totalConfirmed

    const { totalDeaths }= useContext (Data_Context)
    const [TotalDeaths , setTotalDeaths] = totalDeaths

    const { new_cases} = useContext (Data_Context)
    const [New_cases , setNewCases] = new_cases

    const { new_deaths} = useContext (Data_Context)
    const [New_deaths , setNewDeaths] = new_deaths

return(

            <div  >
                <Row>
                        <TableContainer >
                        <Table style={{ tableLayout: 'fixed' }}>
                            <thead style={{fontSize : '110%' , fontFamily : "Overpass, sans-serif",textAlign : "center"}}>
                                <tr >
                                    <th>COUNTRY</th>
                                    <th>TOTAL NUMBER OF CASES</th>
                                    <th>TOTAL NUMBER OF DEATHS</th>
                                    <th>NEW CASES</th>
                                    <th>NEW DEATHS</th>
                                </tr>
                            </thead>
                            <tbody  style={{fontSize : '120%' , fontWeight : "bolder", fontFamily : "Overpass, sans-serif"}}>
                                <tr>
                                    <td>{ Country }</td>
                                    <td>{ TotalConfirmed }</td>
                                    <td>{ TotalDeaths }</td>
                                    <td>{ New_cases }</td>
                                    <td>{ New_deaths }</td>

                                </tr>
                            </tbody>
                        </Table>
                    </TableContainer>            
                </Row>  
                    
                
            </div>
                    
)
}

export default StatusBar