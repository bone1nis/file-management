import { Typography } from "@mui/material";

import ResizablePanel from "../components/ResizablePanel";

const TreePage: React.FC = () => {
  return <ResizablePanel content={<Typography variant="h2">5</Typography>} />;
};

export default TreePage;
