// from p5.js
function rand(min, max) {
    var rand;

    rand = Math.random();

    if (typeof min === 'undefined') {
        return rand;
    } else
    if (typeof max === 'undefined') {
        if (min instanceof Array) {
            return min[Math.floor(rand * min.length)];
        } else {
            return rand * min;
        }
    } else {
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }

        return rand * (max - min) + min;
    }
};


// sigmoid
function sigmoid(t) {
    return 1 / (1 + Math.pow(Math.E, -t));
}


// initialization:
// NN = new Brain([2, 3, 2]);
function Brain(layers) {
    // inputs picked fro first item (input layer)
    this.inputs = new Array(layers[0]);
    this.layers = [];
    this.learningRate = 0.001;

    for (let i = 1; i < layers.lenght; i++) {

    }
}



//Neuron Object
function Neuron(inputs, o) {
    this.learningRate = 0.0001;
    this.inputs = inputs;

    if(o) {
        this.bias = 'bias' in o ? o.bias : rand(-1, 1);
        this.weights = 'weights' in o ? o.weights : this.genWeights(inputs);
    } else {
        this.bias = rand(-1, 1);
        this.weights = this.genWeights(inputs);
    }
};

// generates weights for current neuron
// int inputs = number of inputs
Neuron.prototype.genWeights = function(inputs) {
    let weights = new Array(inputs);

    for(let i = 0; i < inputs; i++) {
        weights[i] = rand(-1, 1);
    }
    
    return weights;
};

// does a weighted sum and applies a sigmoid function to squash values between 0 and 1.
// param array inputs
Neuron.prototype.guess = function (inputs) {
    // shiffman's code
    let sum = 0;

    for (let i = 0; i < this.weights.length; i++) {
        sum += this.weights[i] * inputs[i] + this.bias * 1;
    }

    return sigmoid(sum);
};

// trains the neuron
// param array inputs
// param int target = desired prediction
Neuron.prototype.train = function(inputs, target) {
    let guess = this.guess(inputs);
    let error = target - guess;
    
    // tune all the weights
    for (let i = 0; i < this.weights.length; i++) {
        this.weights[i] += error * inputs[i] * this.learningRate;
    }
    
    // tune the bias (finally figured it out)
    this.bias += error * this.learningRate;
};