import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {addFeature, removeFeature} from './actions';

const App = (props) => {

  const addFeatureHandler = item => {
    // dispatch an action here to remove an item
    console.log(`App.js: ${item}`);
    props.addFeature(item);
  };

  const removeFeatureHandler = item => {
    // dipsatch an action here to add an item
    props.removeFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeatureHandler={removeFeatureHandler}/>
      </div>
      <div className="box">
        <AdditionalFeatures addFeatureHandler={addFeatureHandler}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{

  };
}


export default connect(mapStateToProps, {addFeature, removeFeature})(App);