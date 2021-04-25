import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUpForm';
import { validateUserValue } from '../../settings/settings';
import { userSignUp } from '../../store/actions/signUpAction';
import { withAsyncResponse } from '../../hoc/withAsyncResponse';
import { SIGN_UP_SECTION } from '../../store/constants';
import { getAsyncRequest } from '../../selectors/getAsyncRequest';

/**
 * Container to sign up.
 * When user touched on the button, is shown spinner of loading.
 * When field error in this state not null, error component is render after input field.
 * Settings of inputs is locate in file settings.js.
 */
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: {
                value: '',
                error: null
            },
            governorId: {
                value: '',
                error: null
            },
            password: {
                value: '',
                error: null
            },
            repeatPassword: {
                value: '',
                error: null,
            },
            email: {
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
        
        if(!hasError) this.props.signUpReducer(userData);
    }

    handlerOnChange(event) {
        const { id, value } = event.target;
        const error = validateUserValue(id, value, this.state.password.value);

        this.setState({ [id]: { value, error } });
    }

    render() {
        return (
            <SignUpForm
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
        signUpReducer: userData => dispatch(userSignUp(userData))
    }
}

export default connect(getAsyncRequest(SIGN_UP_SECTION), mapDispatchToProps)(withAsyncResponse(SignUp));