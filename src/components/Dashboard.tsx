import { useEffect, useState } from "react";
import wineData from "../data/wineData.json";
import { getUniqueClasses, generateClassArrays, generateGamma } from "../utils/utils";
import { IAlcoholDetails } from "../types/interfaces";
import { StatisticsTable } from "./StatisticsTable";

export const Dashboard = () => {
  const [uniqueClasses, setUniqueClasses] = useState<number[]>([]);
  const [wineDataWithGamma, setWineDataWithGamma] = useState<IAlcoholDetails[]>([]);
  const [distributedWineClasses, setDistributedWineClasses] = useState<IAlcoholDetails[][]>([]);

  useEffect(() => {
    const dataWithGama = generateGamma(wineData);
    setWineDataWithGamma(dataWithGama);
    setUniqueClasses(getUniqueClasses(dataWithGama));
  }, []);

  useEffect(() => {
    setDistributedWineClasses(generateClassArrays(wineDataWithGamma, uniqueClasses));
  }, [uniqueClasses, wineDataWithGamma]);

  return (
    <>
      <StatisticsTable uniqueClasses={uniqueClasses} distributedWineClasses={distributedWineClasses} property="Flavanoids" />
      <StatisticsTable uniqueClasses={uniqueClasses} distributedWineClasses={distributedWineClasses} property="Gamma" />
    </>
  );
};
