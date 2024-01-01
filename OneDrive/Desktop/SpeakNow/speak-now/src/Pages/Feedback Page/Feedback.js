import React from 'react'
import PieChart from '../../Components/PieChart/PieChart'
import FeedbackHalf from '../../Components/Read More/FeedbackHalf'
import Button from '../../Components/Button/Button'
import Card from '../../Components/Card/Card'
import './Feedback.css'

const Feedback = () => {
  return (
    <div>
      <h1 className='display-1 featuresPageHeading'>Great...Your Detailed Report is Here</h1>
      <div className="container-fluid feedbackContainer ">

      <div className="container-fluid textFeedack">

        <div className="container-fluid cardContainerFeedback">
        <div className="container-fluid"><Card body={"CONFIDENCE"} percent={"80"}/></div>
        <div className="container-fluid"><Card body={"NERVOUSNESS"} percent={"20"}/></div>
        </div>
        <div className="container-fluid reportFeedback"> <FeedbackHalf/></div>
        <div className="container-fluid buttonReport"><Button message={"Download Report"}/></div>
        
      </div>
      
      <div className="container-fluid graphFeedback">
        <PieChart/>
        <div className='container-fluid graphPercent1'>20%</div>
        <div className='container-fluid graphPercent2'>80%</div>
      </div>
      </div>
    </div>
  )
}

export default Feedback
