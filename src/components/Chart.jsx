import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Box, Card } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
        {
            label: 'Exportações (milhões USD)',
            data: [1500, 2000, 1800, 2200, 2500, 2700, 2900, 3100],
            backgroundColor: 'rgba(75, 192, 97, 0.6)',
            borderColor: 'rgb(75, 192, 118)',
            borderWidth: 1
        },
        {
            label: 'Importações (milhões USD)',
            data: [1300, 1600, 1700, 2000, 2400, 2600, 2800, 3000],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
}

const options = {
    responsive: false,
    plugins: {
        title: {
            display: true,
            text: 'Exportações e Importações',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        }
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        }
    }
}

const Chart = () => {
    return (
        <Card.Root minW={'min-content'}>
            <Card.Body>
                <Bar w={'100%'} data={data} options={options} />
            </Card.Body>
        </Card.Root>
    )
}

export default Chart