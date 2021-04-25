/**
 * Show an error in component.
 * If field the error is not null, this component is render.
 * 
 * This param have default value:
 * - className.
 * 
 * @param {Object} props {
 *                           className: string,
 *                           error: string
 *                       }
 * @returns {Object || null}
 */
export function Error(props) {
    const { className = 'error alert alert-danger',
            error } = props;

    return (
        error ? <div className={className}>{error}</div> : null
    );
}