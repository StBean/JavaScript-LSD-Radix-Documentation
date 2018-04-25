// LSD Radix Sort Implemented with Javascript

function Queue(){       
    this.dataStore = [];
    this.enqueue   = enqueue;
    this.dequeue   = dequeue;
    this.isEmpty   = isEmpty;
};
function enqueue(element){
    this.dataStore.push(element);
};
function dequeue(){
    if(this.dataStore.length == 0){
      return false;
    } else {
      return this.dataStore.shift();
    }
};
function isEmpty(){
    if(this.dataStore.length == 0){
      return true;
    } else {
      return false;
    }
};
function radix(data){       
    var bin = [];
    var digIndex = [];
    for(var i = 0; i < 10; i++){
        bin[i] = new Queue();
    };  // Block 1------------------------------
    for(var i = 0; i < data.length; i++){
        bin[data[i]%10].enqueue(data[i]);
    };
    for(var i = 0; i < bin.length; i++){
        digIndex.push(bin[i].dataStore.length);
    };
    for(var i = 0; i < digIndex.length - 1; i++){
        digIndex[i + 1] += digIndex[i];
    };
    for(var i = bin.length - 1; i >= 0; i--){
        while(!bin[i].isEmpty()){
            data[--digIndex[i]] = bin[i].dequeue();
        }
    };  // Block 2------------------------------
    digIndex = [];  // re-initialize digIndex
    for(var i = data.length - 1; i >= 0; i--){
        bin[Math.floor(data[i]/10)%10].enqueue(data[i]);
    };
    for(var i = 0; i < bin.length; i++){
        digIndex.push(bin[i].dataStore.length);
    };
    for(var i = 0; i < digIndex.length - 1; i++){
        digIndex[i + 1] += digIndex[i];
    };
    for(var i = bin.length - 1; i >= 0; i--){
        while(!bin[i].isEmpty()){
            data[--digIndex[i]] = bin[i].dequeue();
        }
    };
    return data;
};

// Code created and written by StBean(Anthony Poblacion)
