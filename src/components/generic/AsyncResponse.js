/**
 * Create the message of response.
 * 
 * @param {Object} props {
 *                            result: boolean,
 *                            message: string
 *                       }
 * @returns {Object}
 */
export function AsyncResponse(props) {
    const className = props.result ? 'async-result async-result__success alert alert-success' : 'async-result async__danger alert alert-danger';

    return (
        <div className={className}>{props.message}</div>
    );
}