import React from 'react';
import ContactForm from '../components/contactForm/ContactForm';
import ContactList from '../components/contactList/ContactList.js';
import Filter from '../components/ContactFilter/ContactFiltr';
import css from './App.module.css';


// import ContactUs from './components/contactUs/ContactUs';
// import Login from './components/login/Login';
// import Phone from './components/phone/phone.js' ;


class App extends React.Component {
  state = {
    contacts:  [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  // Додаємо контакт
  addContact = newContact => {
    // Перевіряємо контакт на дублікат
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // Слідкуємо за полем фільтрації та записуємо у стейт
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // Фільтруємо та повертаємо результат фільтру
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


//   formSubmitHandler=data=>{
// console.log(data)
//   };


deleteContact = contactId =>{
this.setState(prevState =>({contacts:
   prevState.contacts.filter(contact => contact.id !==contactId),}));
};


  render() {
const {contacts} = this.state;
const { filter } = this.state;
const filteredResults = this.filterContacts();

// const completedContact = contacts.reduce((total, contact)=>(
//   contact.completed ? total + 1 : total), 0,
//   );

    return (
      <div className={css.container} >
        <div>Книга контактів</div>
<ContactForm onSubmit={this.addContact}  />
<Filter value={filter} onChange={this.changeFilter} />
<ContactList contacts={filteredResults} onDeleteContact= {this.deleteContact} />
<div>
<p>
Загальна кількість контактів: {contacts.length}
</p>
{/* <p>Кільквість записаних контактів:{completedContact} </p> */}
  </div>

        {/* <Phone />

        <ContactUs />
        <Login /> */}

      </div>
    )
  }
}

export default App;
