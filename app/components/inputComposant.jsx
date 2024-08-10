/*************************** verification final */
export default function InputComposant ({ label, name, value, type, required, maxLength, onChange }) {

    return (
      <div className='flex flex-col p-2 items-center'>
        <label htmlFor={name}>{label} {required && '*'}</label>
        <input
          type={type}
          id={name}
          className='border-solid border-slate-800 border-2 rounded max-w-sm'
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
        />
      </div>
    );
  }
