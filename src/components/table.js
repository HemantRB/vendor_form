import React, { useState } from 'react'
import Form from "./form"
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper, TableHead, Button } from "@material-ui/core"
const vendor = [
    {
        name: "sweet mart",
        email: "sweetmart@pro.com",
        mobileno: "012365",
        speciality: "milk products",
        status: "not available"
    },
    {
        name: "mall",
        email: "mall@pro.com",
        mobileno: "012345",
        speciality: "video game",
        status: "always available"
    }
]


export default function Form_table() {

    const [open, setOpen] = useState(false)
    const [opentable, setOpentable] = useState(true)
    const onClick = () => {
        setOpen(true)
        setOpentable(false)
    }
    const undo = () => {
        setOpen(false)
        setOpentable(true)
    }
    return (

        <div>
            <h2 className="headcolor">Vendor Details and info </h2>
            <p>fill some basic info</p>
            <div>
                <Button
                    className="btn  color" type="button" variant="contained" color="primary" value="Add" onClick={onClick} >
                    OpenForm

                </Button>
                {
                    open && <Form />
                }
            </div>
            <br />
            <div>

                <Button
                    className="btn  cancel" type="button" variant="contained" color="outlined" value="Add" onClick={undo} >
                    undo
                </Button>
            </div>
            {opentable &&
                <TableContainer component={Paper}>
                    <Table class="table caption-top" padding="checkbox">
                        <caption>List of users</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell scope="col">Srno</TableCell>
                                <TableCell scope="col">Name</TableCell>

                                <TableCell scope="col">Vendor Email</TableCell>
                                <TableCell scope="col">Mobile no.</TableCell>
                                <TableCell scope="col">Speciality</TableCell>
                                <TableCell scope="col">Status</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                vendor.map((vendor, index) =>
                                    <TableRow>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{vendor.name}</TableCell>
                                        <TableCell>{vendor.email}</TableCell>
                                        <TableCell>{vendor.mobileno}</TableCell>
                                        <TableCell>{vendor.speciality}</TableCell>
                                        <TableCell>{vendor.status}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => alert("Updated")}>Update</Button>
                                            <Button variant="contained" color="secondary">Delete</Button>
                                        </TableCell>
                                    </TableRow>)
                            }


                        </TableBody>
                    </Table>
                </TableContainer>
            }


        </div>
    )
}
