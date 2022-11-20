import React, { useEffect } from "react";

import { Collapse, Card } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getNewsByID,
  deleteNewsParagraph,
} from "../../../../Actions/newsAction";
import "../../style.css";

import Spinner from "../../../../Components/Spinner";

const { Panel } = Collapse;

const ParagraphList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { news, loading, error, success } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "news_paragraph_delete_success") {
      toast.success("News Paragraph Deleted");
      navigate(`/news/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteNewsParagraph(accessToken, idx));
  };

  const genExtra = (idx) => (
    <>
      <EditFilled onClick={() => navigate(`/news/paragraph/edit/${idx}`)} />
      <DeleteFilled onClick={() => handleDelete(idx)} />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <div className="form-layout">
      <div className="form-design-view">
        <Card
          title="Paragraph List"
          style={{ marginBottom: 10 }}
          className="resume__basic"
        >
          <Collapse expandIconPosition="start">
            {news?.paragraphs.map(({ title, body, index, id }) => (
              <Panel header={title} key={index} extra={genExtra(id)}>
                <div>{body}</div>
              </Panel>
            ))}
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default ParagraphList;
