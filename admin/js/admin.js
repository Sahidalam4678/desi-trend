const todayElement = document.getElementById("today");

if (todayElement) {
  const today = new Date().toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  todayElement.textContent = `আজ ${today}`;
}
