import React, { useState } from 'react';
import daysInfo from '../../types/daysInfo'
import Modal from '../modal/modal';

function scheduleInput({day}:{day:daysInfo}){
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (            
        <div onClick={openModal}>
            
        </div>    
    );
};

export default scheduleInput;