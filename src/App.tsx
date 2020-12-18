import React, { FC, useState } from "react";
import "./App.css";
import { Typography, Row, Col, Select, Button } from "antd";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { CustomCard } from "./components";

const { Title } = Typography;
const { Option } = Select;

const App: FC = () => {
  const [week, setWeek] = useState(1);
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState("pending");

  function handleChange(value: string) {
    setStatus(value);
  }

  function changeWeek(direction: string) {
    setLoad(true);
    setTimeout(() => {
      if (direction === "left") {
        setWeek(week <= 1 ? 1 : week - 1);
      } else {
        setWeek(week >= 5 ? 5 : week + 1);
      }
      setLoad(false);
    }, 1000);
  }

  return (
    <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
      <Row justify="space-between" align="middle">
        <Title>Nilunda Wimalasena</Title>
        <Select
          className={`select-input ${
            status === "pending"
              ? "select-input-pending"
              : status === "absent"
              ? "select-input-absent"
              : "select-input-complete"
          }`}
          defaultValue="Pending"
          onChange={(value) => handleChange(value)}
        >
          <Option className="select-input-pending" value="pending">
            Pending
          </Option>
          <Option className="select-input-complete" value="completed">
            Completed
          </Option>
          <Option className="select-input-absent" value="absent">
            Absent
          </Option>
        </Select>
      </Row>
      <br />
      <Row justify="space-between" align="middle" className="bordered-box">
        <Button
          disabled={week === 1}
          type="link"
          icon={<LeftCircleOutlined onClick={() => changeWeek("left")} />}
        />
        Week {week}
        <Button
          disabled={week === 5}
          type="link"
          icon={<RightCircleOutlined onClick={() => changeWeek("right")} />}
        />
      </Row>
      <br />
      <br />
      {load ? (
        <Row justify="center" align="middle">
          <LoadingOutlined style={{ fontSize: "54px", color: "#08c" }} />
        </Row>
      ) : (
        <>
          <Row gutter={[32, 32]}>
            {" "}
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardType="percentage"
                cardTitle="QUOTATIONS"
                data={[
                  { key: "1", name: "Target", value: "25" },
                  { key: "2", name: "Actual", value: "5" },
                ]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardType="percentage"
                cardTitle="ACTIVE ADVISORS"
                data={[
                  { key: "1", name: "Target", value: "25" },
                  { key: "2", name: "Actual", value: "5" },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            {" "}
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardTitle="RECRUITMENT"
                data={[
                  { key: "1", name: "Existing", value: "6" },
                  { key: "2", name: "Registrations", value: "20" },
                  { key: "3", name: "New Codes", value: "10" },
                ]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardTitle="PENDING CLEARANCE"
                data={[
                  { key: "1", name: "Proposals", value: "3" },
                  { key: "2", name: "Suspense", value: "250, 000" },
                  { key: "3", name: "Renewals", value: "120, 000" },
                  { key: "4", name: "Revivals", value: "25, 000" },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            {" "}
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <CustomCard
                cardTitle="NOTES"
                cardType="notes"
                data={[
                  {
                    key: "1",
                    name: "Recruitment program at school",
                    value: "3",
                  },
                  { key: "2", name: "Leads campaign", value: "250, 000" },
                  { key: "3", name: "New advisor training", value: "120, 000" },
                ]}
              />
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
};

export default App;
