import React from "react";

function Disclaimer() {
    const st = {
        color:'white',
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    }
    return(
        <div style={st}>
            <h2>Please use PC to view this site</h2>
        </div>
    );
}

export default Disclaimer