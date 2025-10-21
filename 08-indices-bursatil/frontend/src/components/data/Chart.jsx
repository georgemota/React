import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import '../../styles/Chart.css';

const Chart = ({ data }) => {

  // Función personalizada para el Tooltip
  const renderTooltip = ({ payload, coordinate }) => {
    if (!payload || payload.length === 0) return null;

    const { Valor, Fecha } = payload[0].payload;

    return (
      <div className="custom-tooltip" style={{
        position: 'absolute',
        left: coordinate ? coordinate.x : 0,
        top: coordinate ? coordinate.y : 0,
      }}>
        <p><strong>Fecha:</strong> {Fecha}</p>
        <p><strong>Valor Índice:</strong> {Valor}</p>
      </div>
    );
  };

  return (
    <div className="chart-container">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 30
          }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="59%" stopColor="rgba(51, 255, 145, 0.3)" />
              <stop offset="100%" stopColor="rgba(51, 255, 145, 0)" />
            </linearGradient>
          </defs>

          <Tooltip content={renderTooltip} />
          <Area
            dataKey="Valor"
            stroke="#1F9957"
            strokeWidth={3}
            fill="url(#colorGradient)"
            padding="0px 50px 10px"
            cursor="pointer"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
