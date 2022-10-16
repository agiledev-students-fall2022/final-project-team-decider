import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Selector(props) {
    checkPage();

    function checkPath() {
        const curURL = window.location.href;
        return (curURL.includes(props.path));

    }
    console.log(checkPath());

    if (checkPath()) {

        return (

            <div>
                <div className='rounded-3xl w-fit h-fit pl-3 pr-3 pt-2 pb-2 border-2 border-cream text-cream bg-primary'>
                    <Link to={props.path} className='text-lg'>{props.page}</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className='rounded-3xl w-fit h-fit pl-3 pr-3 pt-2 pb-2 border-2 border-cream text-primary bg-cream'>
                <Link to={props.path} className='text-lg'>{props.page}</Link>
            </div>
        );
    }
}

const checkPage = () => {
    const curURL = window.location.href;
    if (curURL.includes('recommend')) {
        console.log('recommend');
        return 1;
    } else if (curURL.includes('group')) {
        return 2;
    } else if (curURL.includes('go')) {
        return 3;
    }
}

export default Selector;