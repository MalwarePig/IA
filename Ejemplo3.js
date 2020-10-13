const brain = require('brain.js');// provide optional config object, defaults shown.

const config = {
    inputSize: 20,
    inputRange: 20,
    hiddenLayers: [20, 20],
    outputSize: 20,
    learningRate: 0.01,
    decayRate: 0.999,
  };
  
  // create a simple recurrent neural network
  const net = new brain.recurrent.RNN(config);
  
  net.train([
    { input: [5, 5,2], output: [50] },
    { input: [5, 10,2], output: [100] },
    { input: [10, 5,2], output: [100] },
    { input: [20, 10,2], output: [400] },
  ]);
  
  let output = net.run([10,20,2]); // [0]
  console.log("Salida: " + output);











