import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";

export function EditTeacher() {

    const { teacher, setTeacher } = AppState();
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const { id } = useParams();
    const selectedteachers = teacher.find((tea) => tea.id === id);
    const history = useHistory();

    useEffect(() => {
        setIdx(selectedteachers.id)
        setName(selectedteachers.name)
        setSubject(selectedteachers.subject)
        setEmail(selectedteachers.email)
        setAge(selectedteachers.age)

    }, []);

    const EditedTeacher = async () => {
        const editindex = teacher.findIndex(tea => tea.id === id);
        const editedData = {
            id: idx,
            name,
            subject,
            email,
            age

        }
        try {
            const response = await fetch(`https://6410038fe1212d9cc926f746.mockapi.io/teacher/${idx}`, {
                method: "PUT",
                body: JSON.stringify(editedData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data1 = await response.json();
               console.log(data1);
            teacher[editindex] = data1;
            setTeacher([...teacher]);
        history.push("/teacher")
        } catch (error) {
            console.log(Error)
        }
       
    }

    return (
        <BaseApp
            title="Edit Teacher Data "
        >

            <div className="text-areas-t">

                <TextField
                    id="fullwidth"
                    label="id"
                    variant="outlined"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
                />


                <TextField
                    id="fullwidth"
                    label="name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />

                <TextField
                    id="fullwidth"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />


                <TextField
                    id="fullwidth"
                    label="age"
                    variant="outlined"
                    value={age}
                    onChange={(event) => setAge(event.target.value)} />

                <TextField
                    id="fullwidth"
                    label="subject"
                    variant="outlined"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)} />

                <Button
                    variant="contained"
                    color="success"
                    onClick={EditedTeacher}>
                    Edit
                </Button>

            </div>
        </BaseApp>
    )
}