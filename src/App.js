

import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";


function App() {
  return (
  <div className="App">
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  </div>
  );
}



export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       empData: []
//     };
//   }

//   render() {
//     const { empData } = this.state;

//     return (
//       <div className="App">
//         <Wrapper>
//         <Header />
//         <Nav />
//         {empData.map(employee => (
//       <User 
//       name={employee.name} 
//       avatar={employee.avatar} 
//       email={employee.email} 
//       phone={employee.phone}
//       gender={employee.gender}/>
      
//       ))}
//       </Wrapper>
//       </div>
//     );
//   }


//     async componentDidMount() {
//       // Load async data.
//       let userData = await API.get('/', {
//         params: {
//           results: 10,
//           inc: 'name,email,picture,phone,gender'
//         }
//       });

//           // Parse the results for ease of use.
//       userData = userData.data.results;

//       // Update state with new data and re-render our component.

//       this.setState({
//         ...this.state, ...{
//           empData: userData
//         }
//       });
//     }
//   }


