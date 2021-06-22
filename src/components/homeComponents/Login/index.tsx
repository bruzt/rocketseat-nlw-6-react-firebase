import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineGoogle } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi';

import { useAuth } from '../../../contexts/authContext';

import styles from './styles.module.scss';

export default function Login() {

    const [roomState, setRoomState] = useState('');

    const router = useRouter();
    const authContext = useAuth();

    async function loginWithGoogle() {

        const auth = await authContext.signInWithGoogle();

        if (auth) {
            router.push({
                query: {
                    page: 'create-room'
                }
            });
        }
    }

    function onSubmitHandler(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
    }

    return (
        <div className={styles.container}>

            <Image
                src='/images/logo.svg'
                alt='logo'
                width={154.2}
                height={69}
                className={styles.logoImg}
            />

            <button
                type='button'
                name='google-login'
                onClick={loginWithGoogle}
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
    );
}