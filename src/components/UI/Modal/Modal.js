import React from "react";
import classes from "./Modal.css";
import AuxComponent from "../../../hoc/AuxComponent";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <AuxComponent>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </AuxComponent>
);

export default modal;
