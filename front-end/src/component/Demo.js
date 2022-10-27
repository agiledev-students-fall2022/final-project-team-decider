import React from 'react';
import Mat from './wasm/Mat';
import './Demo.css';
import './Map.css';
import './Canvas.css';
import Selector from './Selector';
import Button from './Button';
import Canvas from './Canvas';
import {useNavigate} from "react-router-dom";

function Demo()
{
    let navigate = useNavigate();
    let a = [[[0, 1], [2, 3]], [[4, 5], [6, 7]]];
    return(
        <>
            <div className = 'd0'>
                <Selector></Selector>
                <Canvas className = 'canvas0'></Canvas>
                <button className = 'demo_button0' onClick = {() => navigate('/Map')}>
                    <Mat a = {a}></Mat>
                </button>
                <Button str_array = {['Group Information']} type = {6}></Button>
            </div>
        </>
    );
}

export default Demo;