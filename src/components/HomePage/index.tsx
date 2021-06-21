import React, { useState, FormEvent } from 'react';
import Image from 'next/image';
import { AiOutlineGoogle } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function HomePage() {

    const [roomState, setRoomState] = useState('')

    function onSubmitHandler(event: FormEvent<HTMLFormElement>){

        event.preventDefault();
    }

    return (
        <div className={styles.container}>
            <div className={styles.loginBackground}>
                <div>
                    <Image 
                        src="/login-background.svg" 
                        alt="login background" 
                        width={313}
                        height={403}
                    />

                    <h2>Toda pergunta tem<br/>uma resposta.</h2>

                    <span>Aprenda e compartilhe conhecimento<br/>com outras pessoas</span>
                </div>
            </div>

            <div className={styles.login}>
                <div>

                    <Image 
                        src='/logo.svg'
                        alt='logo'
                        width={154.2}
                        height={69}
                        className={styles.logoImg}
                    />

                    <button 
                        type='button'
                        name='google-login'
                    >
                        <AiOutlineGoogle size={24} color='#fff' /> 
                        Crie sua sala com o Google
                    </button>

                    <form onSubmit={onSubmitHandler} >

                        <span><div />&nbsp;&nbsp;&nbsp;ou entre em uma sala&nbsp;&nbsp;&nbsp;<div /></span>

                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                            value={roomState}
                            onChange={(event) => setRoomState(event.target.value)}
                        />

                        <button type="submit">
                            <FiLogIn size={20} color='#FFF' /> 
                            Entrar na sala
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}