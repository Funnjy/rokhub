import React from 'react';
import { Route, Switch, ProtectedRoute } from './Router';
import SignIn from '../containers/users/SignIn';
import SignUp from '../containers/users/SignUp';
import SignOut from '../containers/users/SignOut';
import Header from './Header';
import Main from '../containers/Main';
import Alliances from '../containers/alliances/Alliances';
import Alliance from '../containers/alliances/alliance/Alliance';
import UserProfile from '../containers/users/UserProfile';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content" id="content">
                <Header />
                <Switch>
                    <Route pathname="/" component={Main} />
                    <ProtectedRoute accessToken={this.props.accessToken} accessFor="guest" pathname="/users/signIn" component={SignIn} />
                    <ProtectedRoute accessToken={this.props.accessToken} accessFor="guest" pathname="/users/signUp" component={SignUp} />
                    <ProtectedRoute accessToken={this.props.accessToken} accessFor="user" pathname="/users/signOut" component={SignOut} />
                    <Route pathname="/users/user" component={UserProfile} />
                    <Route pathname="/alliances" component={Alliances} />
                    <Route pathname="/alliances/alliance" component={Alliance} />
                </Switch>
            </div>
        );
    }
}