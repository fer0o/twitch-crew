import React, { useEffect, useRef } from 'react'
import {TwitchEmbed, TwitchClip, TwitchPlayerNonInteractive} from 'react-twitch-embed'

const TwitchVideo = () => {
  return(
    <div>
      <TwitchPlayerNonInteractive
      channel = 'heleniita_'
      />
    </div>
  )
}

export default TwitchVideo
