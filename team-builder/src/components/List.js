import React from "react";

function List(props){
    return(
        <div className="List">
            {
                props.members.map((member, index)=>(
                    <div className="container" key={index}>
                        <h2>{member.memberName}</h2>
                        <p>{member.role}</p>
                        <p>{member.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default List;