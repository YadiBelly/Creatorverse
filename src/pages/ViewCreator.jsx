import {React, useEffect, useState} from 'react'
import { supabase} from '../client'
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import './style_sheets/ViewCreator.css'
import { useParams, useNavigate } from 'react-router-dom';
const ViewCreator = () => {
  const {creatorId} = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  useEffect(() => {
    const fetchCreator = async () => {
      // it returns an array of creators
      let { data: creators, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', creatorId)
      if (error) {
        console.log("error", error);
      }
      else if (creators.length === 0) {
        console.log('No such creator');
      }
      else setCreator(creators[0])
    }
    fetchCreator()
  }, [])

  const deleteCreator = async () => {
    const {message} = await supabase
      .from('creators')
      .delete()
      .eq('id', creatorId)
    console.log(message)
    navigate('/')
  }

  console.log(creator)
  return (
    <>
      {creator !== null ? (
        <div
          style={{
            display: "flex",
            margin: "20px 250px",
            height: "50vh",            
          }}
        >
          <img
            src={creator.image_url}
            style={{
              width: "320px",
              margin: "20px 20px",
              height: "auto",              
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "20px 20px",
                gap: "10px",                
              }}
            >
              <h2 style={{ color: "rgb(81, 133, 180)" }}>{creator.name}</h2>
              <p style={{ fontStyle: "normal", fontSize: "1.3em" }}>
                {creator.description}
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                {creator.youtube_tag && (
                  <a
                    href={`https://www.youtube.com/@${creator.youtube_tag}`}
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank"
                  >
                    <YouTubeIcon fontSize="large" />@{creator.youtube_tag}
                  </a>
                )}

                {creator.x_tag && (
                  <a
                    href={`https://x.com/${creator.x_tag}`}
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank"
                  >
                    <XIcon fontSize="large" htmlColor="white" />@{creator.x_tag}
                  </a>
                )}
                {creator.ins_tag && (
                  <a
                    href={`https://www.instagram.com/${creator.ins_tag}`}
                    style={{ color: "white", textDecoration: "none" }}
                    target="_blank"
                  >
                    <InstagramIcon fontSize="large" htmlColor="white" />@
                    {creator.ins_tag}
                  </a>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 20px",                
              }}
            >
              <a className="edit-button" href={`/edit/${creator.id}`}>Edit</a>
              <button className="delete-button" onClick={deleteCreator}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>No such a creator</h1>
      )}
    </>
  );
  
}

export default ViewCreator