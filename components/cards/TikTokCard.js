'use client'
import { useState, useEffect } from 'react'

const TikTokCard = ({ userName }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      const fetchVideos = async () => {
        try {
          const response = await fetch(
            `https://api.tiktok.com/api/user/feed/?user=${userName}`
          );
  
          if (response.ok) {
            const data = await response.json();
            setVideos(data.itemList);
          } else {
            console.error(`Error fetching TikTok videos from ${userName}:`, response.status);
          }
        } catch (error) {
          console.error('Error fetching TikTok videos:', error);
        }
      };
  
      fetchVideos();
    }, [userName]);
  return (
    <div>
      <h1>Últimos videos de {userName}</h1>
      <div>
        {videos.map(video => (
          <div key={video.id}>
            <h2>{video.desc}</h2>
            <video src={video.video.urls[0]} controls />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TikTokCard
