import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import store from './store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
                
let persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
     <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
  </Provider>,
)

reportWebVitals();