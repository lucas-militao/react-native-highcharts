import React from 'react';
import {Chart} from '../../components';
import colors from '../../styles/colors';

export const AreaChart = (props) => {
  return (
    <Chart
      styles={{
        height: 250,
        flex: 1,
        width: '100%',
      }}
      options={{
        chart: {
          type: 'areaspline',
          backgroundColor: colors.dark50,
          spacing: [0, 0, 0, 0],
          marin: [0, 0, 0, 0],
        },
        credits: {
          enabled: false,
        },
        title: {
          text: '',
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          areaspline: {
            lineWidth: 5,
            lineColor: colors.success,
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, `${colors.success}80`],
                [1, `${colors.grey50}00`],
              ],
            },
          },
        },
        yAxis: {
          visible: false,
          padding: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        xAxis: {
          visible: false,
          padding: [0, 0, 0, 0],
          margin: [0, 0, 0, 0],
        },
        tooltip: {
          backgroundColor: colors.dark,
          borderColor: colors.success,
          borderRadius: 10,
          borderWidth: 1,
          formatter: function () {
            return `$ ${this.y}`;
          },
          style: {
            color: colors.light,
          },
        },
        series: [
          {
            name: 'PROGRESS',
            data: [55, 66, 90, 70, 110, 235, 198],
            color: colors.success,
          },
        ],
      }}
    />
  );
};
