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
            const { result, message } = this.props.asyncRequest;

            return (
                <>
                    {message ? <AsyncResponse result={result} message={message} /> : null}
                    <Component {...this.props} />
                </>
            );
        }
    }
}