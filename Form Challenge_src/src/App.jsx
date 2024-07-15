import "./App.css";
import FormContextProvider from "./context/FormContextProvider";
import DigitalIDComponent from "./components/DigitalComponent";
import FormInput from "./components/FormInput";


function App() {
  
  return (
    <>
      <FormContextProvider>
        <div>
          <FormInput  />
          <DigitalIDComponent/>
        </div>
      </FormContextProvider>
    </>
  );
}

export default App;
