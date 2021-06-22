import { useState } from 'react';
import Image from 'next/image';
import { BiCheckCircle } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { FiTrash } from 'react-icons/fi';

import styles from './styles.module.scss';
import { IQuestion } from '../RoomPage';
import DeleteQuestionModal from '../DeleteQuestionModal';

interface IProps {
    question: IQuestion;
}

export default function QuestionCard({ question }: IProps){

    const [isRespondedState, setIsResponded] = useState(false);
    const [isRespondingState, setIsResponding] = useState(false);
    const [isDeleteQuestionModalOpenState, setIsDeleteQuestionModalOpen] = useState(false);

    function responded(){

        setIsResponded(!isRespondedState);
    }

    function responding(){

        setIsResponding(!isRespondingState);
    }
    
    return (
        <>
            {isDeleteQuestionModalOpenState && <DeleteQuestionModal setIsDeleteModalOpen={setIsDeleteQuestionModalOpen} />}
            

            <div className={styles.questionCard}>
                <p>
                    {question.message}
                </p>
                <footer>
                    <div>
                        <div className={styles.avatarImageContainer}>
                            <Image
                                src={question.avatar}
                                alt='avatar'
                                width={32}
                                height={32}
                            />
                        </div>
                        {question.name}
                    </div>

                    <div>
                        <button 
                            type='button'
                            onClick={responded}
                        >
                            <BiCheckCircle size={24} color={isRespondedState ? '#835AFD' : '#737380'} />
                        </button>

                        <button 
                            type='button'
                            onClick={responding}
                        >
                            <GoComment size={24} color={isRespondingState ? '#835AFD' : '#737380'} />
                        </button>

                        <button 
                            type='button'
                            onClick={() => setIsDeleteQuestionModalOpen(true)}
                        >
                            <FiTrash size={24} color={'#737380'} />
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
}