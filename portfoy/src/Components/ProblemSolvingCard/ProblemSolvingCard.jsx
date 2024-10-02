import React from 'react';
import "./ProblemSolvingCard.css";

import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, PolarAreaController, RadialLinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, PolarAreaController, RadialLinearScale, ArcElement);

export default function ProblemSolvingCard({ name, img, totalSolving, easySolving, mediumSolving, hardSolving , profile_url}) {
    const data = {
        labels: ['Hard', 'Medium', 'Easy'],
        datasets: [{
            label: 'Problem Solving Stats',
            data: [hardSolving, mediumSolving, easySolving],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    },
                },
            },
        },
    };

    return (
        <div className="main-ps-card">
            <div className="main-ps-card-content">
                <div className="ps-logo">
                    <img src={img} alt={name} />
                    <h2>{name}</h2>
                </div>
                <div className="ps-text">
                    <div className="ps-text-chart">
                        <PolarArea data={data} options={options} />
                    </div>
                    <div className="ps-text-text">
                        <h3>Total Solved Questions : </h3>
                        <p>{totalSolving}</p>
                        <h3>Easy Solved Questions : </h3>
                        <p>{easySolving}</p>
                        <h3>Medium Solved Questions : </h3>
                        <p>{mediumSolving}</p>
                        <h3>Hard Solved Questions : </h3>
                        <p>{hardSolving}</p>
                        
                    </div>
                </div>
                <a href={profile_url} target='_blank'>{name} Profilim =></a>
            </div>
        </div>
    );
}
