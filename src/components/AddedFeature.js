import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from '../actions/carActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={props.removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;
const mapStateToProps = state => {
  console.log(state)
  return{
    price: state.car.price,
    name: state.car.name,
    image: state.car.image
  }
}
export default connect(mapStateToProps, { removeFeature })(AddedFeature);
