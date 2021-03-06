import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import AuxComponent from "../AuxComponent";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
    componentWillMount() {
      this.reqInter = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInter = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInter);
      axios.interceptors.response.eject(this.resInter);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <AuxComponent>
          <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </AuxComponent>
      );
    }
  };
};

export default withErrorHandler;
