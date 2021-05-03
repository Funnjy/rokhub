/**
 * Shows 404 error.
 * 
 * @returns {Object}
 */
export function Error404() {
    return (
        <div className="error-404">
            К сожалению запрашиваемая страница не найдена.
        </div>
    );
}

export function Error401() {
    return (
        <div className="error-401">
            Доступ запрещен
        </div>
    );
}