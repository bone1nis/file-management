import { Box, Card, Tooltip, Typography } from "@mui/material";

import { useTreeContext } from "../context/TreeContext";
import { green, indigo, red } from "@mui/material/colors";

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
        boxShadow: `0 0 2px ${color}}`,
      },
    };
  };

  return (
    <Card
      sx={{
        padding: 2,
        minHeight: 120,
      }}
    >
      <Typography variant="h6" sx={{ paddingBottom: 5 }}>
        Инсайты
      </Typography>
      <Tooltip title={renderTooltipContent()} placement="bottom">
        <Box
          sx={{
            height: 20,
            display: "flex",
          }}
        >
          <Box sx={boxStyle(verified, green[900])} />
          <Box sx={boxStyle(partly, indigo[800])} />
          <Box sx={boxStyle(notVerified, red[800])} />
        </Box>
      </Tooltip>
    </Card>
  );
};

export default FlatChart;
