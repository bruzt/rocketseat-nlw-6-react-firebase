import Image from 'next/image';
import { FiCopy } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function header(){

    function closeRoom() {
        
        console.log('close')
    }

    return (
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
                    onClick={closeRoom}
                >
                    Encerrar sala
                </button>
            </div>
        </header>
    );
}