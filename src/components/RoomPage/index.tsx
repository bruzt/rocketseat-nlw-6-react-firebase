import Image from 'next/image';

import styles from './styles.module.scss';

import Header from '../Header';

export default function roomPage(){

    return (
        <>
            <Header />

            <div className={styles.container}>
                <main>

                    <h2>Sala React Q&A</h2>

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

                </main>
            </div>
        </>
    );
}