import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Excuse = () => {
    const excusepoint = "https://excuser.herokuapp.com/v1/excuse/4"
    const excuseOffice = "https://excuser.herokuapp.com/v1/excuse/office/4"
    const excuseCollege = "https://excuser.herokuapp.com/v1/excuse/college/3"
    const [allExcuses, setallExcuses] = useState([])
    const excuseOffices = ()=>{
        axios.get(excuseOffice).then((family)=>{
            console.log(family)
            setallExcuses(family.data)
        })
    }
    const excuseColleges = ()=>{
        axios.get(excuseCollege).then((college)=>{
            console.log(college)
            setallExcuses(college.data)
        })
    }
 

    const getExcuse = ()=>{
        axios.get(excusepoint).then((result)=>{
            console.log(result)
            setallExcuses(result.data)

        })
       

    }

  return (
    <>
     <div className='col-md-8 mx-auto mt-5'>
        <div className='container border border-success rounded-top bg-light'>
            <div className='row mt-5'>
                <div className='col-md-3 col-3 mx-auto'>
                <button className='btn btn-outline-dark text-center' onClick={getExcuse}>general excuse</button>
                </div>
                <div className='col-md-3 col-3 mx-auto'>
                <button className='btn btn-info btn-outline-dark' onClick={excuseOffices}>Office excuse</button>
                    
 
                </div>
                <div className='col-md-3 col-3 mx-auto'>
                <button className='btn btn-warning btn-outline-dark rounded-6 mb-5' onClick={excuseColleges}>college excuse</button>
                    
 
                </div>
            </div>
      
        </div>
    </div>
    
    {
        allExcuses.map((user)=>(
            <>
            <div className='col-md-8 mx-auto mt-5'>
                <div className='container bg-white border border-info'>
                <div className='text-center font-weight-bold text-wrap'><b>{user.excuse}</b></div>

                </div>
            </div>
            
            
            
            </>
        ))

    }
   
  
    </>
  )
}

export default Excuse;