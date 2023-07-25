import "./App.css";
import { Accordion } from "./Accordion";
import { items } from "./AccordionItemsArray"

const accordionClassName = "accordion";
const accordionContainerCx = "accordionContainer";

function App() {
  return (
    <div className="App">
      <h2>App</h2>
      <Accordion
        items={items}
        accordionClassName={accordionClassName}
        accordionContainerCx={accordionContainerCx}
      >
        texto Children
      </Accordion>
    </div>
  );
}

export default App;
