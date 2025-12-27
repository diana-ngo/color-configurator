interface ColorBlocksProps {
  hexValues: string[];
}

export default function ColorBlocks({ hexValues }: ColorBlocksProps) {
  return (
    <>
      <div id="color-blocks">
        <div className="color-block" style={{ backgroundColor: hexValues[0]}}></div>
        <div className="color-block" style={{ backgroundColor: hexValues[1]}}></div>
        <div className="color-block" style={{ backgroundColor: hexValues[2]}}></div>
        <div className="color-block" style={{ backgroundColor: hexValues[3]}}></div>
        <div className="color-block" style={{ backgroundColor: hexValues[4]}}></div>
      </div>
      <div id="hex-values">
        <p>{hexValues[0]}</p>
        <p>{hexValues[1]}</p>
        <p>{hexValues[2]}</p>
        <p>{hexValues[3]}</p>
        <p>{hexValues[4]}</p>
      </div>
    </>
  );
}