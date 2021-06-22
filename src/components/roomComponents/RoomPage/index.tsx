import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

import { useAuth } from '../../../contexts/authContext';
import Header from '../../Header';
import QuestionCard from '../QuestionCard';

export interface IQuestion {
    id: string;
    name: string;
    avatar: string;
    message: string;
}

const questionTest = {
    id: 'afasfasf',
    name: 'José Amarel',
    avatar: 'https://avatars.githubusercontent.com/u/12144828?v=4',
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nobis ipsam nemo praesentium, architecto quia vitae voluptates minus officiis saepe deleniti, eius voluptatem vel aspernatur dolor quas! Corrupti, atque dolorem.',
}

export default function RoomPage(){

    const [questionsState, setQuestions] = useState<IQuestion[]>([questionTest, questionTest])

    const router = useRouter();
    const authContext = useAuth();

    if(!authContext.userState) router.replace('/');

    return (
        <>
            <Header />

            <div className={styles.container}>
                <main>

                    <div className={styles.roomTitle}>
                        <h2>Sala React Q&A</h2>
                        {questionsState.length > 0 && <span>{questionsState.length > 1 
                            ? questionsState.length + ' Perguntas' 
                            : questionsState.length + ' Pergunta'}</span>
                        }
                    </div>

                    {questionsState.length == 0 ? (
                        <div className={styles.noQuestions}>

                            <div className={styles.imageContainer}>
                                <Image
                                    src='/images/no-questions.svg'
                                    alt='sem perguntas'
                                    width={153.22}
                                    height={150}
                                />
                            </div>

                            <h3>Nenhuma pergunta por aqui...</h3>
                            <span>Envie o código dessa sala para seus amigos e<br/>comece a responder perguntas!</span>
                        </div>
                    ) : (
                        <div className={styles.questionsContainer}>
                            {questionsState.map( (question) => <QuestionCard key={question.id} question={question} />)}

                        </div>
                    )}
                </main>
            </div>
        </>
    );
}