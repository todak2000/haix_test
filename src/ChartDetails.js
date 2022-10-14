import './App.css';

function ChartDetails(props) {
  return (
    <div className="chart-container-inner">
      <section className='top-label'>
        <p>Comments</p>
        <div className='flex-row'>
          <p>Positive: 4</p>
          <p>Negative: 4</p>
          <p>Neutral: 4</p>
        </div>
      </section>
      <table className='table'>
        <tr>
          <th className='comment-th'>Comment</th>
          {/* <th></th> */}
          <th>Date & Time</th>
          <th>Sentiment</th>
        </tr>
        <tr>
          <td>We are over the moon that our Corporate Partnership with @HSBC_UK has been shortlisted for 2 awards by the @Corp_Engagement this year. We're shortlisted in the category of Best charity, NGO or NFP programme and the best educational programme.\n\nA huge thank you to our partners! https://t.co/1xO14ciLqL</td>
          <td>06-Sep-2022</td>
          <td>Sentiment</td>
        </tr>
      </table>
    </div>
  );
}

export default ChartDetails;
