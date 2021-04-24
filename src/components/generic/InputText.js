/**
 * Create a field to input text.
 * 
 * This params has default values:
 * - inputClassName,
 * - labelClassName,
 * - type
 * 
 * @param {Object} props {
 *                            id: string,
 *                            label: string,
 *                            labelClassName: string,
 *                            value: string,
 *                            inputClassName: string,
 *                            onChange: function,
 *                            type: string,
 *                            placeholder: string
 *                       }
 * @returns {Object}
 */
export function InputText(props) {
    const { id,
            label,
            labelClassName = 'input-text__label form-label',
            value,
            inputClassName = 'input-text form-control form-control-sm',
            onChange,
            type = 'text',
            placeholder } = props;

    return (
        <>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <input className={inputClassName} type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} />
        </>
    );
}