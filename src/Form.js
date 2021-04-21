import React from 'react'
import './App.css';

function Form(props) {
    const {values, update, submit} = props
    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <div>
            <h1>Add a new Member!</h1>
            <form onSubmit = {onSubmit}>
                <input name = "name" type = "text" onChange = {onChange} value = {values.name} placeholder = "Name..."/>
                <input name = "email" type = "text" onChange = {onChange} value = {values.email} placeholder = "Email..."/>
                <label>Role
                    <select name="role" onChange={onChange} value = {values.role}>
                        <option value=''>--- Select Role ---</option>
                        <option value='Web-developer'>Web-Developer</option>
                        <option value='Frontend-developer'>Frontend-Developer</option>
                        <option value='Backend-developer'>Backend-Developer</option>
                     
                    </select>
                </label>
                <button  disabled={!values.name || !values.email || !values.role}>submit</button>
            </form>
        </div>
    );
}

export default Form;