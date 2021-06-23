import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiCopy } from 'react-icons/fi';

import styles from './styles.module.scss';
import CloseRoomModal from '../roomComponents/CloseRoomModal';

export default function Header(){

    const [isCloseModalOpenState, setIsCloseModalOpenState] = useState(false);

    const router = useRouter();

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
                        title='Copiar'
                        onClick={() => navigator.clipboard.writeText(`${router.query.roomId}`)}
                    >
                        <div>
                            <FiCopy size={20} color='#fff' />
                        </div>
                        Sala {router.query.roomId}
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