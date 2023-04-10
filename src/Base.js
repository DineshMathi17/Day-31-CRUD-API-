import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
   const history = useHistory();
    return (
        <div>
            <div>
            <div className="nav-styles">
            <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/")}
                    >Student</button>
                </span>
                
                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/add")}
                    >Add Student</button>
                </span>

                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/teacher")}
                    >Teacher</button>
                </span>

                <span>
                    <button 
                    className="nav-buttons"
                   onClick={()=>history.push("/teacher/add")}
                    >Add Teacher</button>
                </span>

            </div>
            <div className="title">{title}</div>
            </div>

             <div className="childred">
                {children}
        <footer>
            contact us
             <div>email :msdbschool@gmail.com</div>
             <div>phone :8870****52</div>
         </footer>
             
             </div>

        </div>
    )
}