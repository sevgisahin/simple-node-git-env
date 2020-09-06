const DOCKER_USER = process.env.DOCKER_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("${DOCKER_USER} Microservices rock!");
    console.log(DOCKER_USER);
    await sleep(5000);
  }
}

main();
