import React from 'react';
import { connect } from 'react-redux';
import UserProfileCard from '../../components/cards/UserProfileCard';
import { getAsyncRequest } from '../../selectors/getAsyncRequest';
import userProfile from '../../store/actions/userProfileAction';
import { USER_PROFILE_SECTION } from '../../store/constants';
import { Spinner } from '../../components/generic/Spinner';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.showUserReducer(this.props.params.id);
    }

    render() {
        return (
            this.props.asyncRequest.isFetching ? <Spinner /> : <UserProfileCard user={this.props.userProfile} />
        );
    }
}

function mapStateToProps(state) {
    return Object.assign(
        { userProfile: state.userProfile },
        { ...getAsyncRequest(USER_PROFILE_SECTION)(state) }
    )
}

function mapDispatchToProps(dispatch) {
    return {
        showUserReducer: id => dispatch(userProfile(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);