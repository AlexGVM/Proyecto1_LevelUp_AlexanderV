var data = ({2:"Apple",1:"Microsoft",3:"Google"})
var info = keysAndValues(data);
console.log(info)

function keysAndValues(x) {
    return new Array(Object.keys(x).sort(), 
    Object.values(x));
}