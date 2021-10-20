import React,{ useState, useEffect } from 'react'
import Axios from 'axios'
import '../css/customer.css'

function Form(){
    const [name, setName] = useState("")
    const [mark1, setMark1] = useState("")
    const [mark2, setMark2] = useState("")
    const [mark3, setMark3] = useState("")

    const submitReview = () =>{
        console.log('loading')
        Axios.post("http://localhost:3001/api/insert",{
            name: name, 
            mark1: mark1, 
            mark2: mark2, 
            mark3: mark3,}).then(()=>{
                alert("Successfully inserted")
            })
        }
    return(
        <div class="container">
            <form>
                <img className="res-image" src=""></img>
                <label htmlFor="name">Student Name :</label>
                <input className="form-control" type="text" name="name" onChange={(e) =>{
                    setName(e.target.value)
                }}/>
                <label htmlFor="Mark 1">Mark 1 :</label>
                <input className="form-control" type="number" name="Mark1" onChange={(e) =>{
                    setMark1(e.target.value)
                }}/>
                <label htmlFor="Mark 2">Mark 2 :</label>
                <input className="form-control" type="number" name="Mark2" onChange={(e) =>{
                    setMark2(e.target.value)
                }}/>
                <label htmlFor="Mark 3">Mark 3 :</label>
                <input className="form-control" type="number" name="Mark3" onChange={(e)=> {
                    setMark3(e.target.value)
                }}/>
                <div className="form-button">
                    <input type="submit" value="Add" onClick={submitReview}/>
                    <input type="reset" value="Clear" /> 
                </div>
            </form>
        </div>
    )
}

export default Form;