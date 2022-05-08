document.querySelector("button").addEventListener("click", getBirthName);

async function getBirthName() {
  const res = await fetch("localhost:8000/api/actor");
  const data = res.json();
  console.log(data);
}
