document.getElementById("btn-todos").addEventListener("click", async () => {
  try {

    document.getElementById("result").innerHTML = "";

    const response = await fetch("https://app.devm.in/api/todos");
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

    const response = await fetch("https://app.devm.in/api/bikes");
    const data = await response.json();
    console.log(data);

    document.getElementById("result").innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.log(error);

    document.getElementById("result").innerHTML = error;
  }
});
