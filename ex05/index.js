const {EventEmitter} = require('events')
// var events = require('events'); 
module.exports = class Connection {
    // ##BEGIN## 代码已加密
// gywgywgywgywgdqgdUgdvgdegdwgdmgd=gdqgdwgdUgdmgywgqRgqkgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgywgcRgywgdvgd9gRygywgcUgRggd9gdvgdwgcUgdDgdngdwgdwgd9gdmgqRgqkgc9gyw
// gywgywgywgywgRk

// gywgywgywgywgdqgdUgdvgdvgd9gdqgdwgdngdUgdvgqRgdDgdegdRgqkgywgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgd9gdDgdngdwgqRgqdgdqgdUgdvgdvgqdgqlgdDgdegdRgqk
// gywgywgywgywgRk

// gywgywgywgywgdUgdvgcDgdUgdvgdvgqRgdqgdygqkgywgRd
// gywgywgywgywgywgywgywgywgdwgdkgdngdegqDgd9gRggd9gdvgdwgqDgdUgdvgqRgqdgdqgdUgdvgdvgqdgqlgdqgdygqk
// gywgywgywgywgRk
constructor(){
    this.emitter = new EventEmitter();
}
onConn(fn){
    this.emitter.on('someEvent',fn)
}
connection(arg){
    this.emitter.emit('someEvent',arg)
}
    // ##END##
}
