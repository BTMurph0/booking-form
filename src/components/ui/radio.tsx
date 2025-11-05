export default function RadioSelect(name: string) {
  return (
    <>
      <input
        className="appearance-none"
        type="radio"
        name={name}
        id={name}
        value={name}
      />
      <label className="p-6 border rounded-xl" htmlFor={name}>
        {name}
      </label>
    </>
  );
}
