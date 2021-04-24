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
 *                            labelClassName: string
 *                            value: string,
 *                            textareaClassName: string,
 *                            onChange: function,
 *                       }
 * @returns {Object}
 */
export function Textarea(props) {
    const { id,
            label,
            labelClassName = 'input-text__label form-label',
            value,
            textareaClassName = 'input-text form-control form-control-sm',
            onChange } = props;

    return (
        <>
            <label htmlFor={id} className={labelClassName}>{label}</label>
            <textarea className={textareaClassName} id={id} value={value} onChange={onChange} ></textarea>
        </>
    );
}