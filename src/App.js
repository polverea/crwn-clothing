import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';


import './App.css'
import Header from './components/header/header.component';

const HatsPage = () => {
  return <>
    <h1>Hats Page</h1>
  </>
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ='/' component={HomePage} />
        <Route exact path ='/shop/hats' component={HatsPage} />
        <Route exact path ='/shop' component={ShopPage}/>
      </Switch>

    </div>
  )
}

export default App;
