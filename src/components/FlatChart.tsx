import { Box, Card, Tooltip, Typography } from "@mui/material";

import { useTreeContext } from "../context/TreeContext";

const FlatChart: React.FC = () => {
  const { verificationCounts } = useTreeContext();

  const { verified, notVerified, partly, all } = verificationCounts;

  const renderTooltipContent = () => (
    <>
      <Typography variant="subtitle2">{`${notVerified} # Требование не верифицированно`}</Typography>
      <Typography variant="subtitle2">{`${partly} # Требование частично верифицированно`}</Typography>
      <Typography variant="subtitle2">{`${verified} # Требование верифицированно`}</Typography>
    </>
  );

  const boxStyle = (field: number, color: string) => {
    return {
      backgroundColor: color,
      width: `${all ? (field / all) * 100 : 0}%`,
      height: "100%",
      "&:hover": {
        boxShadow: `0 0 2px ${color}}`
      }
    };
  };

  return (
    <Card sx={{ 
        padding: "10px",
        minHeight: "120px" }} >
      <Typography variant="h6" sx={{ margin: "10px 0 30px 10px" }}>
        Инсайты
      </Typography>
      <Tooltip title={renderTooltipContent()} placement="bottom">
        <Box
          sx={{
            height: "20px",
            display: "flex",
          }}
        >
          <Box sx={boxStyle(verified, "#357a38")} />
          <Box sx={boxStyle(partly, "#002984")} />
          <Box sx={boxStyle(notVerified, "#ba000d")} />
        </Box>
      </Tooltip>
    </Card>
  );
};

export default FlatChart;
