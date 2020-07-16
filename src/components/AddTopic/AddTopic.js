import React, { useState, useEffect } from 'react';
import './AddTopic.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const AddPopup = ({closeModal, addTopic}) => {

    const [input, setInput] = useState('');

    const onSubmit = (e) => {
        console.log("topic name: " + input)
        e.preventDefault();

        if(input.trim() === ""){
            closeModal();
            return;
        }

        addTopic(input);
        closeModal();
    };

    const onChange = (e) => {
        console.log("value changed: " + e.target.value);
        setInput(e.target.value);
    };
    return (
        <div className="add-popup">
            <form onSubmit={onSubmit}>
                <label>
                    Topic Name: 
                    <input className="topic-input" type="text" name="topic_name" onChange={onChange}/>
                </label>
                <input className="submit-btn" type="submit" value="Subscribe"/>
            </form>
        </div>
    );
};

const AddTopic = ({addTopic}) => {

    useEffect(() => {
        Modal.setAppElement('body')
    }, []);

    const [isOpen,setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        console.log("closing modal")
        setIsOpen(false);
    }

    return (
        <div className="add-card">
            <FontAwesomeIcon className="add-icon" icon={faPlusSquare}  onClick={openModal} size='7x'/>
            <p className="add-text">Add Topic</p>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <AddPopup closeModal={closeModal} addTopic={addTopic} />
            </Modal>
        </div>

    );
};

export default AddTopic;