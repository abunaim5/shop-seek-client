
const SelectOption = ({ optionsData }) => {
    const { name, options, borderCls, roundCls, setValue } = optionsData;

    return (
        <select defaultValue={name} onChange={(e) => setValue(e.target.value)} className={`select select-bordered focus:outline-none rounded-md ${borderCls} ${roundCls} border-accent`}>
            <option disabled>{name}</option>
            {
                options.map((option, idx) => <option key={idx} value={option}>{option}</option>)
            }
        </select>
    );
};

export default SelectOption;