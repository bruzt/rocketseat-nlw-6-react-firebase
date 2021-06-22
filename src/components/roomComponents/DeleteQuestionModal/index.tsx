import React from 'react';
import { FiTrash } from 'react-icons/fi';

import styles from './styles.module.scss';

interface IProps {
    setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CloseRoomModal({ setIsDeleteModalOpen }: IProps) {

    return (
        <div className={styles.container}>

            <div className={styles.modal}>

                <FiTrash size={48} color='#E73F5D' />

                <h2>Excluir pergunta</h2>

                <span>Tem certeza que deseja excluir esta pergunta?</span>

                <div>
                    <button 
                        type='button'
                        onClick={() => setIsDeleteModalOpen(false)}
                    >
                        Cancelar
                    </button>

                    <button 
                        type='button'
                    >
                        Sim, excluir
                    </button>
                </div>
            </div>
        </div>
    )
}
