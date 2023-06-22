import React, { useEffect, useRef } from 'react'

const TwitchVideo = ({ channel, width, height }) => {
  const playerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://player.twitch.tv/js/embed/v1.js'
    script.async = true

    script.addEventListener('load', () => {
      const options = {
        width,
        height,
        channel,
        parent: ['localhost']
      }
      new window.Twitch.Player(playerRef.current, options)
    })

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [channel, width, height])

  return <div ref={playerRef}></div>
}

export default TwitchVideo
