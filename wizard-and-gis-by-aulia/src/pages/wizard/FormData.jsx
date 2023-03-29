import React, { useState } from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core';
import Datepicker from "react-tailwindcss-datepicker";
import './Styles.css';

export default function FormData() {

    const countries = [
        { value: "Indonesia", label: "Indonesia" },
        { value: "Cambodia", label: "Cambodia" },
        { value: "Laos", label: "Laos" },
    ];

    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }


    return (
        <div className="container mx-auto bg-white rounded-xl shadow border p-8 m-10" >
            <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
                Form Data
            </p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 20, md: 30 }}>
                <Grid item xs={6} className="pb-4 pr-4">
                    <TextField fullWidth select id="filled-select" label="Indonesia" variant="outlined" className="mx-480 my-120 w-1/2 ">
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </Grid>
                <Grid item xs={6} className="pb-4 pr-4 light:bg-white bg-white">

                    <Datepicker
                        placeholderText='DD/MM/YYYY'
                        dateFormat='dd/MM/yyyy'
                        primaryColor={"sky"}
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                    />

                </Grid>
                <Grid item xs={6} className="pb-4 pr-4">
                    <TextField fullWidth id="filled-basic" label="Name of the Area" variant="outlined" />
                </Grid>
            </Grid>
        </div >
    )
}

// export default FormData