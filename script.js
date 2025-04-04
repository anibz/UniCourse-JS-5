let temperature = Number(prompt("Enter the temperature"));

switch (true) {
  case temperature < 0:
    console.log("Freezing");
    break;
  case temperature >= 0 && temperature <= 10:
    console.log("Very cold");
    break;

  case temperature >= 11 && temperature <= 20:
    console.log("Cold");
    break;
  case temperature >= 21 && temperature <= 30:
    console.log("Warm");
    break;
  default:
    console.log("Hot");
}
