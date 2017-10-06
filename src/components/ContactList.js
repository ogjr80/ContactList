import React, {Component} from 'react';

import Contact from './Contact';


class ContactList extends Component{
render(){
  const contactStructure = this.props.contacts.map(data=> {
    return <Contact key={data.name} mycontact={data} ChangeContact = {this.props.onContactChange} />
  })
  return (
    <ul className="list-group">
      {contactStructure}
    </ul>
  )
}

}
export default ContactList;
