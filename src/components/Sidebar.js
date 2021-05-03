import React from 'react';
import { Link } from './Router';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <img className="sidebar__logotype" src="/style/logo.png" alt="Логотип" />
                <div className="sidebar__section">
                    <div className="sidebar__section-title">ГЛАВНАЯ</div>
                    <Link className="sidebar__section-link" path="/" name="Главная" src="/style/icons/signIn.png" />
                    <Link className="sidebar__section-link" path="/news" name="Новости" src="/style/icons/news.png" />
                </div>
                <div className="sidebar__section">
                    <div className="sidebar__section-title">ПРОЧЕЕ</div>
                    <Link className="sidebar__section-link" path="/alliances/" name="Альянсы" src="/style/icons/alliances.png" />
                    <Link className="sidebar__section-link" path="/users" name="Пользователи" src="/style/icons/users.png" />
                </div>
            </div>
        );
    };
}