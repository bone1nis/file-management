import ResizablePanel from "../components/ResizablePanel";

import FlatChart from "../components/FlatChart";
import FolderForm from "../components/FolderForm";
import TreeView from "../components/TreeView";

const HomePage: React.FC = () => {
  return <ResizablePanel content={
    <>
      <FolderForm />
      <FlatChart />
      <TreeView />
    </>
  } />;
};

export default HomePage;
