import React from 'react';
import { Link } from '../components/Router';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="board">
                <div className="welcome">
                    <h4 className="welcome__title welcome__title_center">Добро пожаловать на не официальный сайт по игре Rise of Kingdoms</h4>
                    <ul>
                        <li>Ты ищешь новый сервер?</li>
                        <li>Ты ищешь людей для своего сервера?</li>
                        <li>Ты ищешь новых друзей?</li>
                    </ul>
                    <div className="welcome__title_center card__text_bold">
                        Тогда тебе сюда!
                    </div>
                    <div>
                        Тебе больше не придется часами искать сервера для миграции.
                        Ты можешь сам подать заявку о миграции, выставив свою кандидатуру,
                        либо сам найти свой новый дом из уже существующих предложений.
                        <div className="welcome__title_center"><Link className="link welcome__title_center" path="/user/signUp" name="Присоединяйся к нашему сообществу" /></div>
                    </div>
                </div>
                <div className="main__board">
                    <div className="board">
                        <div className="board__text_green">Игроков: <span className="board__text_bold">10000</span></div>
                    </div>
                    <div className="board">
                        <div className="board__text_green">Альянсов: <span className="board__text_bold">10000</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;