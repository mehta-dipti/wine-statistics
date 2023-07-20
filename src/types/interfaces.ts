export interface IAlcoholDetails {
  Alcohol: number | string;
  Ash: number | string;
  Magnesium: number | string;
  Flavanoids: number | string;
  Proanthocyanins: string | number;
  Hue: number | string;
  Unknown: number | string;
  Gamma?: number;
  "Malic Acid": number | string;
  "Alcalinity of ash": number | string;
  "Total phenols": number | string;
  "Nonflavanoid phenols": number | string;
  "Color intensity": number | string;
  "OD280/OD315 of diluted wines": string | number;
}

export interface IStatisticsTableProps {
  uniqueClasses: number[];
  property: string;
  distributedWineClasses: IAlcoholDetails[][];
}
