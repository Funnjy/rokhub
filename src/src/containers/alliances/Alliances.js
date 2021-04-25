import React from 'react';
import { connect } from 'react-redux';
import CreateAlliance from './CreateAlliance';
import Modal from '../../components/Modal';
import { Button } from '../../components/generic/Buttons';
import { alliances } from '../../store/actions/alliancesAction';
import AlliancesCard from '../../components/cards/AlliancesCard';
import { getAsyncRequest } from '../../selectors/getAsyncRequest';
import { ALLIANCES_SECTION } from '../../store/constants';
import { Spinner } from '../../components/generic/Spinner';

/**
 * The component shows alliances list and control the modal window to create alliance.
 */
class Alliances extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.handlerOnClickCloseModalWindow = this.handlerOnClickCloseModalWindow.bind(this);
        this.handlerOnClickOpenModalWindow = this.handlerOnClickOpenModalWindow.bind(this);
    }

    handlerOnClickOpenModalWindow() {
        if(this.props.user.accessToken && !this.props.user.alliance) this.setState( { isOpen: true } );
    }

    handlerOnClickCloseModalWindow() {
        this.setState( { isOpen: false } );
    }

    componentDidMount() {
        this.props.alliancesReducer();
    }

    render() {
        return (
            <div className="alliances">
                <div className="alliances__navbar">
                    <Button name="Создать альянс" onClick={this.handlerOnClickOpenModalWindow} />
                </div>
                <Modal title="Создание альянса" isOpen={this.state.isOpen} onClose={this.handlerOnClickCloseModalWindow} children={CreateAlliance} />
                {this.props.asyncRequest.isFetching ? <Spinner /> : <AlliancesCard alliances={this.props.alliances} />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return Object.assign(
        { user: state.user, alliances: state.alliances.alliances },
        { ...getAsyncRequest(ALLIANCES_SECTION)(state) }
    );
}

function mapDispatchToProps(dispatch) {
    return {
        alliancesReducer: () => dispatch(alliances())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alliances);