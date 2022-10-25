import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    getCampaignList
} from "../../../Actions/campaignAction";
import EachCampaign from '../EachCampaign';
const Campaign = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const {
        user: { accessToken },
    } = useSelector((state) => state.user);
    const { campaignList, error, success, loading } = useSelector(
        (state) => state.campaign
    );
    useEffect(() => {
        dispatch(getCampaignList());

    }, []);

    return (
        <div className="container">
            <div className="text-center">
                <h3>CAMPAIGN</h3>
                <p>Mid Text. Lorem Ipsum Text.Lorem Ipsum Text.Lorem Ipsum Text.
                    Lorem Ipsum Text.Lorem Ipsum Text.</p>
            </div>
            <Row className="py-3 my-2">

                {campaignList?.filter((item)=>item.is_verified == 1).slice(0, 4).map((campaignList) => (
                    <Col md="3" sm="6" className="my-2">
                        <EachCampaign key={campaignList.id} campaignList={campaignList}></EachCampaign>
                    </Col>
                ))}
            </Row >
        </div >
    );
};

export default Campaign;