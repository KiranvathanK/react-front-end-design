import React, { useState,useContext} from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElement/Button';
import Modal from '../../shared/components/UIElements/Modal';
import{AuthContext} from '../../shared/context/auth-context';
import './placeItem.css';

const PlaceItem = props => {
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const[showConfirm,setShowConfirm] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

const showDeleteHandler =() =>{
  setShowConfirm(true);
}
const cancelDeleteHandler =() =>{
  setShowConfirm(false);
}
const confirmDeleteHandler =() =>{
  setShowConfirm(false);

  console.log('DELETING.............');
}


  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>map have to add hear</h2>
        </div>
      </Modal>
      <Modal
      show={showConfirm}
      onCancel={cancelDeleteHandler}
      header="Are you sure?" footerClass="place_item__modal-actions" 
      footer={
      <React.Fragment>

      <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
      <Button danger onClick={confirmDeleteHandler}>DELETE</Button>

      </React.Fragment>
      } >
        <p>Are you sure to delete this place?</p>
      </Modal>


      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
          <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
            {auth.isLoggedIn &&  <Button danger onClick={showDeleteHandler}>DELETE</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
