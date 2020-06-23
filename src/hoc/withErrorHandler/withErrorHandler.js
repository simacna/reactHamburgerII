import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';
import Axios from 'axios';


//func with error handler, takes wrapped component as an input, returns func that receives
//props and simply returns jsx
//using axios to set up global error handler and use something 
//besides show in Modal. we're gonna change func to class based component (for lifecycle methods)
//to setup componentDidMount. could keep func and useEffect 
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component{
    state = {
      error: null
    }
    componentWillMount(){
      //want to clear any error so that whenever sending req, 
     //we don't have an error  and now on modal, only showing 
     
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req; //we have to return something so that it can continue
      });
      //error below c oming from firebase, obj which contains error msg
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      })
    }

    componentWillUnmount(){
      console.log('Will unmount', this.reqInterceptor, this.resInterceptor);
      //alternatively, functional component (useEffect), then
      //you'd write this code in the return of useEffect since this runs during cleanup
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }
    render() {
      return(
      <Aux>
          <Modal show={this.state.error}
                  modalClosed={this.errorConfirmedHandler}> 
            {this.state.error? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
      </Aux>
      )
      
    }
  }
  
}

export default withErrorHandler