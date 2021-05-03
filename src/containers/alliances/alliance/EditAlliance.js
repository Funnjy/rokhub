import React from 'react';
import { connect } from 'react-redux';
import AllianceForm from '../../../components/forms/AllianceForm';
import { validateAllianceValue } from '../../../settings/settings';
import { withAsyncResponse } from '../../../hoc/withAsyncResponse';
import { getAsyncRequest } from '../../../selectors/getAsyncRequest';
import { EDIT_ALLIANCE_SECTION,  } from '../../../store/constants';
import { editAlliance } from '../../../store/actions/allianceAction';
import { Error401 } from '../../../components/generic/HTTPErrors';

/**
 * Component for edit alliance information.
 */
class EditAlliance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: {
                value: this.props.alliance?.tag,
                error: null
            },
            name: {
                value: this.props.alliance?.name,
                error: null
            },
            description: {
                value: this.props.alliance?.description,
                error: null
            }
        };
        this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    handlerOnSubmit(event) {
        event.preventDefault();
        const allianceData = { id: this.props.alliance.id };
        const hasError = Object.keys(this.state).find(field => {
            allianceData[field] = this.state[field]['value'];
            return this.state[field]['error'] !== null || this.state[field]['value'].trim() === '';
        })

        if(!hasError) this.props.editAllianceReducer(allianceData);
    }

    handlerOnChange(event) {
        const { id, value } = event.target;
        const error = validateAllianceValue(id, value);

        this.setState({ [id]: { value, error } });
    }

    render() {
        if(this.props.alliance?.leaderId !== this.props.user.id) {
            return <Error401 />;
        }

        return (
            <div className="board">
                <AllianceForm
                    state={this.state}
                    isFetching={this.props.asyncRequest.isFetching}
                    handlerOnChange={this.handlerOnChange}
                    handlerOnSubmit={this.handlerOnSubmit}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editAllianceReducer: allianceData => dispatch(editAlliance(allianceData))
    }
}

export default connect(getAsyncRequest(EDIT_ALLIANCE_SECTION), mapDispatchToProps)(withAsyncResponse(EditAlliance));