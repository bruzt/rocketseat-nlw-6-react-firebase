import { useState, FormEvent, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';
import { useAuth } from '../../../contexts/authContext';

import Header from '../../Header';
import QuestionCard from '../QuestionCard';
import AvatarAndUserName from '../AvatarAndUserName';
import { firebase, database } from '../../../services/firebase';

interface IFirebaseQuestion {
    [key: string]: {
        author: {
            name: string;
            avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighlighted: boolean;
    }
}

export interface IQuestionState {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    
}

export default function RoomPage(){

    const [newQuestionState, setNewQuestion] = useState('');
    const [questionsState, setQuestions] = useState<IQuestionState[]>([]);
    const [roomTitleState, setRoomTitle] = useState('');
    const [roomAuthorId, setRoomAuthor] = useState('');

    const authContext = useAuth();
    const router = useRouter();

    const isAuthor = authContext.userState?.id == roomAuthorId;

    useEffect(() => {
        fetchQuestions();
    }, [router.query.roomId]);

    async function fetchQuestions(){
        try {

            const roomRef = database.ref(`rooms/${router.query.roomId}`);
            
            roomRef.on('value', (room) => {
                
                const firebaseRoom = room.val();
                const firebaseQuestions: IFirebaseQuestion = firebaseRoom?.questions ?? {};
                
                const parsedQuestions = Object.entries(firebaseQuestions).map( ([key, values]) => {
                    return {
                        id: key,
                        ...values
                    }
                });
                
                setRoomAuthor(firebaseRoom.authorId)
                setRoomTitle(firebaseRoom.title);
                setQuestions(parsedQuestions);
            });

        } catch (error) {
            alert('Erro ao buscar perguntas')
        }
    }

    function loginWithGoogle(){

        authContext.signInWithGoogle();
    }

    async function handleSendQuestion(event: FormEvent<HTMLFormElement>){

        event.preventDefault();

        if(newQuestionState.trim().length == 0) return;

        if(authContext.userState == null) return;

        const question = {
            content: newQuestionState,
            author: {
                name: authContext.userState.name,
                avatar: authContext.userState.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        }

        try {

            await database.ref(`rooms/${router.query.roomId}/questions`).push(question);

            setNewQuestion('');
            
        } catch (error) {
            alert('Erro ao enviar pergunta');
        }
    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                <main>

                    <div className={styles.roomTitle}>
                        <h2>Sala: {roomTitleState} Q&A</h2>
                        {questionsState.length > 0 && <span>{questionsState.length == 1 
                            ? questionsState.length + ' Pergunta' 
                            : questionsState.length + ' Perguntas'}</span>
                        }
                    </div>
                    
                    {isAuthor == false && (

                        <form onSubmit={handleSendQuestion}>
                            <textarea 
                                name="question" 
                                placeholder='O que você quer perguntar?'
                                value={newQuestionState}
                                onChange={(event) => setNewQuestion(event.target.value)}
                            />

                            <div className={styles.questionAuthorContainer}>
                                {authContext.userState ? (
                                    <AvatarAndUserName 
                                        avatar={authContext.userState!.avatar} 
                                        name={authContext.userState!.name} 
                                    />
                                ) : (
                                    <p>
                                        Para enviar uma pergunta,{' '}
                                        <button 
                                            type='button' 
                                            name='google-login-button'
                                            onClick={loginWithGoogle}
                                        >
                                            faça seu login.
                                        </button>
                                    </p>
                                )}

                                <button 
                                    type='submit'
                                    disabled={!authContext.userState || newQuestionState.trim().length == 0}
                                >
                                    Enviar Pergunta
                                </button>
                            </div>
                        </form>
                    )}

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
                            {questionsState.map( (question) => {
                                return (
                                    <QuestionCard 
                                        key={question.id} 
                                        question={question} 
                                        isAuthor={isAuthor}
                                    />
                                );
                            })}
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}