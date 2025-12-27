import { useEffect, useState } from 'react';
import ColorBlocks from '../ColorBlocks/ColorBlocks';
import ColorSelector from '../ColorSelector/ColorSelector';
import { Configuration } from '../../App';
import './styles.css';

interface ColorConfiguratorProps {
  configuration: Configuration
}

export default function ColorConfigurator({ configuration }: ColorConfiguratorProps) {
  // initialize seed color and scheme mode
  const [ colors, setColors ] = useState([]);

  useEffect(() => {
    console.log('ColorConfigurator mounted');
    loadConfiguration(configuration);
  }, []);

  // helper
  async function loadConfiguration(configuration: Configuration) {
    const { seedColor, schemeMode } = configuration;

    const url = `https://www.thecolorapi.com/scheme?hex=${seedColor.slice(1)}&mode=${schemeMode}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('color fetched', data);
    setColors(data.colors.map((color: any) => color.hex.value));
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
    </div>
  )
}