import { ReactNode } from "react";
import './styles.css';

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

type DesignSystemProps = {
  theme: { hexValues: string[] };
};

export default function DesignSystem({ theme }: DesignSystemProps) {
  const primary = theme.hexValues[0];
  const secondary = theme.hexValues[1];
  const tertiary = theme.hexValues[2];
  const quaternary = theme.hexValues[3];

  return (
    <div className="design-system">
      <div className="ds-header">
        <h1>Design System</h1>
      </div>

      {/* COMPONENTS */}
      <section className="ds-section">
        <h2>Components</h2>
        <div className="ds-components">
          <Button style={{ backgroundColor: primary, borderColor: primary }}
          >
            Primary Button
          </Button>

          <Button style={{ backgroundColor: secondary, borderColor: secondary }}
          >
            Secondary Button
          </Button>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="ds-section">
        <h2>Typography</h2>
        <div className="ds-type">
          <Text size="h1" text="Header (H1)" style={{ color: tertiary }} />
          <Text size="subheader" text="Subheader — a short supporting line under a title." style={{ color: quaternary }} />
          <Text size="body" text="Body text — use this for normal paragraph content in your UI." style={{ color: quaternary }} />
        </div>
      </section>
    </div>
  );
}