import React from 'react';
import { connect } from 'react-redux';
import { userUpdateAction } from '../../store/actions/userAction';
import { Redirect } from '../../components/Router';

/**
 * Component to exit from account.
 */
class SignOut extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.signOutReducer();
    }

    render() {
        //Redirect to last location
        return <Redirect to={window.history.state.pathname} params={window.history.state.params} />;
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOutReducer: () => dispatch(userUpdateAction( { exp: null, accessToken: null }))
    }
}

export default connect(null, mapDispatchToProps)(SignOut);