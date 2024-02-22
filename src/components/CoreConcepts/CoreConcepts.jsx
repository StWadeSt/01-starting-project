import React from 'react'
import { CORE_CONCEPTS } from '../../data'
CORE_CONCEPTS
import CoreConcept from './CoreConcept'
import Section from '../Section'

const CoreConcepts = () => {
  return (
    <>
        <Section id="core-concepts" title="Core Concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => 
            <li><CoreConcept 
            key = {item.image}
            title={item.title}
            description= {item.description}
            img= {item.image}
              />
            </li>
            )}
          </ul>
        </Section>
    </>
  )
}

export default CoreConcepts