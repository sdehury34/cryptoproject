import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
// import { useGetCryptosQuery } from '../services/cryptoApi';
import { func } from '../services/cryptoApi';
import {useState,useEffect} from "react"
// import image from '../images/cryptocurrency.png';


const { Title }= Typography
const Homepage = () => {
    // const { data, isFetching } = useGetCryptosQuery();
    // const globalStats = data?.data?.stats;
    console.log(func());


    const [data,setData]=useState('null');
    
    useEffect(async ()=>{
        const data=await func()
    
        setData(data)
    },[])

    // if(isFetching) return 'Loading...';
    
    return (
        <div>
        <Title level={2} className="heading" textAlign='center'>Global Crypto stats
        </Title>
        <pre>
        {/* {JSON.stringify(data,null,2)} */}
        {data?JSON.stringify(data,null,2):"no data"}
        </pre>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value= "5" /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value="5" /></Col>
            <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
        </Row>
        </div>
    )
}

export default Homepage
