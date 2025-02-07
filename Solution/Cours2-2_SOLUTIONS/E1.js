function printArray(_array = []){
    console.log("----------------\n" + _array + "\n----------------");
}

const nombres = [64, 13, 6, 28, 46];

const nombresCarre = nombres.map((e) => e**2);
console.log("\nnombresCarre");
printArray(nombresCarre);

const nombresCube = [];
nombres.forEach((e) => nombresCube.push(e**3));
console.log("\nnombresCube");
printArray(nombresCube);

const nombresInfA40 = nombres.filter((e) => e<40);
console.log("\nnombresInfA40");
printArray(nombresInfA40);

const nombresCubeSupA10000 = nombresCube.filter((e) => e>10000);
console.log("\nnombresCubeSupA10000");
printArray(nombresCubeSupA10000);

const nombresMod = nombres.filter((e) => e%2===0).map((e) => e/2).filter((e) => e%2===1);
console.log("\nnombresMod");
printArray(nombresMod);


