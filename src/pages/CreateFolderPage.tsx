import ResizablePanel from "../components/ResizablePanel";

import FolderForm from "../components/FolderForm";

const CreateFolderPage: React.FC = () => {
  return <ResizablePanel content={<FolderForm />} />;
};

export default CreateFolderPage;
