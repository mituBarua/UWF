import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getAppealList } from "../../../../Actions/appealAction";
import Appeal from '../Appeal';
const Appeals = () => {
    const dispatch = useDispatch();
    const { appealList } = useSelector((state) => state.appeal);

    useEffect(() => {
        dispatch(getAppealList());
    }, []);
    return (
        <div className="container">
            <Row className="py-3 my-2">
                {appealList?.filter((item)=>item.is_verified == 1).slice(0, 8).map((appealList) => (
                   
                        <Appeal key={appealList.id} appealList={appealList}></Appeal>
                 
                ))}
            </Row >
        </div>
    );
};

export default Appeals;