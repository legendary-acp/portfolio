import {Avatar,Box} from "@mui/material";

import PropTypes from "prop-types";

export default function RoundImage({ src }) {
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
        alt="Round Image"
        src={src}
        sx={{
          width: { sm: "5vw", xs: "5vw", md: "5vw", lg: "10vw" },
          height: { sm: "5vw", xs: "5vw", md: "5vw", lg: "10vw" },
          border: {
            sm: "3px solid #4a7194",
            xs: "3px solid #4a7194",
            md: "3px solid #4a7194",
            lg: "5px solid #4a7194",
          },
        }}
      />
    </Box>
  );
}

RoundImage.propTypes = {
  src: PropTypes.string.isRequired,
};

