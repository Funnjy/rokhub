/**
 * Create a button.
 * 
 * Available buttons color are green, blue, gray, red.
 * 
 * This is params has default values:
 * - className,
 * - color.
 * 
 * @param {Object} props {
 *                            id: string,
 *                            name: string,
 *                            className: string,
 *                            onClick: function,
 *                            type: string,
 *                            color: string
 *                       }
 * @returns {Object}
 */
export function Button(props) {
    const colors = {
        green: 'button_green',
        blue: 'button_blue',
        gray: 'button_gray',
        red: 'button_red',
    }
    const { id,
            name,
            className = 'button button_m-t',
            onClick,
            type,
            color = 'green' } = props;

    return (
        <button className={`${className} ${colors[color]}`} id={id} onClick={onClick} type={type}>{name}</button>
    );
}

/**
 * Create a button with spinner.
 * If field the isFetching is true, spinner is shown.
 * 
 * This params has default values:
 * - buttonClassName,
 * - spinnerClassName,
 * - color.
 * 
 * @param {Object} props {
 *                            isFetching: boolean,
 *                            buttonClassName: string,
 *                            spinnerClassName: string,
 *                            id: string,
 *                            onClick: function,
 *                            name: string,
 *                            color: string
 *                       }
 * @returns {Object}
 */
export function ButtonWithSpinner(props) {
    const { isFetching,
            buttonClassName,
            spinnerClassName = 'spinner-border spinner-border-sm ',
            id,
            onClick,
            name,
            color } = props;
    const spinner =  isFetching ? <span className={spinnerClassName}></span> : name;

    return (
        <Button className={buttonClassName} id={id} onClick={onClick} name={spinner} color={color} />
    );
}