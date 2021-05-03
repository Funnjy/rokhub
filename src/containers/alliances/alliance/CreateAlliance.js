import React from 'react';
import { connect } from 'react-redux';
import AllianceForm from '../../../components/forms/AllianceForm';
import { validateAllianceValue } from '../../../settings/settings';
import { createAlliance } from '../../../store/actions/allianceAction';
import { withAsyncResponse } from '../../../hoc/withAsyncResponse';
import { getAsyncRequest } from '../../../selectors/getAsyncRequest';
import { CREATE_ALLIANCE_SECTION } from '../../../store/constants';

/**
 * Container to create alliance with errors components for each fields.
 * Settings of inputs is locate in file settings.js.
 */
class CreateAlliance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: {
                value: '',
                error: null
            },
            name: {
                value: '',
                error: null
            },
            description: {
                value: '',
                error: null
            }
        }
        this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
        this.handlerOnChange = this.handlerOnChange.bind(this);
    }

    handlerOnSubmit(event) {
        event.preventDefault();
        const allianceData = {};
        const hasError = Object.keys(this.state).find(field => {
            allianceData[field] = this.state[field]['value'];
            return this.state[field]['error'] !== null || this.state[field]['value'].trim() === '';
        })

        if(!hasError) this.props.createAllianceReducer(allianceData);
    }

    handlerOnChange(event) {
        const { id, value } = event.target;
        const error = validateAllianceValue(id, value);

        this.setState({ [id]: { value, error } });
    }

    render() {
        return (
            <AllianceForm
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
        createAllianceReducer: allianceData => dispatch(createAlliance(allianceData))
    }
}

export default connect(getAsyncRequest(CREATE_ALLIANCE_SECTION), mapDispatchToProps)(withAsyncResponse(CreateAlliance));