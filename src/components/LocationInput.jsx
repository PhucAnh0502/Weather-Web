import { useState } from "react";

function LocationInput(props){
    return (
        <>
            <div className="Location">
                <label>Your City</label>
                <input
                    type="text"
                    placeholder="input your city"
                    value={props.location}
                    onChange={props.handleChange}
                />
            </div>
        </>
    )
}

export default LocationInput;