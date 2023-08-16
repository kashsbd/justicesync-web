import { Typography } from "@mui/material";

const Title = ({ component, color, title }) => {
  return (
    <Typography style={{ color: color }} component={component}>
      {title}
    </Typography>
  );
};

export default Title;
