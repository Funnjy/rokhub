import React from 'react';
import { AsyncResponse } from '../components/generic/AsyncResponse';

/**
 * Wrapper for component.
 * Shows response message from server.
 * 
 * @param {Object} Component 
 * @returns {Object}
 */
export function withAsyncResponse(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <>
                    {this.props.asyncRequest.message ? 
                        <AsyncResponse result={this.props.asyncRequest.result} message={this.props.asyncRequest.message} /> : null}
                    <Component {...this.props} />
                </>
            );
        }
    }
}
