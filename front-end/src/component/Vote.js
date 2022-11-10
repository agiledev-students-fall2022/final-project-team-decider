
import React, { useEffect } from 'react';
import { Component } from 'react';
import './Button.css';
import './Vote.css';
import { useState } from "react";
import axios from 'axios';

function Vote() {

    function fetchFromDB() {
        axios.get('http://localhost:4000/locations')
            .then(res => {
                console.log(res.vote);
                setVoteCount(res.vote + 1);
            }
            )
    }

    const [voted, setVoted] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/locations')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    // voteCount neet to integrate with backend
    const [voteCount, setVoteCount] = useState(1);
    const handleClick = () => {
        setVoted(!voted);
        if (voted) {
            setVoteCount(voteCount - 1);
        } else {
            setVoteCount(voteCount + 1);
        }
    };

    useEffect(() => {
        fetchFromDB();
    }, []);


    return (
        <button onClick={handleClick} className={voted ? 'bg-sharp-pink text-white voteBox' : 'bg-cream-yellow text-primary voteBox'}>
            {voteCount}
        </button>
    );
}

export default Vote;