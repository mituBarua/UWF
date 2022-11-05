import React, { useEffect, useState } from "react";

import { Collapse } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getProjectByID,
  deleteProjectParagraph,
} from "../../../../Actions/projectAction";
import "../../Create/style.css";

import Spinner from "../../../../Components/Spinner";

const { Panel } = Collapse;

const ParagraphList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { project, loading, error, success } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(getProjectByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "project_paragraph_delete_success") {
      toast.success("Project Paragraph Deleted");
      navigate(`/project/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteProjectParagraph(accessToken, idx));
  };

  const genExtra = (idx) => (
    <>
      <EditFilled onClick={() => navigate(`/project/paragraph/edit/${idx}`)} />
      <DeleteFilled onClick={() => handleDelete(idx)} />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <>
      <Collapse expandIconPosition="start">
        {project?.paragraphs.map(({ title, body, index, id }) => (
          <Panel header={title} key={index} extra={genExtra(id)}>
            <div>{body}</div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default ParagraphList;
