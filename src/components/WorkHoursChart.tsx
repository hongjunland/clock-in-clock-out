import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

interface Props {
  workHours: number[];
}

function WorkHoursChart({ workHours }: Props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Workhours",
        data: workHours.map((el: number)=> el/60),
        backgroundColor: "rgba(99, 156, 255, 0.5)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return <Bar data={data} options={options}/>;
}

export default WorkHoursChart;