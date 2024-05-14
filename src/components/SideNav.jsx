import RoundImage from "./shared/RoundImage";

import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import PropTypes from "prop-types";

function SideNav({ menuItems }) {
  const handleClick = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundColor: "#FF5F00",
        height: "100vh",
        color: "#000",
        boxShadow: "5px 5px 10px rgba(225,225,225,5)",
      }}
    >
      <RoundImage src={"img/profile.jpg"} />
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{}}>
            <ListItemButton
              sx={{
                "& .MuiListItemIcon-root": {
                  color: "#FFFAE6",
                },
                color: "#FFFAE6",
                "&:hover": {
                  backgroundColor: "#FFFAE6",
                  color: "#000000",
                  "& .MuiListItemIcon-root": {
                    color: "#000000",
                  },
                },
              }}
              onClick={() => handleClick(item.section)}
            >
              <ListItemIcon
                sx={{
                  fontSize: "1.8rem",
                  display: "flex",
                  justifyContent: { md: "center", lg: "flex-start" },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  fontSize: "1rem",
                  display: { sm: "none", xs: "none", md: "none", lg: "block" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

SideNav.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      section: PropTypes.object.isRequired,
    })
  ).isRequired,
};

export default SideNav;
