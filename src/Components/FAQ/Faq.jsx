import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons from react-icons library
import './Faq.css'; // Import CSS file

function AccordionMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-menu">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            {item.title}
            {activeIndex === index ? <FaMinus className="accordion_icon" /> : <FaPlus className="accordion_icon" />} {/* Icon indicating whether the item is open or closed */}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
          {index !== items.length - 1 && <hr className="separator" />} {/* Horizontal line between menu items */}
        </div>
      ))}
    </div>
  );
}

// Example usage
function App() {
  const menuItems = [
    {
      title: 'How do i get mobile app',
      content: 'Content for Section 1'
    },
    {
      title: 'How do i contact support',
      content: 'Content for Section 2'
    },
    {
        title: 'Ho do i track my growth',
        content: 'Content for Section 2'
      },
      {
        title: 'Does Infigio have paid services',
        content: 'Content for Section 2'
      },
      {
        title: 'How fast do i see result after using Infigio',
        content: 'Content for Section 2'
      },
    {
      title: 'Can i use Infigio for free',
      content: 'Content for Section 3'
    }
  ];

  return (
    <div className='accordion_wrapper'>
      <h1>Frequently Asked Questions</h1>
      <AccordionMenu items={menuItems} />
    </div>
  );
}

export default App;