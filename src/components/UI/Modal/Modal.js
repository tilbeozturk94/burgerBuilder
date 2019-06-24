import React, { Component } from "react";
import classes from "./Modal.css";
import AuxComponent from "../../../hoc/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show || nextProps.childen !== this.props.children;
  }

  render() {
    return (
      <AuxComponent>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </AuxComponent>
    );
  }
}

export default Modal;
