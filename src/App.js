import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items'
import DeleteButton from './DeleteButton'
import AddButton from './AddButton'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
       
			<AddButton inputIsEmpty = {this.inputIsEmpty()}/>
        </form>

		<DeleteButton 
			deleteLastItem = {this.deleteLastItem} 
			noItemsFound = {this.noItemsFound()}/>

		<Items items = {this.state.items} />
      </div>
    );
  }
}

export default App;
