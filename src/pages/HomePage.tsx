import { Typography } from "@mui/material";

import ResizablePanel from "../components/ResizablePanel";

const HomePage: React.FC = () => {
  return <ResizablePanel content={<Typography variant="h2">1</Typography>} />;
};

export default HomePage;
