import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promiss = loadStripe (
  "pk_test_51IXiBdJYq7qa4kSkVI4wSVK5upYsiiGO0ShKZErEvrCuAEKsSbgtTmezOh7N160FddXy4BAg5ZVUZPogyrbsWEbj005JukzSTG"
)

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        dispatch({ 
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({ 
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
              <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
              <Header />
              <Elements stripe={promiss}>
                <Payment />
              </Elements>
          </Route>
          <Route path="/">
              <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
