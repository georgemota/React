import React from 'react';
import '../../styles/Table.css';
import StringEvaluator from './VariantionValue';

const TableAccionario = ({ data }) => {

  // Asegúrate de que `data` no esté vacío antes de acceder al último elemento
  const lastItem = data.length > 0 ? data[data.length - 1] : null;

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Índices</th>
          <th>Valor</th>
          <th>Variación %</th>
        </tr>
      </thead>
      <tbody>
        {lastItem && (
          <tr>
            <td className='table-cell-left' onClick={() => window.open('https://arm.bvrd.com.do/herramientas/analisisindices/', '_blanck')}>{lastItem.Nombre}</td>
            <td>{lastItem.Valor}</td>
            <td>
              <StringEvaluator inputString={lastItem['Variación porcentual']} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};


export default TableAccionario;
