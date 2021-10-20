import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../css/Home.css'
import { useHistory } from 'react-router-dom';

function Home(){
    const [customerDetails, setcustomerDetails] = useState([])
    const [searchDetails, setsearchDetails] = useState([])

    const [searchData, setSearchData] = useState()
    const [editData, setEditData] = useState()
    const [addData, setAddData] = useState()

    useEffect(()=> {
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setcustomerDetails(response.data)
        })
    })
    useEffect(()=> {
        Axios.post('http://localhost:3001/api/search',{
            searchvalue: searchData}).then((response)=>{
                setsearchDetails(response.data)
            })
    },[searchData])
 
    function demo(){
        console.log("loading")
    }
    let history = useHistory();

    const redirect = () => {
      history.push('/addstudent')
    }
  
  
    return (
        <div>
            <h1>Student Details </h1>
              <form className="search-form">  
                  <input type="text" className="searchbox" placeholder="Search by Name, Result, Rank" onChange={(e)=> {
                    setSearchData(e.target.value)
                    }}/>
                {searchData ? 
                <input type="reset" value="clear" className="resetButton" onClick={() => {
                    setSearchData(0)
                    }}/> : null}
                </form>
            <table class="table">
                <tr className="table-head">
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Mark_1</th>
                    <th>Mark_2</th>
                    <th>Mark_3</th>
                    <th>Total</th>
                    <th>Rank</th>
                    <th>Result</th>
                </tr>
                {searchData  ? 
                <>
                     {searchDetails.map((val, index) =>{
                         var index = index+1;
                        return(
                        <>
                            <tr>  <td>{index}</td> <td>{val.student_name}</td>   <td>{val.mark_1}</td>  <td> {val.mark_2}</td>   <td> {val.mark_3} </td>  <td>{val.total}</td> <td>{val.rank}</td> <td>{val.result}</td></tr>
                        </>
                        )
                    })} 
                </>
                :
                <>
                    {customerDetails.map((val, index) =>{
                        var index = index+1;
                        return(
                            <>
                                <tr> <td>{index}</td> <td>{val.student_name}</td>   <td>{val.mark_1}</td>  <td> {val.mark_2}</td>   <td> {val.mark_3} </td>  <td>{val.total}</td> <td>{val.rank}</td> <td>{val.result}</td></tr> 
                            </> 
                        ) 
                    })} 
                 
                </>}
            </table>
            <div className="action-button">
                <>
                    <button className="resetButton" onClick={() => setEditData(1)}> Edit</button>
                    <button className="resetButton" onClick={redirect}> Add</button>
                </>
            </div>
        </div>
    )
}

export default Home;