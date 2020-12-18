import { CardProps } from "antd/lib/card";

export interface Percentages {
  key: string;
  name: string;
  value: string;
  checkbox?: () => void;
}

export interface CardPropsC extends CardProps {
  cardType?: string;
  cardTitle: string;
  data?: Percentages[];
}

export const TEAM_LEADS = [
  "Nilunda Wimalasena",
  "Nalan Perera",
  "Indika Kumara",
  "Sadika Sumanapala",
];

export const STATUS = [
  { value: "pending", displayVal: "Pending" },
  { value: "completed", displayVal: "Completed" },
  { value: "absent", displayVal: "Absent" },
];

export const QUOTE_DATA = [
  { key: "1", name: "Target", value: "25" },
  { key: "2", name: "Actual", value: "5" },
];

export const ADVISORS = [
  { key: "1", name: "Target", value: "25" },
  { key: "2", name: "Actual", value: "5" },
];

export const RECRUITMENT = [
  { key: "1", name: "Existing", value: "6" },
  { key: "2", name: "Registrations", value: "20" },
  { key: "3", name: "New Codes", value: "10" },
];

export const CLEARANCE = [
  { key: "1", name: "Proposals", value: "3" },
  { key: "2", name: "Suspense", value: "250, 000" },
  { key: "3", name: "Renewals", value: "120, 000" },
  { key: "4", name: "Revivals", value: "25, 000" },
];
export const NOTES = [
  {
    key: "1",
    name: "Recruitment program at school",
    value: "3",
  },
  { key: "2", name: "Leads campaign", value: "250, 000" },
  { key: "3", name: "New advisor training", value: "120, 000" },
];
