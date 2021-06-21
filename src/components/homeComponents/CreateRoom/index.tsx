import Image from 'next/image';
import { FormEvent } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

export default function CreateRoom() {

    function onsubmit(event: FormEvent<HTMLFormElement>){

        event.preventDefault();
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
                    {' '}<a><Link href='/'>Clique aqui</Link></a>
                </span>
            </form>
        </div>
    );
}