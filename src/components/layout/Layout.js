import React, { Component } from "react";
import AuxComponent from "../../hoc/AuxComponent";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    }
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <AuxComponent>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </AuxComponent>
    );
  }
}

export default Layout;
