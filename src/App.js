// Set up "empty" reducer and initial state 👉 Set up store and Provider 👉
// Connect components 👉 Add events and event handlers in UI 👉 Build action creators 👉
// write the reducer logic for the actions 👉 Rinse and repeat

import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { carReducer } from './reducers/carReducer';
import { addFeature, removeFeature } from './actions/carActions';

import { createStore } from "redux";

export const store = createStore(carReducer);
console.log(store.getState());

const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
        removeFeature={removeFeature} 
        car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
        buyItem={buyItem}
        additionalFeatures={props.additionalFeatures} />
        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App)

// export default App;
