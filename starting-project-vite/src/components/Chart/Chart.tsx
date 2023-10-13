import './Chart.css';
import ChartBar from './ChartBar';

interface ChartProps {
    dataPoints: {value: number, label: string}[]
}

const Chart = ({dataPoints}: ChartProps) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {dataPoints.map(({value, label}) => 
                <ChartBar 
                    key={label}
                    value={value} 
                    maxValue={totalMax} 
                    label={label}
                    />
            )}
        </div>
    );
}

export default Chart;