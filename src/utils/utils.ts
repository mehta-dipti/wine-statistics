import { IAlcoholDetails } from "../types/types";

export const getUniqueClasses = (data: IAlcoholDetails[]): number[] => {
  const classSet = new Set(data.map((obj: any) => obj.Alcohol));
  return Array.from(classSet);
};

export const generateClassArrays = (wineData: IAlcoholDetails[], classes: number[]): any => {
  return classes.map((item: any) => wineData.filter((wine) => wine.Alcohol === item));
};
