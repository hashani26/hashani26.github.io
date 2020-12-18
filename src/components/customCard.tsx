import React, { FC } from "react";
import { Card, Typography, Table, Checkbox } from "antd";
import "../App.css";
import { PercentageOutlined } from "@ant-design/icons";
import { ColumnProps } from "antd/lib/table";
import { CardPropsC, Percentages } from "../constant";
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
      render: () => <Checkbox></Checkbox>,
    });
  }

  return (
    <Card bordered={false} className="box-shadow  full-height">
      <Title level={4}>{props.cardTitle}</Title>
      {props.cardType === "percentage" ? (
        <div>
          {" "}
          <Title level={1}>
            25
            <PercentageOutlined />
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
