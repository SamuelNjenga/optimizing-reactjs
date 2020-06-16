import React, { Component } from 'react';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

class componentName extends Component {

  render() {
    return (
      <div>
      <ErrorBoundary>
        <Hero heroName="Batman"/>
        <Hero heroName="Superman"/>
        <Hero heroName="Joker"/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default componentName;
