import './App.css';
import React from 'react';
import StudentComponent from './Student/studentcomponent';
import { AddStudent } from './Student/Addstudent';
import { EditStudent } from './Student/Editstudent';
import { DetailsStudent } from './Student/StudentDetails';
import TeacherComponent from './Teacher/Teachercomponent';
import { DetailsTeacher } from './Teacher/TeacherDetails';
import { EditTeacher } from './Teacher/EditTeacher';
import { AddTeacher } from './Teacher/Addteacher';
import { Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">   
        <switch>

          <Route exact path="/">
            <StudentComponent />
          </Route>
          <Route path="/add">
            <AddStudent/>
              </Route>

          <Route path="/student/edit/:id">
            <EditStudent/>
          </Route>

          <Route path="/student/view/:id">
            <DetailsStudent />
          </Route>

          <Route exact path="/teacher">
            <TeacherComponent />
          </Route>
          <Route path="/teacher/add">
            <AddTeacher />
          </Route>

          <Route path="/teacher/edit/:id">
            <EditTeacher />
          </Route>

          <Route path="/teacher/view/:id">
            <DetailsTeacher />
          </Route>

          </switch>
    </div>
  );
}

export default App;
