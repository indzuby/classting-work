import { Bar } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


const Charts = ({ correctCount, inCorrectCount }: { correctCount: number, inCorrectCount: number }) => {
	const data = {
		labels: ['정오답 비율'],
		datasets: [{
			label: '정답',
			data: [correctCount],
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		}, {
			label: '오답',
			data: [inCorrectCount],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}]
	}
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: false,
			},
			scales: {
				y: {
					max: 10,
					min: 0
				}
			}
		},
	};
	return <Bar data={data} options={options} />
}


export default Charts