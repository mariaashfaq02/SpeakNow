import React from 'react'
import './PieChart.css'
import { Doughnut } from 'react-chartjs-2'
import { Tooltip,Title,ArcElement,Legend,Chart } from 'chart.js'

Chart.register(Tooltip,Title,ArcElement,Legend);
const data ={
    datasets:[ {data:[20,80], 
                backgroundColor : ['#a772ea','#DCC7F7'],
                offset:['0','60'],
                borderWidth :['10','0'],
                borderColor :['transparent','transparent']
              }] //labels : ['Nervousness','Confidence']
    
}
const PieChart = () => {
  return (
    <div className='pie-chart'>
      <Doughnut data={data} className='doughnut'/>
    </div>
  )
}

export default PieChart
