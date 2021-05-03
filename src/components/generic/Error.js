/**
 * Show an error in component.
 * If field the error is not null, this component is render.
 * 
 * @param {Object} props {
 *                           error: string
 *                       }
 * @returns {Object || null}
 */
export function Error(props) {
    return (
        props.error ? <div className="error">{props.error}</div> : null
    );
}