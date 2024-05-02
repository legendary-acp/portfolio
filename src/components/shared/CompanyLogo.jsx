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
        alt={name}
        src={src}
        sx={{
          width: { sm: "2vw", xs: "2vw", md: "2vw", lg: "3vw" },
          height: { sm: "2vw", xs: "2vw", md: "2vw", lg: "3vw" },
        }}
      />
    </Box>
  );
};

CompanyLogo.propTypes = {
  src: PropTypes.string.isRequired,
};
