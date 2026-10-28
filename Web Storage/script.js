
import { storage } from "./storage.js";

const output = document.querySelector("#output");

document.querySelector("#save").addEventListener("click", () => {
  const student = {
    name: "Asha",
    course: "BCA AIML",
    city: "Pilibhit"
  };

  const saved = storage.set("student", student);

  output.textContent = saved
    ? "Student data saved successfully!"
    : "Unable to save data.";
});

document.querySelector("#read").addEventListener("click", () => {
  const student = storage.get("student", { name: "No student found" });

  output.textContent =
    "Student: " + student.name +
    (student.course ? " | Course: " + student.course : "");
});

document.querySelector("#remove").addEventListener("click", () => {
  const removed = storage.remove("student");

  output.textContent = removed
    ? "Student data removed."
    : "Unable to remove data.";
});
