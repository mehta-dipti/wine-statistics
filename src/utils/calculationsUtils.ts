import { IAlcoholDetails } from "../types/types";

export const calMean = (wineGroups: IAlcoholDetails[][]) => {
  return wineGroups.map((wineGroup) => (wineGroup.reduce((acc: any, curr: any) => acc + Number(curr.Flavanoids), 0) / wineGroup.length).toFixed(3));
};

export const calMedian = (wineGroups: IAlcoholDetails[][]) => {
  let median;
  return wineGroups.map((wineGroup) => {
    const sortedWineGroup = wineGroup.sort((a, b) => Number(a.Flavanoids) - Number(b.Flavanoids));
    const mid = sortedWineGroup.length / 2;
    if (sortedWineGroup.length % 2) {
      median = sortedWineGroup[Math.floor(mid)].Flavanoids;
    } else {
      median = (Number(sortedWineGroup[mid].Flavanoids) + Number(sortedWineGroup[mid - 1].Flavanoids)) / 2;
    }
    return median;
  });
};

export const calMode = (wineGroups: IAlcoholDetails[][]) => {};
