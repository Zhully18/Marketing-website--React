import React from 'react';
import './Faq.css'; // Import CSS file
import {menuItems} from "../Assets/data"
import AccordionMenu from './AccordionMenu';

// Example usage
function Faq() {

  return (
    <div className='accordion_wrapper'>
      <h1>Frequently Asked Questions</h1>
      <AccordionMenu items={menuItems} />
    </div>
  );
}

export default Faq;