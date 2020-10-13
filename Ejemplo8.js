const brain = require('brain.js');

let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.officialjaden > results.fakejaden ? output = 'OfficialJaden' : output = 'FakeJaden';
   return output;
}

const trainingData = [
    {
        input: "If I Had A Nickel For Every Time I've Cried In The Back Of An Uber, I Would Have Another Pair Of Yeezy's.",
        output: { officialjaden: 1 }
    },{
        input: "That Moment When Peeing Feels So Good You Start Crying.",
        output: { officialjaden: 1 }
    },{
        input: "I Am Not A Human And I Don't Speak English",
        output: { officialjaden: 1 }
    },{
        input: "If I drop soap on the ground, is the ground cleansed or is the soap dirty?",
        output: { fakejaden: 1 }
    },{
        input: "You bake cookies not cook them, why aren't they called bakeies?",
        output: { fakejaden: 1 }
    },{
        input: "If you try to fail, and succeed, which have you done?",
        output: { fakejaden: 1 }
    }
 ]

 train(trainingData);

 console.log(execute("hola"));