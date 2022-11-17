import React, { useEffect } from "react";

import { Modal } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { getMessageByID } from "../../../Actions/messageAction";

const View = ({ id, isOpen, handleCancel }) => {
  const dispatch = useDispatch();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(getMessageByID(accessToken, id));
  }, []);

  return (
    <Modal
      title={`Message from ${message?.email}`}
      open={isOpen}
      onCancel={handleCancel}
      footer={[<p>Seen by: {message?.seen_by}</p>]}
    >
      <p>{message?.message}</p>
    </Modal>
  );
};

export default View;
