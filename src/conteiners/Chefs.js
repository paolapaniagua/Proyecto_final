import React from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../redux/actions'
import Chef from '../components/Chefs';

const mapStateToProps = (state) => ({
    loading: state.chefs.isChefsLoading === true,
    chefs: state.chefs.chefs
});

class Chefs extends React.Component {
  componentWillMount(){
    this.props.dispatch(getChefs());
  }

  render() {
     return (
         <React.Fragment>
            {this.props.loading ? <div className="loader">Loading...</div>:
                <div>
                    <h1>Nuestros chefs</h1>
                    {this.props.chefs.map((chef,index) => {
                        return <Chef key={index} full_name={chef.full_name} bio={chef.bio} image={chef.image} _id={chef._id} />
                    })}
                </div>
            }
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(Chefs);