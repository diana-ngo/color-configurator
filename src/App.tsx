import { useEffect, useState } from 'react';
import './App.css';
import ColorConfigurator from './components/ColorConfigurator/ColorConfigurator';

const INITIAL_CONFIGURATION = {
  seedColor: '#000000',
  schemeMode: 'analogic',
};

export interface Configuration {
  seedColor: string,
  schemeMode: string
}

function App() {
  useEffect(() => {
    console.log('app mounted');
  }, []);

  return (
    <div className="content-wrapper">
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
      />
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
      />
    </div>
  );
}

export default App;
