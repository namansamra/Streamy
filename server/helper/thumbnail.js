const spawn = require("child_process").spawn;
const cmd =
  "C:/Users/naman/Downloads/ffmpeg-4.3.2-2021-02-02-essentials_build/ffmpeg-4.3.2-2021-02-02-essentials_build/bin/ffmpeg.exe";
const { mediaServer } = require("./constants");
const generateStreamThumbnail = (stream_key) => {
  const args = [
    "-y",
    "-i",
    `${mediaServer}:3000/live/'+stream_key+'.flv`,
    "-ss",
    "00:00:01",
    "-vframes",
    "1",
    "C:/Users/naman/Desktop/IP/streamy/server/thumbnails/" +
      stream_key +
      ".png",
  ];

  spawn(cmd, args, {
    detached: true,
    stdio: "ignore",
  }).unref();
};

module.exports = generateStreamThumbnail;
