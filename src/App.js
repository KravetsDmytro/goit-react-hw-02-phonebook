import React from 'react';
import FormPhone from './components/phone/phone';
import ContactList from './components/contactList/ContactList.js';

// import ContactUs from './components/contactUs/ContactUs';
// import Login from './components/login/Login';
// import Phone from './components/phone/phone.js' ;


class App extends React.Component {
  state = {
    contacts: [{id:'id-1', text:' one proba', completed: 'false'},
    {id:'id-2', text:' tvo proba', completed: 'false'},
    {id:'id-3', text:' fre proba', completed: 'false'}
  ],

  }

  formSubmitHandler=data=>{
console.log(data)
  }

deleteContact = contactId =>{
this.setState(prevState =>({contacts:
   prevState.contacts.filter(contact=> contact.id !==contactId),}));
};


  render() {
const {contacts} = this.state;

    return (
      <>
        <div>phone number</div>
<FormPhone onSubmit={this.formSubmitHandler}  />

<ContactList contacts={contacts} onDeleteContact= {this.deleteContact} />

        {/* <Phone />

        <ContactUs />
        <Login /> */}

      </>
    )
  }
}

export default App;
