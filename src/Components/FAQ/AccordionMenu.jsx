import React , { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

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
  

export default AccordionMenu