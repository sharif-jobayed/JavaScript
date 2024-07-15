

/* //It works
const setA=new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setA.delete(3);

console.dir(setA.values());
*/


// It doesn't work
const setB=new Set([1,2,3],[4,5,6]);

console.dir(setB[1]);