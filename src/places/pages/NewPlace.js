import React from 'react';
import Input from '../../shared/components/FormElement/Input';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/utility/Validators';
import Button from '../../shared/components/FormElement/Button';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hooks';



const NewPlace = () => {
 const[formState,inputHandler]=   useForm({
        inputs:{
            value:'',
        isValid:false,
        },
        description:{
            value:'',
        isValid:false,
        },
        address:{
        value:'',
    isValid:false,
    }});


    const placeSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);//later we have to connect backend
    };
    
    return <form className="place-form" onSubmit={placeSubmitHandler}>
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]}
     errorText="enter the title!" onInput={inputHandler}/>
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} 
    errorText="plese enter a valid text(atleast 5 characters)" onInput={inputHandler}/>
    <Input id="address" element="input" label="Address" validators={[VALIDATOR_REQUIRE()]} 
    errorText="plese enter a valid Address" onInput={inputHandler}/>
    <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
};
 export default NewPlace;