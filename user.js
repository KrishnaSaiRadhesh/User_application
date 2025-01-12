async function getData() {
    let response = await fetch("https://midnight-tidal-shadow.glitch.me/students");
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let students = await response.json();
        let container = document.querySelector(".container");
        students.forEach(student => {
            let item = document.createElement("div");
            item.innerHTML = `
                        <img src='${student.img}' alt='${student.name}'>
                        <p>${student.name}</p>
                    `;
            container.appendChild(item);
        });
        if (students.length === 0) {
            document.getElementsByClassName("loader")[0].innerText = "Data Not Available"
        } else {
            document.querySelector(".loader").style.display = "none";
        }
        container.style.display = "grid";
    } catch (error) {
        console.error(error);
        document.querySelector(".loader").textContent = "Failed to load content.";
    }
}
document.addEventListener("DOMContentLoaded", getData);
