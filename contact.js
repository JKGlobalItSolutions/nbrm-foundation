
document.getElementById("year").textContent =
  new Date().getFullYear();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  status.textContent = "Sending your message...";
  status.style.color = "#26764b";

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    subject: form.subject.value,
    message: form.message.value.trim()
  };

  try {
    // Django backend endpoint must be configured.
    const response = await fetch("/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Message could not be sent.");
    }

    status.textContent = "Thank you! Your message was sent.";
    form.reset();

  } catch (error) {
    status.textContent =
      "Message not sent. Please check the Django backend connection.";
    status.style.color = "#b42318";
    console.error(error);
  }
});
