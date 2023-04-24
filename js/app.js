let GolpesAleatorios= []

for (let i = 0; i < 10; i++) {
GolpesAleatorios.push(Math.round(Math.random()*100));

console.log("Golpes recibidos:",GolpesAleatorios);

}
let GolpeMax = Math.max(...GolpesAleatorios);

console.log("Golpe mas fuerte:",GolpeMax);
