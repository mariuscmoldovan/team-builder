import './App.css';
import React, {useState} from 'react'
import Form from './Form.js'
import styled from "styled-components";

const defaultFormValues = {
  name: '',
  email:'',
  role:''
}

const defaultData = [
  {
      name:"Mario",
      email:"mario@gmail.com",
      role:"web-developer"
  },
  {
      name:"Petro",
      email:"petro@gmail.com",
      role:"frontend-developer"
  },
  {
      name:"Jon",
      email:"jon@gmail.com",
      role:"backend-developer"
  }
]


const StyledDiv = styled.div`
  width:90%;
  margin-left:20%;
  color: green

`

function App() {
  const [formValues, setFormValues] = useState(defaultFormValues)
  const [team, setTeam] = useState(defaultData)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName] : inputValue})
  }

  const submitForm = () => {
    const newMember = {name:formValues.name.trim(),email:formValues.email.trim(),role:formValues.role}
    if (newMember.name === "" || newMember.email === ""){
      return;
    }
    setTeam(team.concat(newMember))
    setFormValues(defaultFormValues)
  }

  return (
    <StyledDiv>
      <h1>TEAM</h1>
      <br/>
      {team.map((member, idx)=>{
        return(
          <div key = {idx}>
            <h2>{member.name}</h2>
            <h3>Email: {member.email}</h3>
            <p>Role: {member.role}</p>
            <hr></hr>
          <br/>
          <br/>
          </div>
        )
      })}
      <Form values = {formValues} submit = {submitForm} update = {updateForm} />
    </StyledDiv>
  );
}

export default App;