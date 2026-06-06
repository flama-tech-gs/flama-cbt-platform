//student.js

document.getElementById("studentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const data = {
      surname: surname.value,
      firstname: firstname.value,
      email: email.value,
      class: class.value,
      department: department.value,
      age: age.value,
      admissionYear: admissionYear.value,
      parentPhoneNumber: parentPhoneNumber.value,
      currentTerm: currentTerm.value,
      address: address.value,
    };

    const res = await request("/students", "POST", data, true);

    console.log(res);
    alert("Student created successfully");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});