import { CardActionArea, Card, CardContent, Typography } from "@mui/material";

export function DetailsRight(prop) {
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <Details
        year={prop.year}
        institute={prop.institute}
        description={prop.description}
      />
    </div>
  );
}
export function DetailsLeft(prop) {
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      <Details
        year={prop.year}
        institute={prop.institute}
        description={prop.description}
      />
    </div>
  );
}

function Details(prop) {
  return (
    <Card
      sx={{
        width: "30vw",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: "2vw",
            }}
          >
            {prop.institute}
          </Typography>
          <Typography
            variant="body1"
            color={"#3d4c5e"}
            sx={{
              fontSize: "1.2vw",
              fontStyle: "italic",
            }}
          >
            {prop.year}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1.5vw",
            }}
          >
            {prop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
