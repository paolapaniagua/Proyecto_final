import React from 'react';
import { connect } from 'react-redux';
import {getChefsById } from '../redux/actions'
import CheftDetails from '../components/ChefDetails';

const mapStateToProps = (state) => ({
    loading: state.chefs.isChefsLoading === true,
    chefs: state.chefs.chefs
});

class DetalleChef extends React.Component {
  componentWillMount(){   
    const { match } = this.props; 
    const { params } = match;
    const { idChef } = params;

    this.props.dispatch(getChefsById(idChef));
  }

  render() {
    return (
      <React.Fragment>
         { this.props.loading 
          ? <div className="loader">Loading...</div>
          : <CheftDetails {...this.props.chefs} />
        }  
      </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(DetalleChef);