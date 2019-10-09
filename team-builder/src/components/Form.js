import React, {useState} from "react";

function Form(props) {
    const [newMember, setNewMember] = useState({
        memberName: "",
        role: "",
        email: ""
    })

    const handleChange = event => {
        setNewMember({
            ...newMember,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.setMembers([...props.members, newMember])
        resetForm(event)
    }

    const resetForm = event =>{
        event.preventDefault();
        setNewMember({
            memberName: "",
            role:"",
            email:""
        })
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label> Name: 
                    <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                    name="memberName"
                    value={newMember.memberName}
                    />
                </label>
                <br />
                <br />
                <label>Role:
                    <input
                    onChange = {handleChange}
                    type="text"
                    placeholder="Role"
                    name="role"
                    value={newMember.role}
                    />
                </label>
                <br />
                <br />
                <label>Email:
                    <input
                    onChange = {handleChange}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={newMember.email}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form