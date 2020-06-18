import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';
import axios from 'axios';


//func with error handler, takes wrapped component as an input, returns func that receives
//props and simply returns jsx
//using axios to set up global error handler and use something 
//besides show in Modal. we're gonna change func to class based component (for lifecycle methods)
//to setup componentDidMount. could keep func and useEffect 
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component{
    componentDidMount(){
      axios.interceptors.
    }
    render() {
      <Aux>
          <Modal show> 
            Something didn't work!
          </Modal>
          <WrappedComponent {...this.props} />
      </Aux>
    }
  }
  return (props) => {
    return (
      
  
    )
  }
}

export default withErrorHandler