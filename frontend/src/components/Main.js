import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import CountryListing from './CountryListing';
import ItemListing from './ItemListing';
import OfferToHelp from './OfferToHelp';
import SearchBox from './SearchBox';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path="/country-listing" component={CountryListing} />
      <Route path="/offer-to-help" component={OfferToHelp} />
      <Route path="/item-listing/:country" component={ItemListing} />
      <Route path="/search" component={SearchBox} />
    </Switch>
  </main>
)

export default Main;
