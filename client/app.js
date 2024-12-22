const getBtn = document.querySelector("#get");
const postBtn = document.querySelector("#post");

getBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8000/posts");
  const data = await res.json();
  console.log(data);
});

postBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify({
      id: "3",
      title: "Third Post",
      description: "This is the Third post!",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
});
