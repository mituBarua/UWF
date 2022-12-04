import React, { useEffect } from "react";

import { Collapse, Card } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import { toast } from "react-toastify";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearErrors,
  getCampaignByID,
  deleteCampaignParagraph,
} from "../../../../Actions/campaignAction";
import "../../style.css";

import Spinner from "../../../../Components/Spinner";
import NoDataFound from "../../../../Components/NoDataFound";

import nextId from "react-id-generator";

const { Panel } = Collapse;

const ParagraphList = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { campaign, loading, error, success } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getCampaignByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "campaign_paragraph_delete_success") {
      toast.success("Campaign Paragraph Deleted");
      navigate(`/campaign/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const handleDelete = (idx) => {
    dispatch(deleteCampaignParagraph(accessToken, idx));
  };

  const genExtra = (idx) => (
    <>
      <EditFilled onClick={() => navigate(`/campaign/paragraph/edit/${idx}`)} />
      <DeleteFilled onClick={() => handleDelete(idx)} />
    </>
  );

  if (loading) return <Spinner />;
  return (
    <div className="form-layout">
      <div className="form-design-view">
        {campaign?.paragraphs.length == 0 && <NoDataFound />}
        {campaign?.paragraphs.length > 0 && (
          <Card
            title="Paragraph List"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Collapse expandIconPosition="start">
              {campaign?.paragraphs.map(({ title, body, index, id }) => (
                <Panel header={title} key={nextId()} extra={genExtra(id)}>
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
