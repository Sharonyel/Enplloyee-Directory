// src/App.js

import React from "react";

import API from "./utils/API.js";
import User from "./component/User";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      empData: []
    };
  }

  render() {
    const { empData } = this.state;

    return (
      <div>
        {empData.map(employee => (
      <User 
      name={employee.name} 
      avatar={employee.avatar} 
      email={employee.email} 
      phone={employee.phone}
      gender={employee.gender}/>
      
      ))}
      </div>
    );
  }


    async componentDidMount() {
      // Load async data.
      let userData = await API.get('/', {
        params: {
          results: 10,
          inc: 'name,email,picture,phone,gender'
        }
      });

          // Parse the results for ease of use.
      userData = userData.data.results;

      // Update state with new data and re-render our component.

      this.setState({
        ...this.state, ...{
          empData: userData
        }
      });
    }
  }
  export default App;


