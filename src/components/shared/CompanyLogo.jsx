import Avatar from "@mui/material/Avatar";

import Box from "@mui/material/Box";

import PropTypes from "prop-types";

export const CompanyLogo = ({ src }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
      }}
    >
      <Avatar
        src={src}
        sx={{
          width: { sm: "8vw", xs: "8vw", md: "8vw", lg: "6vw" },
          height: { sm: "8vw", xs: "8vw", md: "8vw", lg: "6vw" },
        }}
      />
    </Box>
  );
};

CompanyLogo.propTypes = {
  src: PropTypes.string.isRequired,
};
