import React from 'react';
import {connect} from 'react-redux';

const ProductList = () => {
  return (
    <div>
      <p>123</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(ProductList);
