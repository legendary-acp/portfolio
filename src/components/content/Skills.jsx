import { ImageList, ImageListItem, Paper,Typography } from "@mui/material";

import Header from "../shared/Header";

import PropTypes from "prop-types";

export default function Skills({ sectionRef }) {
  return (
    <div ref={sectionRef} style={{ width:'100%', height:'100vh', backgroundColor:'#EBF4F1' }}>
      <Header title="SKILLS"/>
        <Paper elevation={8} sx={{margin:'2rem'}}>    
        <Typography sx={{ paddingLeft:'2rem', paddingTop:'2rem' , backgroundColor:'#B2D85F', fontFamily:'"Gill Sans Extrabold"'}} variant="h3">LANGUAGES</Typography>
          <ImageList variant="masonry" cols={5} sx={{ padding: '2rem' }}>
              {languageImg.map((lang) => (
                <ImageListItem key={lang.img}>
                  <img
                    srcSet={lang.img}
                    src={lang.img}
                    alt={lang.name}
                    loading="lazy"
                    style={{width:"8rem", height:'8rem', objectFit:'contain'}}
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </Paper>
        <Paper elevation={8} sx={{margin:'2rem'}}>    
        <Typography sx={{ paddingLeft:'2rem', paddingTop:'2rem' , backgroundColor:'#B2D85F', fontFamily:'"Gill Sans Extrabold"'}} variant="h3">TOOLS</Typography>
          <ImageList variant="masonry" cols={7} sx={{ padding: '2rem' }}>
              {toolsImg.map((tool) => (
                <ImageListItem key={tool.img}>
                  <img
                    srcSet={tool.img}
                    src={tool.img}
                    alt={tool.name}
                    loading="lazy"
                    style={{width:"8rem", height:'8rem', objectFit:'contain'}}
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </Paper>
    </div>
  );
}

const languageImg = [
  { 
    img: "img/lang/go.png",
    name:"Go Lang"
  },
  {
    img: "img/lang/python.png",
    name: "Python"
  },
  {
    img: "img/lang/javascript.png",
    name:"JavaScript"
  },
  {
    img: "img/lang/html.png",
    name:"HTML"
  },
  {
    img: "img/lang/c++.png",
    name:"C++"
  },
];

const toolsImg = [
  { 
    img: "img/tools/linux.png",
    name:"Linux"
  },
  { 
    img: "img/tools/aws.webp",
    name:"AWS"
  },
  { 
    img: "img/tools/azure.webp",
    name:"Azure"
  },
  { 
    img: "img/tools/otel.png",
    name:"OpenTelemetry"
  },
  { 
    img: "img/tools/kubernetes.webp",
    name:"Kubernetes"
  },
  { 
    img: "img/tools/docker.png",
    name:"Docker"
  },
  { 
    img: "img/tools/git.png",
    name:"Git"
  },
];

Skills.propTypes = {
  sectionRef: PropTypes.object.isRequired,
};
