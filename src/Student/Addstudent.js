import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";

export function AddStudent() {

    const history = useHistory();

    const { student, setStudent } = AppState(); 

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [standard, setStandard] = useState("");


    const addNewstudent = async () => {
        
        const newStudent = {
            id,
            name,
            email,
            age,
            standard,
        }
        try{
            const response = await fetch("https://6410038fe1212d9cc926f746.mockapi.io/users",{
                method: "post",
                body:JSON.stringify(newStudent),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data1 = await response.json();
            setStudent([...student, data1])
            history.push("/")
        }catch(error){
            console.log(Error)
        }
    }

    return (
        <BaseApp
            title="Add New Student"
        >
            <div className="text-areas">


                <TextField
                    id="fullwidth"
                    label="id"
                    variant="outlined"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />


                <TextField
                    id="fullwidth"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />


                <TextField
                    id="fullwidth"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />


                <TextField
                    id="fullwidth"
                    label="age"
                    variant="outlined"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />

                <TextField
                    id="fullwidth"
                    label="standard"
                    variant="outlined"
                    value={standard}
                    onChange={(event) => setStandard(event.target.value)} />

                <Button
                    variant="contained"
                    color="success"
                    onClick={addNewstudent}
                >
                    Add
                </Button>

            </div>

        </BaseApp>
    )

}