import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FormContainer } from './components/FormContainer/FormContainer'
import { FormProvider } from './context/FormContext'
import { Home } from './components/Home/Home'
import {Alert} from './components/Alert/Alert'


function App() {
  const [token, setToken] = useState()
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    console.log(localStorage.getItem('token'));
  })


  return (
    <>
      {!token ?
        <FormProvider>
          <FormContainer />
        </FormProvider> 
        
        :

        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

          { !token ?
            <Route exact path="/form">
              <FormProvider>
                <FormContainer />
              </FormProvider>
            </Route>
            :
            <Alert message="Ya estas autenticado" color="success"/>
          }

         </Switch>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
