// src/App.js
import React from "react";
import Tile from "./Tile/Tile";
import Progress from "./Progress/Progress";

function App() {
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
  };

  const imageContainerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px', // Add some spacing between the Tile and the image
  };

  const imgStyles = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={appStyles}>
      <Tile
        header="WebDev Class has begun"
        subHeader="We are learning to make a tile"
        img="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"
        text="Crack a job at MAANG"
        link="https://content.techgig.com/career-advice/how-to-get-a-tech-job-at-faang-facebook-amazon-apple-netflix-google/articleshow/88181895.cms"
        linkText="Read more"
        bgColor="green"
      />
      <div style={imageContainerStyles}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200"
          alt="Amazon Home Page"
          style={imgStyles}
        />
      </div>
      <Progress percentage={70} /> {}
    </div>
  );
}

export default App;
