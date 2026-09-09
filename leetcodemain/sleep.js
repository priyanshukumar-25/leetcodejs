function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}

async function  example() {
    console.log("Start");
    await sleep(2000); //waits 2 seconds
    console.log("End");

}

example();
    
