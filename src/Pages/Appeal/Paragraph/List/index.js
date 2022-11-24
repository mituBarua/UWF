import React, { useEffect } from "react";

import { Collapse, Card } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getAppealByID,
  deleteAppealParagraph,
} from "../../../../Actions/appealAction";
import "../../style.css";

import Spinner from "../../../../Components/Spinner";
import NoDataFound from "../../../../Components/NoDataFound";

const { Panel } = Collapse;

const ParagraphList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { appeal, loading, error, success } = useSelector(
    (state) => state.appeal
  );

  useEffect(() => {
    dispatch(getAppealByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "appeal_paragraph_delete_success") {
      toast.success("Appeal Paragraph Deleted");
      navigate(`/appeal/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteAppealParagraph(accessToken, idx));
  };

  const genExtra = (idx) => (
    <>
      <EditFilled onClick={() => navigate(`/appeal/paragraph/edit/${idx}`)} />
      <DeleteFilled onClick={() => handleDelete(idx)} />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <div className="form-layout">
      <div className="form-design-view">
        {appeal?.paragraphs.length == 0 && <NoDataFound />}
        {appeal?.paragraphs.length > 0 && (
          <Card
            title="Paragraph List"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Collapse expandIconPosition="start">
              {appeal?.paragraphs.map(({ title, body, index, id }) => (
                <Panel header={title} key={index} extra={genExtra(id)}>
                  <div>{body}</div>
                </Panel>
              ))}
            </Collapse>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ParagraphList;
