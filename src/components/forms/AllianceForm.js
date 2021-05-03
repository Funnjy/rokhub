import { ButtonWithSpinner } from "../generic/Buttons";
import { Error } from "../generic/Error";
import { InputText } from "../generic/InputText";
import { Textarea } from "../generic/Textarea";

/**
 * Controlled component for create alliance.
 * 
 * @param {Object} props {
 *                            state: Object,
 *                            isFetching: Boolean,
 *                            handlerOnChange: function,
 *                            handlerOnSubmit: function
 *                       }
 * @returns {Object}
 */
export default function CreateAllianceForm(props) {
    return (
        <form className="form">
            <InputText id="tag" label="Тэг:" onChange={props.handlerOnChange} value={props.state.tag.value} />
            <Error error={props.state.tag.error} />
            <InputText id="name" label="Название:" onChange={props.handlerOnChange} value={props.state.name.value} />
            <Error error={props.state.name.error} />
            <Textarea id="description" label="Описание:" value={props.state.description.value} onChange={props.handlerOnChange} />
            <Error error={props.state.description.error} />
            <ButtonWithSpinner isFetching={props.isFetching} id="submitButton" onClick={props.handlerOnSubmit} name="Создать" />
        </form>
    );
}