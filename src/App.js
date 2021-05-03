import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body" id="container">
                <Sidebar />
                <Content accessToken={this.props.user.accessToken} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(App);