import React, {Component, useEffect} from 'react';
import '../styling/InputForm.css';

const InputForm = () => {
    return (
        <div>
            <form action="#">
                <div className="file-field input-field">
                <div>
                    <span className="btn">Photo</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
            </form>
        </div>
     ); 
}

export default InputForm;