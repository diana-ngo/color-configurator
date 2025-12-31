import { useEffect, useState } from 'react';
import './App.css';
import ColorConfigurator from './components/ColorConfigurator/ColorConfigurator';
import { Theme } from './types';

const INITIAL_CONFIGURATION = {
  seedColor: '#000000',
  schemeMode: 'analogic',
};

const INITIAL_THEME = {
  hexValues: ['721818ff', '721818ff', '721818ff', '721818ff', '721818ff']
}

function App() {
  const [ theme, setTheme ] = useState<Theme>(INITIAL_THEME);

  function handleThemeSelection(colors: string[]) {
    setTheme({ hexValues: colors})
  }

  useEffect(() => {
    console.log('app mounted');
  }, []);

  return (
    <div className="content-wrapper">
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
        onThemeSelect = { handleThemeSelection }
      />
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
        onThemeSelect = { handleThemeSelection }
      />
      {/* <DesignSystem 
        theme = { theme }
      /> */}
    </div>
  );
}

export default App;
