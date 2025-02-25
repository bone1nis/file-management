import ResizablePanel from "../components/ResizablePanel";

import FlatChart from "../components/FlatChart";

const ChartPage: React.FC = () => {
  return <ResizablePanel content={<FlatChart />} />;
};

export default ChartPage;
