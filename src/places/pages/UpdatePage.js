import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import Input from '../../shared/components/FormElement/Input';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/utility/Validators';
import Button from '../../shared/components/FormElement/Button';
import Card from '../../shared/components/UIElements/Card';
import {useForm} from '../../shared/hooks/form-hooks';
import './PlaceForm.css';



const DummyPlaces =[{
   id:'p2',
   title:'Mysore Palace',
  description:'one',
   imageUrl:'https://images.unsplash.com/photo-1529923666526-f242491dce58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    address:'Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001',
   location:{
    lat:12.305163,
    lng:76.6529862
   },
    creator:'u1'
},
{
   id:'p1',
   title:'Mysore Palace',
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

const UpdatePlace = () =>{

const [isLoading,setIsLoading] = useState(true);
const placeId = useParams().placeId;



const [formState,inputHandler,setData] = useForm({
title:{
    value: '',
    isValid: false
},
description:{
    value: '',
    isValid: false
}

},false);


const identifiedPlace = DummyPlaces.find(p => p.id === placeId);



useEffect(() => {
    if(identifiedPlace){
        setData(
            {
              title: {
                value: identifiedPlace.title,
                isValid: true
              },
              description: {
                value: identifiedPlace.description,
                isValid: true
              }
            },
            true
          );

    }
    
    setIsLoading(false);
  }, [setData, identifiedPlace]);



const updatePlaceHandler = event =>{
 event.preventDefault();
 console.log(formState.inputs);
}

if(!identifiedPlace){
    return (
    <div className="center">
        <Card>
        <h2>could'nt find place</h2>
        </Card>
    </div>
    );
}

if(isLoading){
    return(
        <div>
         <h2>Loading..</h2>
         </div>
    );
}

return <form className="place-form" onSubmit={updatePlaceHandler}>
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} 
    errorText="enter a valid title" onInput={inputHandler} intialValue={formState.inputs.title.value} intialValid={formState.inputs.title.isValid}/>
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText="enter a valid description(atleast 5 charecters)" 
    onInput={inputHandler} intialValue={formState.inputs.description.value} intialValid={formState.inputs.description.isValid}/>
    <Button type="submit" disabled={!formState.isValid}> UPDATE PLACE</Button>
</form>
};


export default UpdatePlace;