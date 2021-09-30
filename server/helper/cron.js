const CronJob = require("cron").CronJob,
  request = require("request"),
  generateStreamThumbnail = require("./thumbnail");

const job = new CronJob(
  "*/5 * * * * *",
  function () {
    request.get(
      "http://localhost:8001/api/streams",
      function (error, response, body) {
        if (!error) {
          let streams = JSON.parse(body);
          if (typeof (streams["live"] !== undefined)) {
            let live_streams = streams["live"];
            for (let stream in live_streams) {
              if (!live_streams.hasOwnProperty(stream)) continue;
              console.log(stream)
              generateStreamThumbnail(stream);
            }
          }
        }
      }
    );
  },
  null,
  true
);

module.exports = job;
