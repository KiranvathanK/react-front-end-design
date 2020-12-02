import React from 'react';
import './placeList.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './placeItem';
import Button from '../../shared/components/FormElement/Button';
import userPlace from '../pages/userPlace';

const placeList = props => {
    if(props.items.length === 0){
        return (
        
        <div className="place-list center">
             <Card>
            <h2>No User Found!</h2>
            <Button to="/place/new">Share Place</Button>
            </Card>
            
        </div>
        );
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem 
         key={place.id}
         id={place.id}  
         image={place.imageUrl}
         title={place.title} 
         description={place.description}
         address={place.address} 
         creator={place.creator} 
         coordinates={place.location} />)}

    </ul>;
};

export default placeList;