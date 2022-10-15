import "./App.css";
import React, {useEffect, useState} from "react";
import { dummyData } from "./data/twitter_data";
import { dummyInstaData } from "./data/insta_data";
import ChartDetails from "./ChartDetails";
import NavBar from "./NavBar";
import { BsRecordCircleFill } from "react-icons/bs";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";

export default function App() {
    const [barData, setBarData] = useState([])
    const [convoData, setConvoData] = useState([])
    const [activeConvo, setActiveConvo] = useState([]);
    const [totalPositive, setTotalPositive] = useState(0);
    const [totalNegative, setTotalNegative] = useState(0);
    const [totalNeutral, setTotalNeutral] = useState(0);
    const [isActive, setIsActive] = useState("twitter");
    const getData = (sm)=>{
        console.log(sm)
        let dataArr = []
        let convoArr = []
        let stat
        if (sm === "twitter") {
            stat = dummyData.stats.twitter.timelineStats.timeline
        }
        else if (sm === "instagram"){
            stat = dummyInstaData.stats.instagram.timelineStats.timeline
        }
        let convo
        Object.values(stat).map((item, index)=>
        {
            if (sm === "twitter") {
                convo = item?.allTweets
            }
            else if (sm === "instagram"){
                convo = item?.comments
            }

            Object.values(convo).map((x) =>{
                let z = {
                    index: index,
                    date: x?.date.substring(0,10),
                    time: x?.date.substring(11,19),
                    dateWords: x?.created || null,
                    comment: x?.tweet || x.text,
                    sentimentPolarityLabel: x?.sentimentPolarityLabel,
                    positive: item?.sentimentAsCategories?.positiveTweets || item?.sentimentAsCategories?.positiveComments,
                    negative: item?.sentimentAsCategories?.negativeTweets || item?.sentimentAsCategories?.negativeComments,
                    neutral: item?.sentimentAsCategories?.neutralTweets || item?.sentimentAsCategories?.neutralComments
                }
                convoArr.push(z)
                return convoArr
            })
            let y = {
                index: index,
                date: item?.currentTimeStamp.substring(0,10),
                meanSentiment: item?.meanSentiment,
                positive: item?.sentimentAsCategories?.positiveTweets || item?.sentimentAsCategories?.positiveComments,
                negative: item?.sentimentAsCategories?.negativeTweets || item?.sentimentAsCategories?.negativeComments,
                neutral: item?.sentimentAsCategories?.neutralTweets || item?.sentimentAsCategories?.neutralComments
            }

            dataArr.push(y)
            
            return dataArr
        })
        setBarData(dataArr)
        setConvoData(convoArr)
        
    }
    useEffect(()=>{
        getData("twitter")
        setIsActive("twitter")
    }, [])
   
    const handleActive = (x)=>{
        setConvoData([])
        setIsActive(x)
        getData(x)
        
    }

    const handleClick =(entry)=>{
        let d
        if(entry.payload.z !== undefined){
            d = convoData.filter(item => item?.index === (entry?.payload?.z)) 
        }
        else{
            d = convoData.filter(item => item?.index === (entry?.index))
        }
         
        setActiveConvo(d)
        setTotalPositive(d[0]?.positive)
        setTotalNegative(d[0]?.negative)
        setTotalNeutral(d[0]?.neutral)
    }
    const renderColorfulLegendText = (value, entry) => {
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

    <>
    <NavBar isActive={isActive} setIsActive={handleActive}/>
    <div className="container">
        <BarChartComponent 
            barData={barData}
            dataKey="date"
            formatter={renderColorfulLegendText}
            handleClick={handleClick}
        />
        <LineChartComponent 
            lineData={barData} 
            handleClick={handleClick}
        />

        <div className="chart-container">
          <ChartDetails 
            totalPositive={totalPositive} 
            totalNegative={totalNegative} 
            totalNeutral={totalNeutral} 
            activeConvo={activeConvo}
          />
        </div>
        
    </div>
    </>
  );
}
