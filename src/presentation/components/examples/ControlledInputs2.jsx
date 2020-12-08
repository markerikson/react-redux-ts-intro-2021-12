function FormComponent() {
  const [nameFields, setNameFields] = useState({
    firstName: "",
    // could be other fields here
  });
  const [hasPet, setHasPet] = useState(false);

  const onNameFieldChanged = e => {
    setNameFields({
      ...nameFields,
      [e.target.name]: e.target.value,
    });
  };

  const onHasPetChanged = e => {
    setHasPet(e.target.checked);
  };

  return (
    <form>
      <input
        name="firstName"
        value={nameFields.firstName}
        onChange={onNameFieldChanged}
      />
      <input
        name="hasPet"
        type="checkbox"
        checked={hasPet}
        onChange={onHasPetChanged}
      />
    </form>
  );
}

render(<FormComponent />);
