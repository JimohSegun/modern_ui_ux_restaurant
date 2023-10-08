import React from "react";
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs"
import { meal } from "../../Constants";
import "./Intro.css"


const Intro = () => {
const [playVideo, setPlayVideo] = React.useState(false)
const vidRef =React.useRef()

const handleVideo = () => {
    setPlayVideo(prePlayVideo => !prePlayVideo)

    if(playVideo) {
        vidRef.current.pause()
    } else {
        vidRef.current.play()
    }
}



return(
    <section className="app__video">
      <video 
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        />
        <div className="app__video-overlay flex__center">
            <div onClick={handleVideo} className="app__video-overlay_circle flex__center">
               {playVideo ? (<BsPauseFill color="#fff" fontSize={30} />) :
                            (<BsFillPlayFill color="#fff" fontSize={30} />) }
            </div>
       </div>
    </section>
    
)
}

export default Intro;