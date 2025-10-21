import React from 'react';
import '../../styles/Table.css';
import StringEvaluator from './VariantionValue';

const Table = ({ data }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Índices</th>
        <th>Valor</th>
        <th>Variación %</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="table-cell-left" onClick={() => window.open('https://arm.bvrd.com.do/herramientas/analisisindices/', '_blanck')}>{item.Nombre}</td>
          <td>{ item['Valor actual']}</td>
          <td><StringEvaluator inputString={ item['Variación porcentual']}/></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
