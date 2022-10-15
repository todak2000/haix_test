import './App.css';
import { SlEmotsmile } from "react-icons/sl";
import { BsEmojiAngry } from "react-icons/bs";

function ChartDetails(props) {
  const { comment, 
    sentimentPolarityLabel, dateWords,
    time
  } = props
  return (
        <tr>
          <td >{comment}</td>
          <td>{dateWords} {time}</td>
          <td className='icon-td'>
          {sentimentPolarityLabel === "POSITIVE" && <SlEmotsmile className='icon-positive'/>}
          {sentimentPolarityLabel === "NEGATIVE" && <BsEmojiAngry className='icon-negative'/>}
          {sentimentPolarityLabel === "NEUTRAL" && <SlEmotsmile className='icon-neutral'/>}
          </td>
        </tr>
  );
}

export default ChartDetails;
