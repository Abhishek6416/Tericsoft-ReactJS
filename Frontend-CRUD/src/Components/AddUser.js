import React, { useState } from 'react'
import { FormControl,FormGroup,InputLabel,Input, TextField } from '@mui/material'
// import ReactDatePicker from 'react-datepicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterFormats } from '@mui/x-date-pickers'
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
// import {Radio} from '@material/core'
// import { CheckboxClassKey } from '@mui/material'

export default function AddUser() {

    const[value,setValue]=useState(null)
  return (
    <FormGroup>

        <FormControl>

<InputLabel>Name</InputLabel>
<Input/>

        </FormControl>



        <FormControl>

<InputLabel>Email</InputLabel>
<Input/>

        </FormControl>


        <FormControl>

<InputLabel>Phone</InputLabel>
<Input/>

        </FormControl>

        {/* <FormControl> */}


            {/* <ReactDatePicker selected={selectedDate} dateFormat="yyyy/mm/dd" 
            filterDate={date=>date.getDay()!=5}
            
            showYearDropdown scrollableMonthYearDropdown/> */}


           
        {/* </FormControl> */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker  label="select date" value={value}
        onChange={(newvalue)=>setValue(newvalue)} 
                renderInput={(props)=><TextField{...props}/>}
        />
        </LocalizationProvider>



        /


       
    </FormGroup>
  )
}
