import { IAlcoholDetails } from "../types/interfaces";

/**
 * function to generate an array of unique wine classes based on alcohol property
 * @param {IAlcoholDetails[]} wineData - winedata
 * @returns {Array}  array of unique alcohol properties
 */
export const getUniqueClasses = (wineData: IAlcoholDetails[]): number[] => {
  const classSet = new Set(wineData.map((obj: any) => obj.Alcohol));
  return Array.from(classSet);
};

/**
 * function to generate array of arrays of distributed alcohols/classes
 * @param wineData
 * @param classes - array of unique no. of classes
 * @returns array of array
 */
export const generateClassArrays = (wineData: IAlcoholDetails[], classes: number[]): any => {
  return classes.map((item: any) => wineData.filter((wine) => wine.Alcohol === item));
};

/**
 * function to calculate & add gamma values into wineData
 * @param wineData
 * @returns wineData with gamma property
 */
export const generateGamma = (wineData: IAlcoholDetails[]): any => {
  let Gamma;
  return wineData.map((wine: IAlcoholDetails) => {
    const { Ash, Hue, Magnesium } = wine;
    Gamma = ((Number(Ash) * Number(Hue)) / Number(Magnesium)).toFixed(3);
    return { ...wine, Gamma };
  });
};
