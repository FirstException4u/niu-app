import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
    ScriptableContext,
} from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const BarChart: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const Data: ChartData<'bar'> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Earnings",
            data: [343,350,250,354,263,243],
            backgroundColor: (context: ScriptableContext<'bar'>) => {
                return context.dataIndex === hoveredIndex ? "rgba(85, 85, 85, 0.75)" : "rgba(1,1,1,1)";
            },
            borderWidth: 1,
            hoverBackgroundColor: "rgba(85, 85, 85, 0.75)",
            borderRadius: {
                topLeft: 10,
                topRight: 10,
                bottomLeft: 100,
                bottomRight: 100
            },
            borderSkipped: false,
        }]
    };

    const options: ChartOptions<'bar'> = {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Earnings",
                padding: {
                    bottom: 30,
                    top: 10
                },
                color: "rgba(255, 255, 255, 0.75)",
                font: {
                    size: 25,
                    family: "BostonBold"
                },
                align: "center"
            },
            datalabels: {
                color: "rgba(38, 199, 112, 1)",
                display: (context) => {
                    return context.dataIndex === hoveredIndex;
                },
                anchor: "end",
                align: "top",
                offset: -2,
                backgroundColor: "rgba(85, 85, 85, 0.75)",
                borderRadius: 10,
                padding: 5,
                font: {
                    weight: "bold",
                },
                formatter: (value) => {
                    return `+${value}`;
                }
            },
            tooltip: {
                enabled: false
            }
        },
        onHover: (event, chartElement) => {
            if (chartElement.length > 0) {
                setHoveredIndex(chartElement[0].index);
            } else {
                setHoveredIndex(null);
            }
        }
    };

    return (
        <Bar data={Data} plugins={[ChartDataLabels]} options={options} />
    );
}

export default BarChart;
