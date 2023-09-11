import React from 'react';
import Input from "./Input";
import group from "../Group 48.svg";
import styles from '../styles/Form.module.css'

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form__content}>
                <main className={styles.main__info}>
                    <h1 className={styles.main__info_title}> Хотите сделать проект с нами?</h1>
                    <p className={styles.main__info_text}>Поделитесь с нами вашими размышлениями<br/>
                        и мы свяжемся с Вами, чтобы реализовать Вашу задумку.</p>
                    <article>
                        <section className={styles.article__inputs_small}>
                            <Input text='Email address*' type='email' size='small'/>
                            <Input text='Ваше имя*' type='text' size='small'/>
                        </section>
                        <section >
                            <Input text='Ваши пожелания*' type='text' size='large'/>
                        </section>
                    </article>
                </main>
                <img src={group} alt={'logo'} className={styles.logo}/>
            </div>
            <button className={styles.button}>Отправить</button>
        </form>
    );
};

export default Form;
