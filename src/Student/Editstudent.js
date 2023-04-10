import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";
import { Button, TextField } from "@mui/material";

export function EditStudent() {

    const history = useHistory();

    const { student, setStudent } = AppState();

    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [standard, setStandard] = useState("");


    const { id } = useParams();
    const selectedStudent = student.find((stu) => stu.id === id);


    useEffect(() => {
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setEmail(selectedStudent.email)
        setAge(selectedStudent.age)
        setStandard(selectedStudent.standard)

    }, []);

    const EditedStudent = async () => {
        const editindex = student.findIndex(stu => stu.id === id);
        const editedData = {
            id: idx,
            name,
            email,
            age,
            standard,

        }
        try {
            const response = await fetch(`https://6410038fe1212d9cc926f746.mockapi.io/users/${idx}`, {
                method: "PUT",
                body: JSON.stringify(editedData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data1 = await response.json();
               console.log(data1);
            student[editindex] = data1;
            setStudent([...student]);
            history.push("/")
        } catch (error) {
            console.log(Error)
        }

}

return (
    <BaseApp
        title=" Edit Student Data"
    >


        <div className="text-areas">

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
                label="standard"
                variant="outlined"
                value={standard}
                onChange={(event) => setStandard(event.target.value)} />

            <Button
                variant="contained"
                color="success"
                onClick={EditedStudent}>
                Edit
            </Button>

        </div>

    </BaseApp>
)
}