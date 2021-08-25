import logo from './logo.svg';
import './App.css';
import {FormContainer} from './components/FormContainer/FormContainer'
import {FormProvider} from './context/FormContext'

function App() {
  return (
   <FormProvider>
    <FormContainer/>
   </FormProvider>
  );
}

export default App;
