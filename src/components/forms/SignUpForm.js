import { InputText } from '../generic/InputText';
import { Error } from '../generic/Error';
import { ButtonWithSpinner } from '../generic/Buttons';

/**
 * Controlled component for registration user.
 * 
 * @param {Object} props {
 *                            state: Object,
 *                            isFetching: Boolean,
 *                            handlerOnChange: function,
 *                            handlerOnSubmit: function
 *                       }
 * @returns {Object}
 */
export default function SignUpForm(props) {
    return (
        <div className="card">
            <form className="form">
                <InputText id="nickname" label="Никнейм:" value={props.state.nickname.value} onChange={props.handlerOnChange} placeholder="Игровой никнейм" />
                <Error error={props.state.nickname.error} />
                <InputText id="governorId" label="ID:" value={props.state.governorId.value} onChange={props.handlerOnChange} placeholder="ID игрового аккаунта" />
                <Error error={props.state.governorId.error} />
                <InputText id="password" label="Пароль:" value={props.state.password.value} type="password" onChange={props.handlerOnChange} />
                <Error error={props.state.password.error} />
                <InputText id="repeatPassword" label="Повторите пароль:" value={props.state.repeatPassword.value} onChange={props.handlerOnChange} type="password" />
                <Error error={props.state.repeatPassword.error} />
                <InputText id="email" label="Почта:" value={props.state.email.value} onChange={props.handlerOnChange} type="email" placeholder="email@site.net" />
                <Error error={props.state.email.error} />
                <ButtonWithSpinner isFetching={props.isFetching} id="submitButton" onClick={props.handlerOnSubmit} name="Регистрация" />
            </form>
        </div>
    );
}