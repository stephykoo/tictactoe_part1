import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.js'

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        grid: ["", "", "", "", "", "", "", "", ""]
      }
  }

  handleClick (e) {
    console.log(e.target)
    // update grid in state to reflect the latest click
    // keep track of whose turn it is, and automatically switch to the other player after each click
  }

  render() {
    return (
        <div className="Box">
          <Square styles="Square1" onClick={this.handleClick} mark={this.state.grid[0]}/>
          <Square styles="Square2" onClick={this.handleClick} mark={this.state.grid[1]}/>
          <Square styles="Square3" onClick={this.handleClick} mark={this.state.grid[2]}/>
          <Square styles="Square4" onClick={this.handleClick} mark={this.state.grid[3]}/>
          <Square styles="Square5" onClick={this.handleClick} mark={this.state.grid[4]}/>
          <Square styles="Square6" onClick={this.handleClick} mark={this.state.grid[5]}/>
          <Square styles="Square7" onClick={this.handleClick} mark={this.state.grid[6]}/>
          <Square styles="Square8" onClick={this.handleClick} mark={this.state.grid[7]}/>
          <Square styles="Square9" onClick={this.handleClick} mark={this.state.grid[8]}/>

        </div>
    );
  }
}

export default App;


// <div className="Square2" onClick={this.handleClick}>
// </div>
// <div className="Square3" onClick={this.handleClick}>
// </div>
// <div className="Square4" onClick={this.handleClick}>
// </div>
// <div className="Square5" onClick={this.handleClick}>
// </div>
// <div className="Square6" onClick={this.handleClick}>
// </div>
// <div className="Square7" onClick={this.handleClick}>
// </div>
// <div className="Square8" onClick={this.handleClick}>
// </div>
// <div className="Square9" onClick={this.handleClick}>
// </div>









// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="Overall">
//         <div className="Box">
//           <table>
//             <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             </tr>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;
