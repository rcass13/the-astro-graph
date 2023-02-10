import React from 'react';


function CustomInput(props) {
    const errorMsg = props.error ? <p>{props.error}</p> : null;
    return (
        <div >
           
            <label htmlFor="name">{props.label}:</label>
            <input
                type={props.type}
                id={props.name}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
            {errorMsg}
      </div>
    );
}

export default CustomInput;
