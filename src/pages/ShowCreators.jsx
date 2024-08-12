import React from 'react'
import Card from '../components/Card'
const ShowCreators = ({creators}) => {
  console.log(creators)
  return (     
    <div style={{display:"flex", margin:"20px 20px", justifyContent: "center", gap: "20px", flexWrap: "wrap"}}>
    {
      (creators && creators.length > 0)?
      creators.map((creator, index) => {
        return <Card id={creator.id} name={creator.name} imageUrl={creator.image_url} description={creator.description} youtubeTag={creator.youtube_tag} xTag={creator.x_tag} insTag={creator.ins_tag}/>
      })
    : <h1>No Creators Found</h1>
    }
    </div>
  );
}

export default ShowCreators