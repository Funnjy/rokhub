import { Error404 } from '../generic/Error404';

export default function UserProfileCard(props) {
    if(!props.user?.governorId) return <Error404 />;

    return (
        <div className="card profile">
            <div className="profile__title">
                <h3>{props.user.nickname}</h3>
                <img src="/style/avatar.png" alt="Аватар" />
            </div>
            <div>
                <span className="profile_key">ID: </span><span className="profile__value">{props.user.governorId}</span>
            </div>
            <div>
                <span className="profile_key">Альянс: </span><span className="profile__value">{props.user.alliance || 'Нет'}</span>
            </div>
        </div>
    );
}