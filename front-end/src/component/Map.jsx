import React from 'react';
import '../App.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';
import Canvas from './Canvas';
import {useNavigate} from "react-router-dom";

function Map()
{
    let navigate = useNavigate(),
    text = `
    Location Name
    Location Address
    Location Type
    Location Description`;

    const APIKey = '5b82ca360a754cec8eb085096ff20a32';

    return(
        <>
            <div className = 'd0'>
                <Selector></Selector>
                <Canvas className = 'canvas0'></Canvas>

                <button className = 'button0' onClick = {() => navigate('/Demo')}>
                    <textarea className = 'textarea0'>{text}</textarea>
                </button>

                <Button str_array = {['Group Information']} type = {6}></Button>
            </div>
        </>
    );
}

export default Map;