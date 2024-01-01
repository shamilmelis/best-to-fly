import React from 'react'
import {Link} from "react-router-dom";
import '../Footer/index.scss'
import '../Footer/media.scss'
function Footer() {
    return (
        <footer>
            <div className={'container-footer'}>
                <div className={'row-footer'}>
                    <div className={'col-2_5'}>
                        <div className={'box'}>
                            <h1 className={'footer_logo'}>Best to Fly | BTF</h1>
                            <div className={'footer_contacts_box'}>
                                <div className={'footer_contacts_inner'}>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className={'footer-adress'}>пр. Абая, 20</p>
                                </div>
                                <div className={'footer_contacts_inner'}>
                                    <i className="fa-solid fa-envelope"></i>
                                    <p className={'footer-inbox'}>besttofly@gmail.com</p>
                                </div>
                                <div className={'footer_contacts_inner'}>
                                    <i className="fa-solid fa-phone"></i>
                                    <p className={'footer-phone'}>+996 (999) 99-99-99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-2_5'}>
                        <div className={'box box-routes'}>
                            <h1 className={'routes-title'}>Главная</h1>
                            <div className={'box-routes-links'}>
                                <Link to={'/'} className={'footer-links'}>Горящие туры</Link>
                                <Link to={'/'} className={'footer-links'}>Экскурсивные туры</Link>
                                <Link to={'/'} className={'footer-links'}>Молодежные туры</Link>
                                <Link to={'/'} className={'footer-links'}>Свадебные туры</Link>
                                <Link to={'/'} className={'footer-links'}>Семейные туры</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'col-2_5'}>
                        <div className={'box box-routes'}>
                            <h1 className={'routes-title'}>Компания</h1>
                            <div className={'box-routes-links'}>
                                <Link to={'/'} className={'footer-links'}>Сервис</Link>
                                <Link to={'/'} className={'footer-links'}>О нас</Link>
                                <Link to={'/'} className={'footer-links'}>Вопросы</Link>
                                <Link to={'/'} className={'footer-links'}>Контакты</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'col-2_5'}>
                        <div className={'box box-routes'}>
                            <h1 className={'routes-title'}>Наши соц.сети</h1>
                            <div className={'box-routes-links'}>
                                <Link to={'/'} className={'footer-links'}>Instagram</Link>
                                <Link to={'/'} className={'footer-links'}>Facebook</Link>
                                <Link to={'/'} className={'footer-links'}>Twitter</Link>
                                <Link to={'/'} className={'footer-links'}>Gmail</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'col-2_5'}>
                        <div className={'box box-inbox'}>
                            <h1 className={'footer-gmail'}>Логин</h1>
                            <div className={'footer-gmail-inner'}>
                                <span className={'gmail-title'}>Ваша почта</span>
                                <input type="text" className={'gmail-input'} placeholder={'Введите вашу почту'}/>
                                <button className={'gmail-submit'}>Отправить</button>
                                <span className={'copyright-text'}>Copyright Best to Fly | BTF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer