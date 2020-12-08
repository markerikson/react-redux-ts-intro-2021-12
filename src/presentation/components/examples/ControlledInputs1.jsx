function FormComponent() {
  const [nameFields, setNameFields] = useState({
    firstName: "",
    lastName: "",
  });
  const { firstName, lastName } = nameFields;

  const [isJedi, setIsJedi] = useState(false);

  const onNameFieldChanged = e => {
    setNameFields({
      ...nameFields,
      [e.target.name]: e.target.value,
    });
  };

  const onIsJediChanged = e => {
    setIsJedi(e.target.checked);
  };

  let description = "";
  if (firstName && lastName) {
    description = `(${isJedi ? "Jedi" : "Not a Jedi"})`;
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "start" }}
    >
      <div>
        <label>First Name: </label>
        <input
          name="firstName"
          value={firstName}
          onChange={onNameFieldChanged}
        />
      </div>

      <div>
        <label>Last Name: </label>
        <input name="lastName" value={lastName} onChange={onNameFieldChanged} />
      </div>
      <div>
        <label>Is Jedi: </label>
        <input
          type="checkbox"
          name="isJedi"
          checked={isJedi}
          value={nameFields.lastName}
          onChange={onIsJediChanged}
        />
      </div>

      <div style={{ display: "flex", marginTop: 30 }}>
        <label>Result: </label>
        <span style={{ marginLeft: 15 }}>
          {firstName} {lastName} {description}
        </span>
      </div>
    </form>
  );
}

render(<FormComponent />);
