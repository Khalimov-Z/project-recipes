import Header from "./Header";
import Main from "./Main";
import React, { useEffect } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from 'react-redux'
import { loadRecipes } from "../redux/reducers/recipes";
import {Switch, Route} from 'react-router-dom';
import Allrecipes from './Allrecipes'
import Meat from './Meat'
import Desserts from './Desserts'
import Beverages from './Beverages'
import Salads from './Salads'
import SignIn from './SignIn'
import { Redirect } from 'react-router'

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.recipes.token);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  let routes;

  if (token) {
    routes = (
     <div>
       asasd
     </div>
    )
  }
  else {
    routes = (
      <Switch>
        <Route path="/SignIn" component={SignIn} />
      </Switch>
    )
  }

  return (
    <div className="container-lg mb-5">
      {routes}
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/allrecipes/:id?">
          <Allrecipes />
        </Route>
        <Route path="/meat/:id?">
          <Meat />
        </Route>
        <Route path="/desserts/:id?">
          <Desserts />
        </Route>
        <Route path="/beverages/:id?">
          <Beverages />
        </Route>
        <Route path="/salads/:id?">
          <Salads />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
