import React from 'react';
import ContactUs from './components/contactUs/ContactUs';
import Login from './components/login/Login';
import Phone from './components/phone/phone.js' ;


class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChange = event =>{
const {name, value}=event.currentTarget;

this.setState({
[name ]: value,}

);
  };





  render() {

    return (
      <>
        <div>Something</div>
        <form onSubmit={this.handleSubmit}>
        <label>Name
<input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>Number
<input type='number' name='number' value={this.state.number} onChange={this.handleChange} />


        </label>

</form>

        <Phone />

        <ContactUs />
        <Login />

      </>
    )
  }
}

export default App;
