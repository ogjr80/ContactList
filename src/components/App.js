import React, {Component} from 'react';

import ContactList from './ContactList';

class App extends Component{

 contactChanged(){
   console.log('contact has changed')
 }
  render(){
    const Contacts = [
      {
        "name": "Shine Waniko",
        "description": "Developer Designer Artist Famous Body Builder",
        "votes": "10",
        "imageUrl": "http://schemanet.co.za/images/team/pic8.jpg"
      },
      {
        "name": "Ashley Ngoetjana",
        "description": "Fullstack Developer Chamer Womanizer",
        "votes": "9",
        "imageUrl": "https://lh3.googleusercontent.com/-i1DPsCAqK2s/AAAAAAAAAAI/AAAAAAAAAHY/7mlYoIPAgNc/s640/photo.jpg"
      },
      {
        "name": "Rethabile Moahloli",
        "description": "Business Analyst Designer Developer Famous Danser",
        "votes": "10",
        "imageUrl": "https://scontent.fjnb6-1.fna.fbcdn.net/v/t1.0-1/c0.22.160.160/p160x160/13428477_137031170050960_4775414614797111122_n.jpg?oh=e4c5c80c48dbf18761c3aec671fdbea8&oe=5A78CB3E"
      }
    ]


    return(
        <ContactList contacts ={Contacts} onContactChange={(name)=> console.log(name)}/>
    )
  }
}

export default App;
