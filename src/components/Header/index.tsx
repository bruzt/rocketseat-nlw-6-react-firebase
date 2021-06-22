import { useState } from 'react';
import Image from 'next/image';
import { FiCopy } from 'react-icons/fi';

import styles from './styles.module.scss';
import CloseRoomModal from '../roomComponents/CloseRoomModal';

export default function Header(){

    const [isCloseModalOpenState, setIsCloseModalOpenState] = useState(false);

    return (
        <>
            {isCloseModalOpenState && <CloseRoomModal setIsCloseModalOpen={setIsCloseModalOpenState} />}
        
            <header className={styles.container}>
                <Image
                    src='/images/logo.svg'
                    alt='logo'
                    width={100.26}
                    height={45}
                />

                <div>
                    <button 
                        type='button' 
                        name='room'
                        onClick={() => navigator.clipboard.writeText('#00000')}
                    >
                        <div>
                            <FiCopy size={20} color='#fff' />
                        </div>
                        Sala #00000
                    </button>

                    <button 
                        type='button' 
                        name='close'
                        onClick={() => setIsCloseModalOpenState(true)}
                    >
                        Encerrar sala
                    </button>
                </div>
            </header>
        </>
    );
}