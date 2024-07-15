import "./App.css";
import FormContextProvider from "./context/FormContextProvider";
import DigitalIDComponent from "./components/DigitalId/DigitalId";
import FormInput from "./components/FormInput";


function App() {

  return (
    <>
      <FormContextProvider>
        <div className="outerWrapper">
          <FormInput />
          <DigitalIDComponent />
        </div>
      </FormContextProvider>
    </>
  );
}

export default App;
