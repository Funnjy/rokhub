import { Error404 } from '../generic/HTTPErrors';

export default function UserProfileCard(props) {
    if(!props.user?.governorId) return <Error404 />;

    return (
        <div className="board">
            <div className="board__title">
                <h3>{props.user.nickname}</h3>
                <img className="avatar" src="/style/avatar.png" alt="Аватар" />
            </div>
            <div className="board__body">
                <div className="board__body-item">
                    <span className="board__text board__text_bold">ID: </span><span className="board_text">{props.user.governorId}</span>
                </div>
                <div className="board__body-item">
                    <span className="board__text board__text_bold">Альянс: </span><span className="board_text">{props.user.alliance || 'Нет'}</span>
                </div>
            </div>
        </div>
    );
}