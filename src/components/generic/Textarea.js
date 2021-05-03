/**
 * Create a textarea to input text.
 * 
 * This params has default values:
 * - textareaCLassName,
 * - labelClassName.
 * 
 * @param {Object} props {
 *                            id: string,
 *                            label: string,
 *                            value: string,
 *                            onChange: function,
 *                       }
 * @returns {Object}
 */
export function Textarea(props) {
    const { id,
            label,
            value,
            onChange } = props;

    return (
        <>
            <label htmlFor={id} className="input-text__label">{label}</label>
            <textarea className="input-text input-text_h-90" id={id} value={value} onChange={onChange} ></textarea>
        </>
    );
}