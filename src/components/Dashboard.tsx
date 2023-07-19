import { useEffect, useState } from "react";
import { WineTable } from "./WineTable";
import wineData from "../data/wineData.json";
import { getUniqueClasses, generateClassArrays } from "../utils/utils";
import { IAlcoholDetails } from "../types/types";
import { calMean, calMedian } from "../utils/calculationsUtils";

export const Dashboard = () => {
  const [uniqueClasses, setUniqueClasses] = useState<number[]>([]);
  const [wineGroup, setWineGroup] = useState<IAlcoholDetails[][]>([]);

  useEffect(() => {
    setUniqueClasses(getUniqueClasses(wineData));
  }, []);

  useEffect(() => {
    const wines = generateClassArrays(wineData, uniqueClasses);
    setWineGroup(wines);
    console.log("mean", calMean(wines));
    console.log("median", calMedian(wines));

    console.log(generateClassArrays(wineData, uniqueClasses));
  }, [uniqueClasses, wineData]);

  return (
    <>
      <WineTable uniqueClasses={uniqueClasses} wineData={wineData} />
    </>
  );
};
