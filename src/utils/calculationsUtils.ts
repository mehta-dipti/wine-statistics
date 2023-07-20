import { IAlcoholDetails } from "../types/interfaces";

export const calMean = (wineGroups: IAlcoholDetails[][], property: string) => {
  return wineGroups.map((wineGroup) => (wineGroup.reduce((acc: any, curr: any) => acc + Number(curr[property]), 0) / wineGroup.length).toFixed(3));
};

export const calMedian = (wineGroups: IAlcoholDetails[][], property: any) => {
  let median;
  return wineGroups.map((wineGroup) => {
    const sortedWineGroup: any = wineGroup.sort((a: any, b: any) => Number(a[property]) - Number(b[property]));
    const mid = sortedWineGroup.length / 2;
    if (sortedWineGroup.length % 2) {
      median = sortedWineGroup[Math.floor(mid)][property];
    } else {
      median = (Number(sortedWineGroup[mid][property]) + Number(sortedWineGroup[mid - 1][property])) / 2;
    }
    return median;
  });
};

export const calMode = (wineGroups: IAlcoholDetails[][], property: string) => {
  return wineGroups.map((wineGroup) => {
    let counts: any = {};
    let max = 0;
    let mode: (string | number)[] = [];
    wineGroup.forEach((wine: any) => {
      if (counts[wine[property]]) {
        counts[wine[property]]++;
      } else {
        counts[wine[property]] = 1;
      }
    });

    console.log("counts", counts);
    //     2.2:1,   3.4:5,    4.3:5
    for (let i in counts) {
      if (counts[i] > max) {
        max = counts[i];
        mode.length = 0;
        mode.push(i);
      } else if (counts[i] == max) {
        mode.push(i);
      }
    }
    console.log("mode", mode);
    return mode;
  });
};
