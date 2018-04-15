import React from "react";
import { Table } from "react-bootstrap";

const TableHead = ({ headContent }) => {
  return (
    <thead>
      <tr>
        {headContent.map((cell, idx) => <th key={idx}>{cell}</th>)}
      </tr>
    </thead>
  )
}

const TableBody = ({ tableContent }) => {
  return (
    <tbody>
      {tableContent.map((row, rowIdx) => {
        return (
          <tr key={rowIdx}>
            {Object.values(row).map((col, colIdx) => {
              return <td key={colIdx}>{col}</td>;
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export const TableView = ({ tableContent }) => {
  const keys = Object.keys(tableContent[0]);
  return (
    <Table striped bordered condensed hover>
      <TableHead headContent={keys} />
      <TableBody tableContent={tableContent} />
    </Table>
  );
}