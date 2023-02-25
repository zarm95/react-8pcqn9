import React from 'react';
import Contact from './components/Contact';

import './style.css';

 
const contactInfo = [
  {
    name: "Johana",
    email: "johana@mail.com",
    phone: "25554444",
  },
  { name: "emanuel", email: "emanuel@mail.com", phone: "25554444" },
  { name: "lucas", email: "lucas@mail.com", phone: "25554444" },
  { name: "Marie", email: "marie@mail.com", phone: "25554444" },
  { name: "Pedro", email: "johana@mail.com", phone: "25554444" },
];

export default function App() {
  return (
    <div>
      <h1>My contacts list 📱</h1>
     { contactInfo.map((contact)=>(<Contact
     name = {contact.name}
     email={contact.email}
     phone={contact.phone}/>) 

     )

     }
       
    </div>
  );
}
