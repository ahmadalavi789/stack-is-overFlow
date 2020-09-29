function stack(initialSize = 10) {
    this.items = Array(initialSize)
    this.index = 0
  }
  
  stack.prototype.size = function() {
    return this.index
  }

  stack.prototype.push = function(val){
    this.items[this.index++] = val;    
  }

  stack.prototype.pop = function(){    
    return this.items[--this.index];
  }
  stack.prototype.pushArry = function(val){
    return this.push(val)
  }
  
  
  module.exports = stack