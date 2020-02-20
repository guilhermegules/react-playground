import React, { Component } from "react";
import { getUsers } from "../services/api";

class Users extends Component {
  state = {
    loading: false
  };

  getUsers = async () => {
    const { showLoading, hideLoading } = this.props;

    showLoading("Carregando usuários");

    await getUsers().then(response => {
      hideLoading();
      return response;
    });
  };

  render() {
    return <button onClick={this.getUsers}>Buscar usuários</button>;
  }
}

export default Users;
