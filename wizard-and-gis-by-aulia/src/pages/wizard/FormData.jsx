import React, { useState } from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core';
import Datepicker from "react-tailwindcss-datepicker";
import './Styles.css';

export default function FormData() {

    //Indonesia, Malaysia, Thailand, Philipines, Vietnam, Cambodia, and Laos

    const countries = [
        { value: "Indonesia", label: "Indonesia" },
        { value: "Malaysia", label: "Malaysia" },
        { value: "Thailand", label: "Thailand" },
        { value: "Philipines", label: "Philipines" },
        { value: "Vietnam", label: "Vietnam" },
        { value: "Cambodia", label: "Cambodia" },
        { value: "Laos", label: "Laos" },
    ];

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }


    return (
        <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10" >
            <div class="grid grid-cols-3 pl-20">
                <div />
                <div>
                    <p className="text-3xl text-gray-700 font-bold mb-5 text-center pb-4">
                        Form Data
                    </p>
                    <div className="pb-8">
                        <TextField fullWidth select id="filled-select" label="Country" variant="outlined" className="mx-480 my-120 w-1/2 pb-12">
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="pb-8">
                        <TextField fullWidth id="filled-basic" label="Name of the Area" variant="outlined" />
                    </div>
                    <div className="container mx-auto bg-white rounded-md shadow border p-2">
                        <Datepicker
                            placeholderText='DD/MM/YYYY'
                            dateFormat='dd/MM/yyyy'
                            primaryColor={"sky"}
                            value={value}
                            onChange={handleValueChange}
                            showShortcuts={true}
                        />
                    </div>
                </div>
                <div />
            </div>
        </div >
    )
}

// export default FormData