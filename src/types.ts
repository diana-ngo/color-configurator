export interface Configuration {
  seedColor: string,
  schemeMode: string
}

type HexValue = string;

export interface Theme {
  hexValues: HexValue[],
  primary: HexValue,
  secondary: HexValue,
  // tertiary?: HexValue,
  // quadternary?: HexValue
}