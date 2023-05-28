import React from 'react';
import css from './contactList.css';

const ContactList =({contacts})=>(
<ul className='contact'>{ contacts.map(({id, text})=>(
<li key={id} className='contact-item' >
<p className='contact-name'>{text}</p>
<button className='button-del'>delete</button>

</li>
))}</ul>

)




// class TodoList extends React.Component {

// render(){
// return(<div>  hellou</div>)

// }
// }



export default ContactList;
