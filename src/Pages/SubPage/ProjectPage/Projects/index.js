import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProjectList } from "../../../../Actions/projectAction";
import Project from '../Project/Project';
const Projects = () => {
    const dispatch = useDispatch();
    const { projectList } = useSelector((state) => state.project);

    useEffect(() => {
        dispatch(getProjectList());
    }, []);
    return (
        <div className="container">
            <Row className="py-3 my-2">
                {projectList?.filter((item)=>item.is_verified == 1).slice(0, 8).map((projectList) => (
                    <Col md="3" sm="6" className="my-2">
                        <Project key={projectList.id} projectList={projectList}></Project>
                    </Col>
                ))}
            </Row >
        </div>
    );
};

export default Projects;