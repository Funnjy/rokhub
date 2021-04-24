import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/forms/SignInForm';
import { validateUserValue } from '../../settings/settings';
import { userSignIn } from '../../store/actions/signInAction';
import { withAsyncResponse } from '../../hoc/withAsyncResponse';
import { SIGN_IN_SECTION } from '../../store/constants';
import { getAsyncRequest } from '../../selectors/getAsyncRequest';

/**
 * Container to sign in.
 * When user touched on the button, is shown spinner of loading.
 * When field error in this state not null, error component is render after input field.
 * Settings of inputs is locate in file settings.js.
 */
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: {
                value: '',
                error: null
            },
            password: {
                value: '',
                error: null
            }
        };
        this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    handlerOnSubmit(event) {
        event.preventDefault();
        const userData = {};
        const hasError = Object.keys(this.state).find(field => {
            userData[field] = this.state[field]['value'];
            return this.state[field]['error'] !== null || this.state[field]['value'].trim() === '';
        });

        if(!hasError) this.props.signInReducer(userData);
    }

    handlerOnChange(event) {
        const { id, value } = event.target;
        const error = validateUserValue(id, value);

        this.setState({ [id]: { value, error } });
    }

    render() {
        return (
            <SignInForm
                state={this.state}
                isFetching={this.props.asyncRequest.isFetching}
                handlerOnChange={this.handlerOnChange}
                handlerOnSubmit={this.handlerOnSubmit}
            />
        );
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        signInReducer: userData => dispatch(userSignIn(userData))
    }
}

export default connect(getAsyncRequest(SIGN_IN_SECTION), mapDispatchToProps)(withAsyncResponse(SignIn));