function queuemanager(taskId, time){
  return new Promise((resolve, reject) => {
    console.log(`task started ${taskId}`);
    setTimeout(() => {
      console.log(`task ${taskId} completed`);
      resolve("success");
    }, time);
  });
};

async function runTasks() {
  const result = await queuemanager(1, 3000);
  console.log(result);
  await queuemanager(2, 2000);
  await queuemanager(3, 1000);
}

// function runTasks() {
//   queuemanager(1, 3000)
//   .then(() => queuemanager(2, 2000))
//   .then(() => queuemanager(3, 1000))
//   .then(()=> console.log("all tasks completed"));
// }

runTasks()
.then(r => {console.log("all tasks completed")})
.catch(reason => console.log("error " + reason));