export default function InputField({
  id,
  name,
  type = "text",
  value,
  error,
  onChange,
  placeholder,
  dirty,
  fieldtype = "input",
  rows = 5,
}) {
  const isError = error.invalid && dirty;

  const baseClasses = `gap-[10px] w-full p-[12px] rounded-lg border transition duration-500 ease-in-out
   bg-[hsla(253,6%,72%,0.2)] text-white text-[12px] focus:shadow-[0_0_5px_rgba(0,0,0,0.2)] 
    ${isError ? "error-input" : "border-transparent"}
  `;

  return (
    <div>
      <label htmlFor={id} className="text-[12px] text-[#888]">
        {name}
      </label>

      {fieldtype === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}

      {isError && (
        <span className="text-[#d9534f] text-sm mt-1 block">
          {error.message}
        </span>
      )}
    </div>
  );
}
