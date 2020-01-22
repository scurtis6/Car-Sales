import React from 'react';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
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
export default connect(mapStateToProps)(AddedFeature);
