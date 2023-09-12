import React from 'react';
import Input from "./Input";
import group from "../Group 48.svg";
import '../styles/Form.css'

const Form = () => {
    return (
        <form className='form'>
            <div className='form__content'>
                <main className='main__info'>
                    <h1 className='main__info_title'> Хотите сделать проект с нами?</h1>
                    <p className='main__info_text'>Поделитесь с нами вашими размышлениями<br/>
                        и мы свяжемся с Вами, чтобы реализовать Вашу задумку.</p>
                    <article>
                        <section className='article__inputs_small'>
                            <Input text='Email address*' type='email' size='small'/>
                            <Input text='Ваше имя*' type='text' size='small'/>
                        </section>
                        <section >
                            <Input text='Ваши пожелания*' type='text' size='large'/>
                        </section>
                    </article>
                </main>
                <img src={group} alt={'logo'} className='logo'/>
            </div>
            <button className='button'>Отправить</button>
        </form>
    );
};

export default Form;
