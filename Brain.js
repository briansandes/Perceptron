// initialization:
// NN = new Brain([2, 3, 2]);
function Brain(layers) {
    this.inputs = new Array(layers[0]);
    this.layers = [];
    this.learningRate = 0.001;

    let lastLayerInputs = layers[0];

    for (let i = 1; i < layers.length; i++) {
        let layer = [];

        for(let n = 0; n < layers[i]; n++) {
            layer.push(new Neuron(lastLayerInputs));
        }
        
        this.layers.push(layer);
        
        lastLayerInputs = layers[i];
    }
}

Brain.prototype.feedForward = function(inputs) {
    //this.inputs = inputs;
    let lastInputs = inputs;
    let nextInputs = [];
    
    
    /* looping on layers */
    for(let i = 0; i < this.layers.length; i++) {
        nextInputs = [];
        for(let n = 0; n < this.layers.length; n++) {
            
        }
        this.layers[0][i].guess(lastInputs);
    }
    
    /* to be continued */
    
};