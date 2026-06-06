//subject.js

document.getElementById("subjectForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const data = {
      name: name.value,
      code: code.value,
      description: description.value,
      class: class.value,
      teacher: teacher.value,
    };

    const res = await request("/subject", "POST", data, true);

    console.log(res);
    alert("Subject created");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});