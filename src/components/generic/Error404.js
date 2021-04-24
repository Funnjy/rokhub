/**
 * Shows 404 error.
 * 
 * @returns {Object}
 */
export function Error404() {
    return (
        <div className="error-404 alert alert-danger">
            <h4 className="error-404__hedaer alert-heading">404</h4>
            <p>К сожалению запрашиваемая страница не найдена.</p>
        </div>
    );
}