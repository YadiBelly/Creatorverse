import React from 'react'
import './style_sheets/Card.css'
import { Pencil, Info} from 'lucide-react'
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
const Card = ({id, name, imageUrl, description, youtubeTag, xTag, insTag}) => {  
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          background:
            "linear-gradient(rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)",
        }}
      >
        {/* name + links */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <h3 style={{ color: "rgb(81, 133, 180)", fontSize: "2vw" }}>
            {name === null ? "" : name}
          </h3>
          <div>
            <a href={`/${id}`} style={{ color: "white", marginRight: "5px" }}>
              <Info />
            </a>
            <a href={`/edit/${id}`} style={{ color: "white" }}>
              <Pencil />
            </a>
          </div>
        </div>
        {/* social media links */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "80%",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {youtubeTag !== null && (
            <a
              href={`https://www.youtube.com/@${youtubeTag}`}
              target="_blank"
            >
              <YouTubeIcon htmlColor="white" fontSize="medium" />
            </a>
          )}
          {insTag !== null && (
            <a href={`https://x.com/${xTag}`} target="_blank">
              <InstagramIcon htmlColor="white" fontSize="medium" />
            </a>
          )}
          {xTag !== null && (
            <a
              href={`https://www.instagram.com/${insTag}`}
              target="_blank"
            >
              <XIcon htmlColor="white" fontSize="medium" />
            </a>
          )}
        </div>
        {/* description */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "80%",
            gap: "5px",
            marginTop: "30px",
          }}
        >
          <p style={{ color: "white", fontSize: "0.8em" }}>
            {description === null ? "" : description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card