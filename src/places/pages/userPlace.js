import React from 'react';
import PlaceList from '../components/placeList';
import { useParams } from 'react-router-dom';


const DummyPlaces =[{
    id:'p1',
     title:'Mysore Palace',
    description:'one of the beautiful place',
    imageUrl:'https://images.unsplash.com/photo-1529923666526-f242491dce58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    address:'Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001',
    location:{
    lat:12.305163,
    lng:76.6529862
  },
   creator:'u1'
},
{
    id:'p2',
    title:'palace',
    description:'one of the beautiful place',
   imageUrl:'https://images.unsplash.com/photo-1591018596812-d8f7bbaf4685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
   address:'Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001',
   location:{
   lat:12.305163,
   lng:76.6529862
    },
     creator:'u2'
},
];

const UserPlace = () => {
    const userId = useParams().userId;
    const loadedPlaces = DummyPlaces.filter(place => place.creator === userId); 
    return <PlaceList items={loadedPlaces}/>;
};

export default UserPlace;