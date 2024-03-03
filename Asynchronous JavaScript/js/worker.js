self.onmessage = function (data) {
  // console.log(data.data);

  const sum = data.data.reduce((acc, item) => item + acc, 0);

  // console.log(sum);

  self.postMessage(sum);
};

// self.onmessage = function (event) {
//   console.log("Message received in worker:", event.data);
//   self.postMessage("Hello Main!");
// };
