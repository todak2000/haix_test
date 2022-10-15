import "./App.css";
import React, {useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { dummyData } from "./data/data";
import ChartDetails from "./ChartDetails";
import { GiClick } from 'react-icons/gi';
import { BsRecordCircleFill } from "react-icons/bs";


export default function BarChartScreen() {
    const [barData, setBarData] = useState([])
    const [convoData, setConvoData] = useState([])
    const [activeConvo, setActiveConvo] = useState([]);
    const [totalPositive, setTotalPositive] = useState(0);
    const [totalNegative, setTotalNegative] = useState(0);
    const [totalNeutral, setTotalNeutral] = useState(0);
    const getData = ()=>{
        let dataArr = []
        let convoArr = []
        let stat = dummyData.stats.twitter.timelineStats.timeline
        
        Object.values(stat).map((item, index)=>
        {
            let convo = item.allTweets
            Object.values(convo).map((x) =>{
                let z = {
                    index: index,
                    date: x.date.substring(0,10),
                    time: x.date.substring(11,19),
                    dateWords: x.created,
                    comment: x.tweet,
                    sentimentPolarityLabel: x.sentimentPolarityLabel,
                    positive: item.sentimentAsCategories.positiveTweets,
                    negative: item.sentimentAsCategories.negativeTweets,
                    neutral: item.sentimentAsCategories.neutralTweets
                }
                convoArr.push(z)
                return convoArr
            })
            let y = {
                index: index,
                date: item.currentTimeStamp.substring(0,10),
                positive: item.sentimentAsCategories.positiveTweets,
                negative: item.sentimentAsCategories.negativeTweets,
                neutral: item.sentimentAsCategories.neutralTweets
            }

            dataArr.push(y)
            
            return dataArr
        })
        setBarData(dataArr)
        setConvoData(convoArr)
        
    }
    useEffect(()=>{
        getData()
    }, [])
   

    const handleClick =(entry)=>{
        let d = convoData.filter(item => item.index === entry.index)
        setActiveConvo(d)
        setTotalPositive(d[0].positive)
        setTotalNegative(d[0].negative)
        setTotalNeutral(d[0].neutral)
    }
    const renderColorfulLegendText = (value, entry) => {
        console.log(entry)
        let color;
        const { dataKey } = entry;
        if (dataKey === "neutral"){
            color = "#8884d8"
        }
        else if (dataKey === "negative"){
            color = "#82ca9d"
        }
        else{
            color = "#ffc658"
        }
      
        return <span style={{ color }}> <BsRecordCircleFill style={{fontSize:9}}/>  {value}</span>;
      };

  return (
    <div className="container">
        <BarChart
            width={600}
            height={400}
            barGap={0}
            barSize={70}
            data={barData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend formatter={renderColorfulLegendText} iconSize={0}/>
            <Bar dataKey="positive" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#ffc658" 
                key={`cell-${index}`}
                />
            ))}
            </Bar>
            <Bar dataKey="negative" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#82ca9d"
                key={`cell-${index}`}
                />
            ))}
            </Bar>
            <Bar dataKey="neutral" onClick={handleClick}>
            {barData.map((entry, index) => (
                <Cell
                cursor="pointer"
                fill="#8884d8"
                key={`cell-${index}`}
                />
            ))}
            </Bar>
        </BarChart>

        <div className="chart-container">
          <div className="chart-container-inner">
            
            {activeConvo.length > 0 ? 
            <>
                <section className='top-label'>
                    <p>Comments</p>
                    <div className='flex-row'>
                        <p>Positive: {totalPositive}</p>
                        <p>Negative: {totalNegative}</p>
                        <p>Neutral: {totalNeutral}</p>
                    </div>
                </section>
                <section className="table-section">
                    <table className='table'>
                        <thead>
                        <tr>
                            <th className='comment-th'>Comment</th>
                            <th>Date & Time</th>
                            <th>Sentiment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {activeConvo.map((item, index)=>{
                            return <ChartDetails key={index} comment={item.comment} sentimentPolarityLabel={item.sentimentPolarityLabel} dateWords={item.dateWords} time={item.time} date={item.comment} /> 
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
        </div>
        
    </div>
  );
}
