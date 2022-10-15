import './App.css';
import { SlEmotsmile } from "react-icons/sl";
import { BsEmojiAngry } from "react-icons/bs";
import { GiClick } from 'react-icons/gi';

function ChartDetails(props) {
  const {totalPositive,totalNegative, totalNeutral, activeConvo} = props
  return (
    <div className="chart-container-inner">
            {activeConvo.length > 0 ? 
            <>
                <section className='top-label'>
                    <p className='top-p'>Comments</p>
                    <div className='flex-row'>
                        <p className='top-p'>Positive: {totalPositive}</p>
                        <p className='top-p'>Negative: {totalNegative}</p>
                        <p className='top-p'>Neutral: {totalNeutral}</p>
                    </div>
                </section>
                <section className="table-section">
                    <table className='table'>
                        <thead>
                        <tr>
                            <th>Comment</th>
                            <th>Date & Time</th>
                            <th>Sentiment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {activeConvo.map((item, index)=>{
                            const {comment, dateWords, time, sentimentPolarityLabel, date} = item;
                            return (
                              <tr key={index}>
                                <td >{comment}</td>
                                <td>{dateWords !== null && dateWords} {date} {time}</td>
                                <td className='icon-td'>
                                {sentimentPolarityLabel === "POSITIVE" && <SlEmotsmile className='icon-positive'/>}
                                {sentimentPolarityLabel === "NEGATIVE" && <BsEmojiAngry className='icon-negative'/>}
                                {sentimentPolarityLabel === "NEUTRAL" && <SlEmotsmile className='icon-neutral'/>}
                                </td>
                              </tr>
                            )
                        })}
                    </tbody>
                    </table>
                </section>
            </>
            :
            <div className="container">
                <GiClick className="icon"/>
                <p>Click on the tabs in the chart to see details/comments</p>
            </div>
            }
          </div>
        
  );
}

export default ChartDetails;
