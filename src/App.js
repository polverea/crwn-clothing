import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

const HatsPage = () => {
  return <>
    <h1>Hats Page</h1>
  </>
}

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data() 
            }
          })
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path ='/' component={HomePage} />
            <Route exact path ='/shop/hats' component={HatsPage} />
            <Route exact path ='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SingInAndSignUpPage} />
          </Switch>

        </div>
  )
  }
  
}

export default App;
