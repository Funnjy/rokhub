import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import Content from './components/Content';
import './style.css';

function App(props) {
    return (
        <div className="container__row row justify-content-center" id="container">
            <Navigation />
            <Content accessToken={props.accessToken} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        accessToken: state.user.accessToken
    }
}

export default connect(mapStateToProps, null)(App);