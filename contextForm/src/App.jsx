import React from 'react';
import ControlledForm from './components/ControlledForm';
import DigitalID from './components/DigitalID';
import { FormProvider } from './FormContext';

function App() {
  return (
    <FormProvider>
      <div className="App">
        <ControlledForm />
        <DigitalID />
      </div>
    </FormProvider>
  );
}

export default App;
