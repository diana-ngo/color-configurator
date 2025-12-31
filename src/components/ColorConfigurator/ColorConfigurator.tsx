import { useEffect, useState } from 'react';
import ColorBlocks from '../ColorBlocks/ColorBlocks';
import ColorSelector from '../ColorSelector/ColorSelector';
import { Configuration } from '../../types';
import './styles.css';

interface ColorConfiguratorProps {
  configuration: Configuration;
  onThemeSelect: (colors: string[]) => void;
}

export default function ColorConfigurator({ configuration, onThemeSelect }: ColorConfiguratorProps) {
  // initialize seed color and scheme mode
  const [ colors, setColors ] = useState([]);

  useEffect(() => {
    loadConfiguration(configuration);
  }, []);

  // helper
  async function loadConfiguration(configuration: Configuration) {
    const { seedColor, schemeMode } = configuration;

    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${schemeMode}`;
    const res = await fetch(url);
    const data = await res.json();

    setColors(data.colors.map((color: any) => color.hex.value));
  }

  function handleApplyTheme() {
    onThemeSelect(colors);
  }

  return (
    <div className='color-configurator'>
      <div>
        <ColorSelector 
          handleChange = { loadConfiguration }
        />
      </div>
      <div>
        <ColorBlocks 
          hexValues = { colors }
        />
      </div>
      <button onClick={handleApplyTheme}>Apply Theme</button>
    </div>
  )
}