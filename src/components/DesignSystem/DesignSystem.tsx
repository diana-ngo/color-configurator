import { ReactNode, useContext } from "react";
import './styles.css';
import ColorBlocks from "../ColorBlocks/ColorBlocks";
import { useStore } from "../../App";

type TextSize = 'h1' | 'h2' | 'h3' | 'subheader' | 'body' ;

type TextProps = {
  size: TextSize;
  text: string;
  style: any;
};

function Text({ size, text, style }: TextProps) {
  switch (size) {
    case 'h1':
      return <h1 style={style}>{text}</h1>;
    case 'h2':
      return <h2 style={style}>{text}</h2>;
    case 'h3':
      return <h3 style={style}>{text}</h3>;
    case 'subheader':
      return <p style={style}>{text}</p>;
    case 'body':
    default:
      return <p style={style}>{text}</p>;
  }
}

type ButtonProps = {
  children: ReactNode;
  style: any;
};

function Button({ children, style}: ButtonProps) {
  return (
    <button className='ds-button' style={style}>
      {children}
    </button>
  );
}

function ButtonContainer() {
  const theme = useStore((state) => state.theme);

  return (
    <>
      <Button style={{ backgroundColor: theme.primary, borderColor: theme.primary }}
      >
        Primary Button
      </Button>

      <Button style={{ backgroundColor: theme.secondary, borderColor: theme.secondary }}
      >
        Secondary Button
      </Button>
    </>
  );
}

// function Accordion() {
//   const { theme } = useContext(ThemeContext);

//   const primary = theme.hexValues[0];
//   const secondary = theme.hexValues[1];
// }

function Components() {
  return (
    <section className="ds-section">
      <h2>Components</h2>
      <div className="ds-components">
        <ButtonContainer />
        {/* <Accordion /> */}
        {/* <Inputs /> */}
      </div>
    </section>
  )
}

type TypographyProps = {
  theme: { hexValues: string[] };
}

// function Typography({ theme }: TypographyProps) {
//   const tertiary = theme.hexValues[2];
//   const quaternary = theme.hexValues[3];

//   return (
//     <section className="ds-section">
//       <h2>Typography</h2>
//       <div className="ds-type">
//         <Text size="h1" text="Header (H1)" style={{ color: tertiary }} />
//         <Text size="subheader" text="Subheader — a short supporting line under a title." style={{ color: quaternary }} />
//         <Text size="body" text="Body text — use this for normal paragraph content in your UI." style={{ color: quaternary }} />
//       </div>
//     </section>
//   )
// }

type StylesProps = {
  theme: { hexValues: string[] };
}

function Styles({ theme }: StylesProps) {
  return (
    <ColorBlocks hexValues={theme.hexValues}/>
  )
}

export default function DesignSystem() {
  return (
    <div className="design-system">
      <div className="ds-header">
        <h1>Design System</h1>
      </div>

      <Components />
      {/* <Typography theme={theme} /> */}
      {/* <Styles theme={theme} /> */}
    </div>
  );
}