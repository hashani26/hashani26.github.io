import React, { FC, useState, ReactText } from "react";
import { Typography, Row, Col, Select, Button, Dropdown, Menu } from "antd";
import {
  RightCircleOutlined,
  LeftCircleOutlined,
  LoadingOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  TEAM_LEADS,
  STATUS,
  QUOTE_DATA,
  ADVISORS,
  RECRUITMENT,
  CLEARANCE,
  NOTES,
} from "./constant";
import { CustomCard } from "./components";
import "./App.css";

const { Title } = Typography;
const { Option } = Select;

const App: FC = () => {
  const [week, setWeek] = useState(1);
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState(STATUS[0].value);
  const [leadName, setLeadName] = useState(TEAM_LEADS[0]);

  function getTimeOut() {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }

  function handleChange(value: string) {
    setStatus(value);
  }

  function changeWeek(direction: string) {
    setLoad(true);
    if (direction === "left") {
      setWeek(week <= 1 ? 1 : week - 1);
    } else {
      setWeek(week >= 5 ? 5 : week + 1);
    }
    getTimeOut();
  }

  function changeName(key: ReactText) {
    setLoad(true);
    setLeadName(TEAM_LEADS[Number(key)]);
    getTimeOut();
  }

  const menu = (
    <Menu onClick={({ key }) => changeName(key)}>
      {TEAM_LEADS.map((lead: string, i) => {
        return (
          <Menu.Item key={i} title={lead}>
            {lead}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Col xs={{ span: 24 }} lg={{ span: 16, offset: 4 }}>
      <Row justify="space-between" align="middle">
        <Dropdown trigger={["click"]} overlay={menu}>
          <Title className="heading">
            {leadName}&nbsp; &nbsp; <DownOutlined style={{ fontSize: 20 }} />
          </Title>
        </Dropdown>
        <Select
          className={`select-input ${
            status === "pending"
              ? "select-input-pending"
              : status === "absent"
              ? "select-input-absent"
              : "select-input-completed"
          }`}
          defaultValue={status}
          onChange={(value) => handleChange(value)}
        >
          {STATUS.map((state, i) => (
            <Option
              key={i}
              className={`select-input-${state.value}`}
              value={state.value}
            >
              {state.displayVal}
            </Option>
          ))}
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
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardType="percentage"
                cardTitle="QUOTATIONS"
                data={QUOTE_DATA}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard
                cardType="percentage"
                cardTitle="ACTIVE ADVISORS"
                data={ADVISORS}
              />
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard cardTitle="RECRUITMENT" data={RECRUITMENT} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CustomCard cardTitle="PENDING CLEARANCE" data={CLEARANCE} />
            </Col>
          </Row>
          <Row gutter={[32, 32]}>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <CustomCard cardTitle="NOTES" cardType="notes" data={NOTES} />
            </Col>
          </Row>
        </>
      )}
    </Col>
  );
};

export default App;
