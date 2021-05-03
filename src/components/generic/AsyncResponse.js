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
    const className = props.result ? 'async-result async-result_success' : 'async-result async-result_danger';

    return (
        <div className={className}>{props.message}</div>
    );
}