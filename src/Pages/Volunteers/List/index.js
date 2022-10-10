import React, { useEffect } from "react";

import { Table, Tag, Button } from "antd";
import { EditFilled, DeleteFilled, DatabaseFilled } from '@ant-design/icons';
import {
    clearSuccess,
    clearErrors,
    deleteVolunteer,
    getVolunteerList,
} from "../../../Actions/volunteerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const List = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        user: { accessToken },
    } = useSelector((state) => state.user);
    const { volunteerList, error, success, loading } = useSelector(
        (state) => state.volunteer
    );

    useEffect(() => {
        if (success && success.type == "volunteer_delete_success") {
            toast.success("Volunteer Deleted Successfully");
            dispatch(clearSuccess());
            navigate("/volunteer/list");
            window.location.reload();
        } else if (error) {
            toast.error(error.message);
            dispatch(clearErrors());
        }
    }, [loading, error, success]);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "First Name",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Additional Note",
            dataIndex: "additional_note",
            key: "additional_note",
        },
        {
            title: "Action",
            render: (row) => {
              const { id } = row;
              return (
                <>
      
                  <DatabaseFilled onClick={() => navigate(`/volunteer/${id}`)} />
                  <EditFilled onClick={() => navigate(`/volunteer/edit/${id}`)} />
                  <DeleteFilled onClick={() => dispatch(deleteVolunteer(accessToken, id))} />
      
                </>
              );
            },
          },

    ];
    useEffect(() => {
        dispatch(getVolunteerList(accessToken));
    }, []);
    return (
        <>
            <div>

                {/* <Button type="primary" onClick={() => navigate("/project/create")}>Create</Button> */}
                <br />
                <Table columns={columns} dataSource={volunteerList} style={{ marginTop: 20 }} />
            </div>
        </>
    );
};

export default List;
