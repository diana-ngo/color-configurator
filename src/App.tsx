import { useEffect, useState, createContext } from 'react';
import './App.css';
import ColorConfigurator from './components/ColorConfigurator/ColorConfigurator';
import DesignSystem from './components/DesignSystem/DesignSystem';
import { create } from 'zustand';
import { Theme } from './types';

const INITIAL_CONFIGURATION = {
  seedColor: '#000000',
  schemeMode: 'analogic',
};

const INITIAL_THEME = {
  hexValues: ['#721818', '#721818', '#721818', '#721818', '#721818'],
  primary: '#721818',
  secondary: '#721818'
}

type Store = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<Store>((set) => ({
  theme: INITIAL_THEME,
  setTheme: (theme) => set(() => {
    return { theme }
  }),
}))

// type ThemeContextType = {
//   theme: Theme;
//   setTheme: React.Dispatch<React.SetStateAction<Theme>>;
// };

// export const ThemeContext = createContext<ThemeContextType>({ theme: INITIAL_THEME, setTheme: () => {} });


// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [ theme, setTheme ] = useState<Theme>(INITIAL_THEME);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

function App() {
  return (
    <div className="content-wrapper">
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
      />
      <ColorConfigurator 
        configuration={INITIAL_CONFIGURATION}
      />
      <DesignSystem />
    </div>
  );
}

export default App;
