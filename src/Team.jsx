import { useState } from "react"

export default function Team() {
    let [team,setTeam] = useState(11)
    
    const handleAdd = () => {
        const newTeam = ++team ;
        setTeam(newTeam)
    }

    const handleRemove = () => {
        setTeam(--team);
    }

    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button style={{marginLeft:'10px'}} onClick={handleRemove}>Remove</button>
        </div>
    )
}