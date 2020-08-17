import React, { Component } from "react";
import "./App.css";
import Customer from "./compoents/Customer";

const customer = {
  name: "양동진",
  birthday: "961222",
  gender: "남자",
  job: "대학생",
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
