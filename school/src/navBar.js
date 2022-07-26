import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <Link to="/invoices">Say Hello </Link>
        <br />
        <Link to="/expenses">Redirect </Link>
      </div>
    );
  }
}
