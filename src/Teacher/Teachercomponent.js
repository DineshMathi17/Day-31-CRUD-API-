import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Base";
import { AppState } from "../appprovider";


export default function TeacherComponent() {
    const { teacher, setTeacher } = AppState();

    const history = useHistory();
    const teacherDelete = async (idx) => {
        try {
            const response = await fetch(`https://6410038fe1212d9cc926f746.mockapi.io/teacher/${idx}`, {
                method: "Delete"
            })
            const data1 = await response.json();
            const teacherAlterList = teacher.filter((tea) => tea.id !== idx);
            setTeacher(teacherAlterList)
        } catch (error) {
            console.log(Error)
        }
    }
    return (
        <BaseApp
            title="Teacher List"
        >

            <div className="tea-com">
                {
                    teacher.map((teachers, index) => (
                        <div key={index} className="tea-com2">
                            <h1>{teachers.name}</h1>
                            <p>Subject : {teachers.subject}</p>
                            <p>Email: {teachers.email}</p>
                            <p>Age: {teachers.age}</p>


                            <div className="btn-group">
                                <button
                                    className="btn btn-view"
                                    onClick={() => history.push(`/teacher/view/${index}`)}
                                >View</button>

                                <button
                                    className="btn btn-edit"
                                    onClick={() => history.push(`/teacher/edit/${teachers.id}`)}
                                >Edit</button>

                                <button
                                    className="btn btn-delete"
                                    onClick={() => teacherDelete(teachers.id)}
                                >Delete</button>
                            </div>
                        </div>

                    ))


                }
            </div>


        </BaseApp>
    )
}