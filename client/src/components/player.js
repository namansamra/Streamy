// import React, { Component } from "react";
// import { ReactFlvPlayer } from "react-flv-player";
// import { timeDifference } from "../utils/timestamp";

// class Player extends Component {
//   render() {
//     return (
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <ReactFlvPlayer
//           url={``}
//           isLive={true}
//           height="70vh"
//           width="100vw"
//         />
//         <div
//           style={{
//             padding: "10px 20px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <div style={{ fontSize: "x-large", fontWeight: "bolder" }}>
//             {this.props.stream.title}
//           </div>
//           <div>
//             Started{" "}
//             {timeDifference(
//               new Date().getTime(),
//               new Date(this.props.stream.started).getTime()
//             )}
//           </div>
//         </div>

//         <div style={{ padding: "8px 20px", fontSize: "smaller" }}>
//           {this.props.stream.description}
//         </div>
//       </div>
//     );
//   }
// }

// export default Player;

import React from "react";
import VideoJS from "./playerHelper"; // point to where the functional component is stored
import "videojs-mux";
import "video.js/dist/video-js.css";
import styles from "../components/styles/player.module.css";
const App = (props) => {
  const playerRef = React.useRef(null);
  console.log(props);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  //
  return (
    <div className={styles.container}>
      <div className={styles.videoPlayerDiv}>
        <div className={styles.streamName}>
          DASH (Dynamic Adaptive Streaming over HTTP)
        </div>
        <VideoJS
          options={{
            ...videoJsOptions,
            sources: [
              {
                src: `http://3.7.71.1:3000/live/${props.stream.key}/index.mpd`,
                type: "application/dash+xml",
              },
            ],
            plugins: {
              mux: {
                debug: false,
                data: {
                  env_key: "g2p9k8pnbbepctpef74jphjrm", // required

                  // Metadata
                  player_name: "DASH", // ex: 'My Main Player'
                  player_init_time: Date.now(), // ex: 1451606400000

                  // ... and other metadata
                },
              },
            },
          }}
          streamType="DASH"
          onReady={handlePlayerReady}
        />
      </div>

      <div className={styles.videoPlayerDiv}>
        <div className={styles.streamName}>HLS (HTTP Live Streaming)</div>
        <VideoJS
          options={{
            ...videoJsOptions,
            sources: [
              {
                src: `http://3.7.71.1:3000/live/${props.stream.key}/index.m3u8`,
                type: "application/x-mpegURL",
              },
            ],
            plugins: {
              mux: {
                debug: false,
                data: {
                  env_key: "elt7p5k96isgt4m8mpfu4vu96", // required

                  // Metadata
                  player_name: "HLS", // ex: 'My Main Player'
                  player_init_time: Date.now(), // ex: 1451606400000

                  // ... and other metadata
                },
              },
            },
          }}
          streamType="HLS"
          onReady={handlePlayerReady}
        />
      </div>
    </div>
  );
};

export default App;
