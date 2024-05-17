import React, { FC } from "react";

type TableArray<T> = T[];

type TableProps = { items: TableArray<any> };

export const Table: FC<TableProps> = ({ items }) => {
  return (
    <table className="table-auto w-full">
      <tbody>
        {items.map((cell, i) => (
          <tr key={i}>
            {Object.keys(cell).map((key, j) => (
              <td key={j}>{cell[key as keyof typeof cell]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
