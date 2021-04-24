import React from 'react';
import { connect } from 'react-redux';
import AllianceCard from '../../components/cards/AllianceCard';
import { getAsyncRequest } from '../../selectors/getAsyncRequest';
import { alliance } from '../../store/actions/allianceAction';
import { ALLIANCE_SECTION } from '../../store/constants';
import { Spinner } from '../../components/generic/Spinner';
import AllianceMembersCard from '../../components/cards/AllianceMembersCard';

/**
 * Component shows an information about alliance.
 */
class Alliance extends React.Component {
    constructor(props) {
        super(props);
        this.types = {
            'show': AllianceCard,
            'members': AllianceMembersCard,
        }
    }

    componentDidMount() {
        this.props.allianceReducer(this.props.params.id);
    }

    render() {
        const Component =  this.types[this.props.params['type']] || this.types['show'];

        return (
            this.props.asyncRequest.isFetching ? <Spinner /> : <Component alliance={this.props.alliance} />
        );
    }
}

function mapStateToProps(state) {
    return Object.assign(
        { alliance: state.alliance },
        { ...getAsyncRequest(ALLIANCE_SECTION)(state) }
    );
}

function mapDispatchToProps(dispatch) {
    return {
        allianceReducer: id => dispatch(alliance(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alliance);