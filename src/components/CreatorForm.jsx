import {React, useState, useEffect } from 'react'
import './style_sheets/CreatorForm.css'
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { supabase } from '../client';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
const CreatorForm = ({is_edit = false}) => {  
  const [name, setName] = useState(null)
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState(null);
  const [youtubeTag, setYoutubeTag] = useState(null);
  const [xTag, setXTag] = useState(null);
  const [insTag, setInsTag] = useState(null);
  const navigate = useNavigate()
  const {creatorId} = useParams()
  const location = useLocation()

  const onNameChange = (e) => {
    let input = e.target.value
    if (input === "") input = null
    setName(input);
  }
  const onImageUrlChange = (e) => {
    let input = e.target.value;
    if (input === "") input = null;
    setImageUrl(input)
  }
  const onDescriptionChange = (e) => {
    let input = e.target.value;
    if (input === "") input = null;
    setDescription(input)
  }
  const onYoutubeTagChange = (e) => {
    let input = e.target.value;
    if (input === "") input = null;
    setYoutubeTag(input)
  }
  const onXTagChange = (e) => {
      let input = e.target.value;
      if (input === "") input = null;
    setXTag(input)
  }
  const onInsTagChange = (e) => {
      let input = e.target.value;
      if (input === "") input = null;
    setInsTag(input)
  }
  const createCreator = async () => {
    const { data, error } = await supabase.from('creators').insert([
      {name: name, image_url: imageUrl, description: description, youtube_tag: youtubeTag, x_tag: xTag, ins_tag: insTag}
    ]).select()
    if (error) {
      console.log(error)
      alert('Error adding creator')
    }
    else {
      console.log(data)
      navigate('/')
    }
  }

  const updateCreator = async () => {
    const { data, error } = await supabase.from('creators').update({name: name, image_url: imageUrl, description: description, youtube_tag: youtubeTag, x_tag: xTag, ins_tag: insTag}).eq('id', creatorId).select()
    if (error) {
      console.log(error)
      alert('Error updating creator')
    }
    else {
      console.log(data)
      navigate('/')
    }
  }

  const deleteCreator = async () => {
    const { message } = await supabase
      .from("creators")
      .delete()
      .eq("id", creatorId);
    console.log(message);
    navigate("/");
  };

  const fetchCreator = async () => {
    const { data, error } = await supabase.from('creators').select('*').eq('id', creatorId)
    if (error) {
      console.log(error)    
      alert('Error fetching creator')  
    }
    else {      
      setName(data[0].name)
      setImageUrl(data[0].image_url)
      setDescription(data[0].description)
      setYoutubeTag(data[0].youtube_tag)
      setXTag(data[0].x_tag)
      setInsTag(data[0].ins_tag)
    }
  }

  useEffect(() => {
    if (is_edit) {
      fetchCreator()
    }
  }, [location.pathname])

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px 20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="content-div">
        <label>Name</label>
        <input
          type="text"
          style={{ padding: "25px 10px" }}
          onChange={onNameChange}
          value={name}
        />
      </div>
      <div className="content-div">
        <label>Image</label>
        <p>
          Provide a link to an image of your creator. Be sure to include the
          http://
        </p>
        <input
          type="text"
          style={{ padding: "25px 10px" }}
          onChange={onImageUrlChange}
          value={imageUrl}
        />
      </div>
      <div className="content-div">
        <label>Description</label>
        <p>
          Provide a description of the creator. Who are they? What makes them
          interesting?
        </p>
        <textarea
          style={{ padding: "10px 10px", height: "100px" }}
          onChange={onDescriptionChange}
          value={description}
        />
      </div>
      <div className="content-div">
        <h3 style={{ color: "rgb(81, 133, 180)" }}>SOCIAL MEDIA LINKS</h3>
        <p>Provide at least one of the creator's social media links.</p>
      </div>
      <div className="content-div">
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <YouTubeIcon fontSize="large" />
          YouTube
        </label>
        <p>The creator's YouTube handle (without the @)</p>
        <input
          type="text"
          style={{ padding: "25px 10px" }}
          onChange={onYoutubeTagChange}
          value={youtubeTag}
        />
      </div>
      <div className="content-div">
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <XIcon fontSize="large" />
          Twitter
        </label>
        <p>The creator's X handle (without the @)</p>
        <input
          type="text"
          style={{ padding: "25px 10px" }}
          onChange={onXTagChange}
          value={xTag}
        />
      </div>
      <div className="content-div">
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <InstagramIcon fontSize="large" />
          Instagram
        </label>
        <p>The creator's Instagram handle (without the @)</p>
        <input
          type="text"
          style={{ padding: "25px 10px" }}
          onChange={onInsTagChange}
          value={insTag}
        />
      </div>
      <div
        className="content-div"
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <button type="button" onClick={(is_edit)? updateCreator : createCreator}>
          Submit
        </button>
        {is_edit && (
          <button
            type="button"
            style={{ backgroundColor: "rgb(255, 96, 92)" }}
            onClick={deleteCreator}
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}

export default CreatorForm