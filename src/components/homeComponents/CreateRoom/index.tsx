import Image from 'next/image';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

import { useAuth } from '../../../contexts/authContext';

export default function CreateRoom() {

    const router = useRouter();
    const authContext = useAuth();

    if(!authContext.userState) router.replace('/');

    function onsubmit(event: FormEvent<HTMLFormElement>){

        event.preventDefault();

        router.push('/room');
    }

    return (
        <div className={styles.container}>
            <Image 
                src='/images/logo.svg'
                alt='logo'
                width={154.2}
                height={69}
            />

            <form onSubmit={onsubmit}>

                <h2>Crie uma nova sala</h2>

                <input 
                    type="text" 
                    placeholder='Nome da sala'
                />

                <button type="submit">
                    Criar sala
                </button>

                <span>
                    Quer entrar em uma sala já existente?
                    {' '}<Link href='/'>Clique aqui</Link>
                </span>
            </form>
        </div>
    );
}