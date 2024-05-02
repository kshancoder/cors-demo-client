document.getElementById("btn-todos").addEventListener("click", async () => {
  try {

    document.getElementById("result").innerHTML = "";

    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.log(error);

    document.getElementById("result").innerHTML = error;
  }
});

document.getElementById("btn-bikes").addEventListener("click", async () => {
  try {
    document.getElementById("result").innerHTML = "";

    const response = await fetch("http://localhost:3000/api/bikes");
    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.log(error);

    document.getElementById("result").innerHTML = error;
  }
});
