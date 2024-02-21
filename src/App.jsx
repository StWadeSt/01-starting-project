import CoreConcept from "./components/CoreConcepts/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import {CORE_CONCEPTS} from './data.js'
import { EXAMPLES } from "./data.js";
import { useState } from "react";


function App() {

  function handleClick(selectedButton){
    setTabContent(selectedButton)
    console.log(selectedButton);
  }

  const [tabContent, setTabContent] = useState()

  return (
    <div>
      <Header/>
      <main>
        <section id="core-cencepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => 
            <CoreConcept 
            key = {item.image}
            title={item.title}
            description= {item.description}
            img= {item.image}
              />
            )}
          </ul>
          {/* <ul> 
              <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              img= {CORE_CONCEPTS[0].image}
              />
              <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description= {CORE_CONCEPTS[1].description}
              img= {CORE_CONCEPTS[1].image}
              />
              <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              description= {CORE_CONCEPTS[2].description}
              img= {CORE_CONCEPTS[2].image}
              />
              <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              description= {CORE_CONCEPTS[3].description}
              img= {CORE_CONCEPTS[3].image}
              />
          </ul> */}
        </section>

        <section id= "examples">
          <menu>  {/*  we are displaying four custom buttons which when clicked will display different information in the tab area below*/}
            <TabButton isSelected={tabContent === 'components' ? "active": null} onSelect={() => handleClick('components')}>Component</TabButton>
            <TabButton isSelected={tabContent === 'jsx' ? "active": null} onSelect={() => handleClick('jsx')} >JSX</TabButton>
            <TabButton isSelected={tabContent === 'props' ? "active": null} onSelect={() => handleClick('props')} >Prop</TabButton>
            <TabButton isSelected={tabContent === 'state' ? "active": null} onSelect={() => handleClick('state')} >State</TabButton>
          </menu>
          {
            !tabContent ?  //If tabContent is empty we print whats inside the <p> tag
              <p>Please select a topic</p> 
              :           //Else if tabContent is not empty that means we have selected a topic and we display the div below
              <div id="tab-content">
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[tabContent].code}
                  </code>
                </pre>
              </div>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
