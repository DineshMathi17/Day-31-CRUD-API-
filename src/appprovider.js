import {createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();
const AppProvider =({children})=>{
    const [student,setStudent]=useState([]);
    const [teacher,setTeacher] = useState([]);
    useEffect(()=>{
        const getDetails = async () => {
            try {
                const response = await fetch("https://6410038fe1212d9cc926f746.mockapi.io/users", {
                    method: "GET"
                });
                const data = await response.json()
                console.log(data)
                setStudent(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    },[])
    useEffect(()=>{
        const getDetails = async () => {
            try {
                const response = await fetch("https://6410038fe1212d9cc926f746.mockapi.io/teacher", {
                    method: "GET"
                });
                const data = await response.json()
                console.log(data)
                setTeacher(data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetails();
    },[])
    return(
        <AppContext.Provider
        value={{
            student,
            setStudent,
            teacher,
            setTeacher
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppState = () =>{
    return useContext(AppContext)
}
export default AppProvider