import React from 'react';
import RecommendCard from './RecommendCard';
import Placeholder from '../image/pic1.png';

function Recommend({ SelctedLocation }) {
    return <ul>{getCard(SelectedLocation)}</ul>;
}

var count = 0;

const getCard = SelectedLocation => SelectedLocation.map(item => (
    <RecommendCard name={item.name} type = {item.type} image = {Placeholder} key = {count++}></RecommendCard>
  ));

const SelectedLocation = [
    { name: "Boba Guys",
    type: ["Beverage", "Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198, 
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
    { name: "Lala Project",
    type: ["Food"],
    image: Placeholder,
    distance: 12,
    rate: 4.5,
    total: 198,
    votes:0},
]

export default Recommend;