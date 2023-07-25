import React from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ items, accordionClassName, accordionContainerCx, ...props }) {
  const StringAccordion = "Accordion";

  return (
    <div className={accordionContainerCx}>
      <h1>{StringAccordion}</h1>
      {items.map((item) => {
        return (
          <AccordionItem
            className={accordionClassName}
            key={item.heading}
            item={item}
            {...props}
         />
        );
      })}
    </div>
  );
}
