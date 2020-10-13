const brain = require('brain.js');


const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 2,
    hiddenLayers: [10],
    outputSize: 2,
  });
  
  net.train([
    [1, 3],
    [2, 2],
    [3, 1],
  ]);
  
  const output = net.run([
    [1, 3],
    [2, 2],
  ]); // [3, 1]

  console.log(output);