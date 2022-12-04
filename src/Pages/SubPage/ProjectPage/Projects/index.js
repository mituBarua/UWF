import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { getProjectList } from "../../../../Actions/projectAction";
import Project from "../Project/Project";
import nextId from "react-id-generator";

const Projects = () => {
  const dispatch = useDispatch();
  const { projectList } = useSelector((state) => state.project);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [list, setList] = useState([]);
  useEffect(() => {
    dispatch(getProjectList());
  }, []);
  useEffect(() => {
    setTotal(projectList?.length);
  }, [projectList]);
  useEffect(() => {
    let indexOfLastPage = page * postPerPage;
    let indexOfFirstPage = (page - 1) * postPerPage;

    setList(projectList?.slice(indexOfFirstPage, indexOfLastPage));
  }, [page, projectList]);
  return (
    <div className="container">
      <Row className="py-3 my-2">
        {!list && <p>No Data Found </p>}
        {list &&
          list
            ?.filter((item) => item.is_verified == 1)
            .map((projectList) => (
              <Col key={nextId()} md="3" sm="6" className="my-2">
                <Project
                  key={projectList.id}
                  projectList={projectList}
                ></Project>
              </Col>
            ))}
      </Row>
      <br />
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        style={{ display: "flex", justifyContent: "center" }}
      />
      <br />
    </div>
  );
};

export default Projects;
