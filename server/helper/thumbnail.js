const spawn = require("child_process").spawn;
const cmd = "/usr/bin/ffmpeg";
const { mediaServer } = require("./constants");
const generateStreamThumbnail = (stream_key) => {
  const args = [
    "-y",
    "-i",
    `${mediaServer}/live/${stream_key}.flv`,
    "-ss",
    "00:00:01",
    "-vframes",
    "1",
    process.env.PWD + "/thumbnails/" + stream_key + ".png",
  ];

  spawn(cmd, args, {
    detached: true,
    stdio: "ignore",
  }).unref();
};

module.exports = generateStreamThumbnail;
