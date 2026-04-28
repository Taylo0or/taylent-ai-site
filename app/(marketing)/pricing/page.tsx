import type { Metadata } from "next";
import PricingTable from "./table";

export const metadata: Metadata = {
  title: "模型定价 · Taylent AI",
  description:
    "Taylent 全模型定价：Anthropic、OpenAI、Google 旗下所有主流模型的输入 / 输出价格、上下文窗口和按量计费规则。",
};

export default function PricingPage() {
  return <PricingTable />;
}
