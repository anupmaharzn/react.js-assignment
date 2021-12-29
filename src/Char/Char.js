import react from "react";

const char = (props) => {
    const inlinestyle = {
        display: 'inline-block',
        padding: '16px',
        maring: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return (
        <div style={inlinestyle} onClick={props.clicked} >
            {props.character}
        </div>

    );
}

export default char;