import React from "react";
import { IStatisticsTableProps } from "../types/interfaces";
import { calMean, calMedian, calMode } from "../utils/calculationsUtils";

export const StatisticsTable = (props: IStatisticsTableProps) => {
  const { uniqueClasses, distributedWineClasses, property } = props;

  return (
    <div>
      <table width="600">
        <thead>
          <tr>
            <th>Measure</th>
            {uniqueClasses.map((classes) => (
              <>
                <th>Class {`${classes}`}</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {property}
              <br /> Mean
            </th>
            {calMean(distributedWineClasses, property).map((res) => (
              <>
                <td>{`${res}`}</td>
              </>
            ))}
          </tr>
          <tr>
            <th>
              {property}
              <br /> Median
            </th>
            {calMedian(distributedWineClasses, property).map((res) => (
              <>
                <td>{`${res}`}</td>
              </>
            ))}
          </tr>
          <tr>
            <th>
              {property} <br />
              Mode
            </th>
            {calMode(distributedWineClasses, property).map((res) => (
              <>
                <td>{res.join(", ")}</td>
              </>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
