import { InputText } from "../generic/InputText";
import { Error } from '../generic/Error';
import { ButtonWithSpinner } from '../generic/Buttons';

/**
 * Controlled component for authentication user.
 * 
 * @param {Object} props {
 *                            state: Object,
 *                            isFetching: boolean,
 *                            handlerOnChange: function,
 *                            handlerOnClick: function
 *                       }
 * @returns {Object}
 */
export default function SignInForm(props) {
    return (
        <div className="card">
            <form className="form">
                <InputText id="nickname" label="Никнейм:" value={props.state.nickname.value} onChange={props.handlerOnChange} />
                <Error error={props.state.nickname.error} />
                <InputText id="password" label="Пароль:" type="password" value={props.state.password.value} onChange={props.handlerOnChange} />
                <Error error={props.state.password.error} />
                <ButtonWithSpinner isFetching={props.isFetching} id="submitButton" onClick={props.handlerOnSubmit} name="Войти" />
            </form>
        </div>
    );
}