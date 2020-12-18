import React, { FC } from "react";
import { Card, Typography, Table, Checkbox } from "antd";
import { PercentageOutlined, LinkOutlined } from "@ant-design/icons";
import { CardPropsC, Percentages } from "../constant";
import { ColumnProps } from "antd/lib/table";
import "../App.css";

const { Title } = Typography;

export const CustomCard: FC<CardPropsC> = (props) => {
  const columns: ColumnProps<Percentages>[] = [
    {
      title: "",
      dataIndex: "name",
    },
    {
      title: "",
      dataIndex: "value",
    },
  ];

  if (props.cardType === "notes") {
    columns.pop();
    columns.push({
      title: "",
      dataIndex: "checkbox",
      render: () => <Checkbox />,
    });
  }

  return (
    <Card bordered={false} className="box-shadow  full-height">
      <Title className="card-title" level={4}>
        {props.cardTitle}
        {props.cardTitle === "PENDING CLEARANCE" ? (
          <a href="#">
            <LinkOutlined />
          </a>
        ) : null}
      </Title>
      {props.cardType === "percentage" ? (
        <div>
          <Title level={1}>
            25
            <PercentageOutlined style={{ fontSize: "24px", fontWeight: 700 }} />
          </Title>
        </div>
      ) : null}
      <Table
        columns={columns}
        dataSource={props.data}
        pagination={false}
        showHeader={false}
      />
    </Card>
  );
};
