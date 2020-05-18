import React, { useState } from 'react';
import './userprofile.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MyContext } from '../../context/MyProvider';


// function UserProfile(props) {
  function UserProfile() {

  const { state } = React.useContext(MyContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userData = state.user.results
  console.log(userData)

  return (
      <div>
      {/* {props.userprof.name && */}
      {userData &&
        <div>
        <Button bsPrefix="buttonModal" onClick={handleShow}>
          Mi Perfil
        </Button>

        <Modal show={show} onHide={handleClose} className="mt-5">
            <Modal.Header>
              <Modal.Title className="titleProfile">Mi Perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="centerDiv">
                {/* <img className='avatar mt-3' src={props.userprof.img} alt='' /> */}
                {/* <h3 className='textuser mt-3'>Nombre: {props.userprof.name}</h3>
                <p className='textuser'>Nombre de Usuario: {props.userprof.username}</p>
                <p className='textuser'>Puntuación: {props.userprof.points}</p> */}
                <img className='avatar mt-3' src='' alt='' />
                <h3 className='textuser mt-3'>Nombre: {userData.email}</h3>
                <p className='textuser'>Nombre de Usuario: {userData.password}</p>
                <p className='textuser'>Puntuación: {userData.geoscore}</p>
                
              </div>

            </Modal.Body>
            <Modal.Footer>
            <Button className="buttonCloseModal" onClick={handleClose}>
              Cerrar
            </Button>
            </Modal.Footer>
          </Modal>
          </div>
          }
        </div>


  );
}

export default UserProfile;
