import React from 'react'
import TabButton from '../TabButton/TabButton'
import { EXAMPLES } from '../../data'
import { useState } from 'react'
import Section from '../Section'
import Tabs from '../Tabs'

const Examples = () => {

    const [tabContent, setTabContent] = useState()

    function handleClick(selectedButton){
        setTabContent(selectedButton)
        console.log(selectedButton);
      }
    
    
    let content = <p>Please select a topic</p> 

    if (tabContent) {
        content =   <div id="tab-content">
                        <h3>{EXAMPLES[tabContent].title}</h3>
                        <p>{EXAMPLES[tabContent].description}</p>
                        <pre>
                            <code>
                            {EXAMPLES[tabContent].code}
                            </code>
                        </pre>
                    </div>
      }

    let myButtons = <>
                        <TabButton isSelected={tabContent === 'components'} onSelect={() => handleClick('components')}>Component</TabButton>
                        <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleClick('jsx')} >JSX</TabButton>
                        <TabButton isSelected={tabContent === 'props'} onSelect={() => handleClick('props')} >Prop</TabButton>
                        <TabButton isSelected={tabContent === 'state'} onSelect={() => handleClick('state')} >State</TabButton>
                    </>

  return (
        <> 
            <Section id= "examples" title="Examples">
                <Tabs buttons={myButtons} buttonsContainer="menu">
                    {content}
                </Tabs>
            </Section>
        </>
  )
}

export default Examples




















