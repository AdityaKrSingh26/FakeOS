import ControlledForm from "./components/ControlledForm/ControlledForm";
import UnControlledForm from "./components/UncontrolledForm/UncontrolledForm";

function App() {
  const onSubmit = (data) => {
    console.log("Form submitted with ", data);
  };
  return (
    <>
      <ControlledForm onSubmit={onSubmit} />
      {/* <UnControlledForm onSubmit={onSubmit} /> */}
    </>
  );
}

export default App;
