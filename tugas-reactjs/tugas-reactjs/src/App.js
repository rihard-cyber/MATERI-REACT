import React from 'react';
import Data from './Data';
import Input from './input';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { nama: 'Richard', umur: 25 }
  }

  _ubahNama = () => this.setState({ nama: 'Iqbal', umur: 18 }) 
  _ubahNama2 = (namabaru) => this.setState({ nama: namabaru }) 
  _ubahUmur2 = (umurbaru) => this.setState({ umur: parseInt(umurbaru) }) 


  render() {
    return (
    <div className="App">
      <div className="header">
      State dan Prop di component React.js
      </div>
      <div>
        <Data 
        nama={this.state.nama}
        umur={this.state.umur}
        ></Data>
        <Input>
        _ubahNama={this._ubahNama}
        _ubahNama2={this._ubahNama2}
        _ubahUmur2={this._ubahUmur2}
        
        </Input>
      </div>
      </div>
  );
 }
}



export default App;