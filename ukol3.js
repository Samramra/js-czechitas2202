let a = Number(prompt(prvni strana"));
let b = Number(prompt(druhá strana"));
let c = Number(prompt(třetí strana"));


if (a > b) {
  if (a + b > c) {
    console.log("nejvetsi strana je A:" + a);
  if (b + c > a) {
    console.log("trojuhelnik lze sestavit" + a);
}
else {
  console.log("nejvetsi strana je C:" + c);
}
else (a + b > c) {
  console.log("nejvetsi strana je B:" + b);
}
else {
console.log("nejvetsi strana je C:" + c);