/**
 * Create a field to input text.
 * 
 * This params has default values:
 * - type
 * 
 * @param {Object} props {
 *                            id: string,
 *                            label: string,
 *                            value: string,
 *                            onChange: function,
 *                            type: string,
 *                            placeholder: string
 *                       }
 * @returns {Object}
 */
export function InputText(props) {
    const { id,
            label,
            value,
            onChange,
            type = 'text',
            placeholder } = props;

    return (
        <>
            <label className="input-text__label" htmlFor={id}>{label}</label>
            <input className="input-text" type={type} id={id} value={value} onChange={onChange} placeholder={placeholder} />
        </>
    );
}