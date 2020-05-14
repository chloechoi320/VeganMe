import React, {useState, useEffect} from "react";
import "./result.css";
import Link from 'next/link';
import Router from 'next/router';

import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import NavigationBar from "../../comps/NavigationBar";
import { data } from "../../data";

const ResultPage = () => {
    return <div>
    <div className="r-pg">
        <BackHeader />
        <div className="r-container">
            <div className="r-head">
                <Header text={data.clickedLocation} fontSize={14}/>
            </div>
            <div className="r-img"></div>
            <div className="adr">
                <div className="adr-head">Address</div>
                <div>1234 Street, City, BC V1A 2B3</div>
            </div>
            <div className="desc">
                <p>Description of the place goes here.</p>
                <p>For more info, visit <a href="/">(website)</a>.</p>
            </div>
        </div>
        </div>
            <NavigationBar />
    </div>
}

export default ResultPage;