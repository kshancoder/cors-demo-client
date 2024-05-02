try {
  const response = await fetch("http://localhost:3000/api/todos");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(error);
}


try {
  const response = await fetch("http://localhost:3000/api/bikes");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
