import React, { Component } from "react";
import ContactsList from './ContactsList/ContactsList'

class App extends Component{
state = {
  contacts: ['qsDd','QDd'],
  name: ''
  }
  
 formSubmitHandler = e => {
   e.preventDefault();

   this.setState(prevState => ({
     contacts: [...prevState.contacts, e.target.name.value],
   }))
  }


  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  }
  
  render() {
    return (<div>
      <h1>PhoneBook</h1>
      <form onSubmit={this.formSubmitHandler}>
        <label>Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          /></label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ContactsList items={this.state.contacts}/>
    </div>)
  }
}

export default App;