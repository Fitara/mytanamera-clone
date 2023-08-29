const Redis = require("ioredis");

const redis = new Redis({
  port: 16067, // Redis port
  host: "redis-16067.c1.ap-southeast-1-1.ec2.cloud.redislabs.com", // Redis host
  password: "47v6J9uPL5ecvubx2ccduemEQc2tt44a",
});

redis.on("error", (error) => {
  console.error("Error connecting to Redis:", error);
});

module.exports = redis;