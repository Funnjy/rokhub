import React from 'react';
import { connect } from 'react-redux';
import { Link } from './Router';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props.user.accessToken ? 
            [{path: `/users/user?id=${this.props.user.id}`, name: "Мой профиль"},
             {path: "/users/signOut", src: "/style/icons/signOut.png"}] :
            [{path: "/users/signIn", name: "Авторизация" },
             {path: "/users/signUp", name: "Регистрация" }];

        return (
            <nav className="header">
                <ul className="header__navbar">
                    <li className="header__navbar-item">
                        <Link className="link-simple" {...props[0]} />
                    </li>
                    <li className="header__navbar-item">
                        <Link className="link-simple" {...props[1]} />
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);