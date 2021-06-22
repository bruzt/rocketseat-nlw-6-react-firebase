import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

import styles from './styles.module.scss';

interface IProps {
    setIsCloseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseRoomModal({ setIsCloseModalOpen }: IProps) {

    return (
        <div className={styles.container}>

            <div className={styles.modal}>

                <TiDeleteOutline size={48} color='#E73F5D' />

                <h2>Encerrar sala</h2>

                <span>Tem certeza que deseja encerrar esta sala?</span>

                <div>
                    <button 
                        type='button'
                        onClick={() => setIsCloseModalOpen(false)}
                    >
                        Cancelar
                    </button>

                    <button 
                        type='button'
                    >
                        Sim, encerrar
                    </button>
                </div>
            </div>
        </div>
    )
}