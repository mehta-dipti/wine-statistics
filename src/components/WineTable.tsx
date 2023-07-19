import React from "react";
import { IAlcoholDetails } from "../types/types";

interface IWineTableProps {
  uniqueClasses: number[];
  wineData: IAlcoholDetails[];
}

export const WineTable = (props: IWineTableProps) => {
  const { uniqueClasses } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              Flavanoids
              <br /> Mean
            </th>
            <td>2</td>
            <td>Madhya Pradesh</td>
            <td>Bhopal</td>
          </tr>
          <tr>
            <th>
              Flavanoids
              <br /> Median
            </th>
            <td>2</td>
            <td>Madhya Pradesh</td>
            <td>Bhopal</td>
          </tr>
          <tr>
            <th>
              Flavanoids <br />
              Mode
            </th>
            <td>3</td>
            <td>Karnataka</td>
            <td>Bengaluru</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
