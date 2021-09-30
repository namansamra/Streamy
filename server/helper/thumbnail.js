const spawn = require('child_process').spawn;
const cmd = "C:/Users/naman/Downloads/ffmpeg-4.3.2-2021-02-02-essentials_build/ffmpeg-4.3.2-2021-02-02-essentials_build/bin/ffmpeg.exe";

const generateStreamThumbnail = (stream_key) => {
    const args = [
        '-y',
        '-i', 'http://localhost:8001/live/'+stream_key+'.flv',
        '-ss', '00:00:01',
        '-vframes', '1',
        'C:/Users/naman/Desktop/IP/streamy/server/thumbnails/'+stream_key+'.png',
    ];

    spawn(cmd, args, {
        detached: true,
        stdio: 'ignore'
    }).unref();
};

module.exports = generateStreamThumbnail