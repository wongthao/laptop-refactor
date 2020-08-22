import React from 'react'
import FEATURES from './FEATURES'
import FeatureList from './FeatureList'

export default function FormSection(props) {
  const features = Object.keys(FEATURES)
    .map( key => 
      <FeatureList 
        key={key}
        features={FEATURES}
        selected={props.selected}
        featureTitle={key}
        handleUpdate={props.handleUpdate} />
    ); 
    console.log(features)

  return (
    <section className="main__form">
      <h3>Customize Your Laptop</h3>
      {features}
      
      
    </section>
  )
}
