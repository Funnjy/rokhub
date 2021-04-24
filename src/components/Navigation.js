import React from 'react';
import { Link } from './Router';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="navigation col-md-3">
                <img className="navigation__logotype" src="/style/logo.png" alt="Логотип" />
                <div className="navigation__group">
                    <div className="navigation__group-title">ГЛАВНАЯ</div>
                    <Link className="navigation__link" path="/" name="Главная" src="/style/icons/signIn.png"/>
                    <Link className="navigation__link" path="/news" name="Новости" src="/style/icons/news.png"/>
                </div>
                <div className="navigation__group">
                    <div className="navigation__group-title">ПРОЧЕЕ</div>
                    <Link className="navigation__link" path="/alliances/" name="Альянсы" src="/style/icons/alliances.png" />
                    <Link className="navigation__link" path="/users" name="Пользователи" src="/style/icons/users.png" />
                </div>
            </div>
        );
    }
}