import React, { useState, useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'
import shortId from 'shortid';
import {
    Button, Modal, ModalBody, ModalFooter, closeAll
} from 'reactstrap';
import './Ranking.css';
import { MyContext } from '../../context/MyProvider';
import LogIn from '../Access/LogIn';
const Ranking=({gameName, scoreState})=>{
    const [ranking, setRanking]= useState()
    const [modal, setModal] = useState(true);
    const [closeAll, setCloseAll] = useState(true);
    const { state, logIn } = React.useContext(MyContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/ranking/${gameName}`)
            .then(res => res.json())
            .then(data => setRanking([...data]))
        if(state.user.results !== undefined){
            //save score in ddbb
        }else{
            //save score in context
        }
    },[])
    const backgroundColors = ['#CCA43D', '#C0C0C0', '#7F3F00']
    const toggle = () => setModal(!modal);
    const fontSize = 30;
    console.log(state.user)
    return(
        <div className="modal">
             <Modal isOpen={modal} toggle={toggle} >
                 <ModalBody style={{ textAlign: 'center'}}>
                 <Button color="primary" onClick={toggle}>Cerrar</Button>
                 <h2>Ganadores</h2>
                        {ranking &&
                        <div style={{color:'black', zIndex:1000, align: 'center'}}>

                            <table style={{display: 'flex',  justifyContent:'space-evenly'}}>
                            {ranking.map((score, index)=>{
                                return(
                                    <div style={{backgroundColor: backgroundColors[index], padding: '10px;', width:'100px', height:'100px'}}>
                                        <div key={shortId.generate()}>
                                        {/* <h4>{index + 1}</h4> */}
                                        <h5>{score.name}</h5>
                                        <h4>{Object.values(score)[1]}</h4></div>
                                    </div>
                                )
                            })}
                            </table>
                        {state.user.results === undefined
                        ?
                        <div>
                            <h2>{scoreState} puntos ! <br/> Guarda tus puntos y <br/> reta a tu amigos</h2>
                                <Link to='Access'>
                                <Button style={{color: 'white', height: '100px', fontWeight: 'bolder'}}>REGISTRARSE</Button>
                                </Link>
                        </div>
                        :
                        <div>

                            <p>Estas en la posición X del ranking</p>
                        </div>}
                        </div>}
                    </ModalBody>
             </Modal>
        </div>
    )
}
export default Ranking;
