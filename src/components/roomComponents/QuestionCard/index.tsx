import { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { GoComment } from 'react-icons/go';
import { FiTrash } from 'react-icons/fi';

import styles from './styles.module.scss';
import { IQuestionState } from '../RoomPage';
import DeleteQuestionModal from '../DeleteQuestionModal';
import AvatarAndUserName from '../AvatarAndUserName';

interface IProps {
    question: IQuestionState;
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
                    {question.content}
                </p>
                <footer>
                    
                    <AvatarAndUserName avatar={question.author.avatar} name={question.author.name} />

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