import React from 'react';
import {Chart} from '../../components';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const DonutPieChart = () => {
  return (
    <Chart
      styles={{
        height: 250,
        flex: 1,
        width: '100%',
      }}
      options={{
        chart: {
          type: 'pie',
          backgroundColor: colors.dark,
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
        tooltip: {
          backgroundColor: colors.dark,
          borderRadius: 10,
          borderWidth: 1,
          formatter: function () {
            return `${this.point.name}: ${this.percentage.toFixed(2)}%`;
          },
          style: {
            color: colors.light,
          },
        },
        series: [
          {
            name: 'Operation Results',
            data: [
              {
                name: 'WIN',
                y: 5,
                color: colors.success,
                borderWidth: 7,
                borderColor: colors.dark,
              },
              {
                name: 'LOSS',
                y: 5,
                color: colors.danger,
                borderWidth: 7,
                borderColor: colors.dark,
              },
              {
                name: 'TIES',
                y: 5,
                color: colors.grey50,
                borderWidth: 7,
                borderColor: colors.dark,
              },
            ],
            innerSize: '50%',
            dataLabels: {
              style: {
                color: colors.grey50,
                fontSize: typography.small,
                textOutline: false,
              },
            },
          },
        ],
      }}
    />
  );
};
