import { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";

export function AddTeacher() {
    const history = useHistory();

    const { teacher, setTeacher } = AppState();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const addNewTeacher = async () => {
        const newTeacher = {
            id,
            name,
            subject,
            email,
            age

        }
        try{
            const response = await fetch("https://6410038fe1212d9cc926f746.mockapi.io/teacher",{
                method: "post",
                body:JSON.stringify(newTeacher),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data2 = await response.json();
            setTeacher([...teacher, data2])
        history.push("/teacher")
        }catch(error){
            console.log(Error)
        }
   
    }

    return (
        <BaseApp
            title="Add New Teacher"
        >

            <div className="text-areas-t">

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
                    label="subject"
                    variant="outlined"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)} />


                <Button
                    variant="contained"
                    color="success"
                    onClick={addNewTeacher}>
                    Add
                </Button>



            </div>

        </BaseApp>
    )

}