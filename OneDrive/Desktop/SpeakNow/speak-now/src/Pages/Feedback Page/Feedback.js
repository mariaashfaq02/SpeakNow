import React from 'react'
import PieChart from '../../Components/PieChart/PieChart'
import FeedbackHalfConfident from '../../Components/Read More/FeedbackHalfConfident'
import Button from '../../Components/Button/Button'
import Card from '../../Components/Card/Card'
import ReadMoreConfident from '../../Components/Read More/ReadMoreConfident'
import { renderToStaticMarkup } from 'react-dom/server'
import './Feedback.css'


const Feedback = () => {
  const downloadReport = () => {
    try {
      const myOtherComponentHtml = renderToStaticMarkup(<ReadMoreConfident />);
      
      const blob = new Blob([myOtherComponentHtml], { type: 'text/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'downloaded_page.html';
      link.click();
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };
  return (
    <div>
      <h1 className='display-1 featuresPageHeading'>Great...Your Detailed Report is Here</h1>
      <div className="container-fluid feedbackContainer ">

      <div className="container-fluid textFeedack">

        <div className="container-fluid cardContainerFeedback">
        <div className="container-fluid"><Card body={"CONFIDENCE"} percent={"80"}/></div>
        <div className="container-fluid"><Card body={"NERVOUSNESS"} percent={"20"}/></div>
        </div>
        <div className="container-fluid reportFeedback"> <FeedbackHalfConfident/></div>
        <div className="container-fluid buttonReport"><Button message={"Download Report"} onClick={downloadReport}/></div>
        
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
