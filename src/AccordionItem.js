import React, { useState } from "react";

// export function AccordionItem({ item, className, ...props }) {
    export function AccordionItem(props) {
  const accordionClassName = props.className;
  const [isExpanded, setIsExpandes] = useState(false);
  const handleClick = () => {
    setIsExpandes(!isExpanded);
  };

  return (
    <div className={accordionClassName}>
      <button onClick={handleClick}> {isExpanded ? "close" : "open"} </button>
      {isExpanded && (
        <>
          <h3>{props.item.heading}</h3>
          <p>{props.item.heading}</p>
          <p>{props.children}</p>
        </>
      )}
    </div>
  );
}
