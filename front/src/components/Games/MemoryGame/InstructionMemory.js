import React from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './InstructionMemory.scss';

export class InstructionMemory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => this.setState({
            modal: !this.state.modal
        })
    
   
  render(){
       //Instructions Icon
       const instructions = <FontAwesomeIcon icon = {
           faQuestionCircle
       }
       />

      return (
        <div>
            {/* INSTRUCTIONS */}
                <span className="bigInstructions" style={{ color: "#00ECFD", fontSize: "2em"}} onClick={this.toggle}>{instructions}</span>
                <span className="smallInstructions" style={{ color: "#A2A2A2", fontSize: "1.5em"}} onClick={this.toggle}>{instructions}</span>
                <Modal isOpen={this.state.modal} toggle={this.toggle} style={{ marginTop:"10%"}}>
                    <ModalBody>
                        <div><p>
                        Encuentra las parejas de cartas iguales.En cuanto menos intentos lo logres, más puntos acumularás </p></div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
        </div>
    )}
}

export default InstructionMemory;