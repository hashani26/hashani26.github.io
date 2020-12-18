import React from "react";
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
