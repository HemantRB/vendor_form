import React,{useState} from 'react'
import {TextField,Button} from "@material-ui/core"

export default function Form(props) {
    const [value,setValue]=useState({
        vendorName:"",
        vendorEmail:"",
        vendorMobile:"",
        vendorAddress:"",
        vendorSpeciality:"",
        Status:""


    })
    const onChange=(e)=>{
      
      setValue({...value,[e.target.name]:e.target.value})
      console.log(value)
    }
    const onSubmit=(e)=>{
     
        alert(e.value)
    }
    return (
        <card className="container">

            <form onSubmit={e=>onSubmit(e)
            
            }>
        


                <div className="input-group mb-3">
                   
                    <TextField label="Vendor name" placeholder=" enter vendor name" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                   
                    <TextField label="Vendor Adress" placeholder=" enter vendor Adress" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    
                    <TextField label="Vendor Email" placeholder=" enter vendor Email" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Vendor contactno" placeholder=" enter vendor contactno" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Vendor Speciality" placeholder=" enter vendor Speciality" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <TextField label="Status" placeholder=" enter vendor Status" variant="outlined" onChange={e=>onChange(e)}/>
                </div>
                <div className="input-group mb-3">
                    <Button color="secondary" variant="contained" >
                        Submit
                    </Button>
                </div>



            </form>
        </card>

    )
}
