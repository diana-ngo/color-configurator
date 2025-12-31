import { useEffect, useState } from 'react';
import { Configuration  } from '../../types';

interface ColorSelectorProps {
  handleChange: (configuration: Configuration) => Promise<void>;
}

export default function ColorSelector({ handleChange }: ColorSelectorProps) {
  const [ seedColor, setSeedColor ] = useState('#000000');
  const [ schemeMode, setSchemeMode ] = useState('analogic');

  useEffect(() => {
    console.log('ColorSelector mounted');
  }, []);

  return (
    <div id="select-color">
      <input 
        type="color" 
        id="seed-color" 
        value={seedColor}        
        onChange={(e) => { 
          setSeedColor(e.target.value)
          handleChange({seedColor, schemeMode});
        }}
      />
      <select
        value={schemeMode}
        onChange={(e) => { 
          setSchemeMode(e.target.value) 
          handleChange({seedColor, schemeMode});
        }}
      >
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome Dark</option>
        <option value="monochrome-light">Monochrome Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
    </div>
  );
}