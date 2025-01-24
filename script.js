fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document.title = `${data.name} - Resume`; // Set the document title dynamically
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById(
      "contact"
    ).textContent = `${data.location} | ✉️ ${data.email}`;
    document.getElementById("links").innerHTML = `
      🌐 <a href="${data.linkedin}">LinkedIn</a> | <a href="${data.github}">GitHub</a>
    `;
    document.getElementById("summary").textContent = data.summary;
    document.getElementById("summary").innerHTML = data.summary;

    const experienceContainer = document.getElementById("experience");
    data.experience.forEach((job) => {
      const jobDiv = document.createElement("div");
      jobDiv.innerHTML = `
        <h3>${job.title} – ${job.company}</h3>
        <p class="date">${job.date}</p>
        <ul>${job.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
      `;
      experienceContainer.appendChild(jobDiv);
    });

    const educationContainer = document.getElementById("education");
    data.education.forEach((edu) => {
      const eduDiv = document.createElement("div");
      eduDiv.innerHTML = `
        <strong>${edu.degree} in ${edu.field}</strong>
        <p class="date">${edu.date}</p>
      `;
      educationContainer.appendChild(eduDiv);
    });

    const skillsContainer = document.getElementById("skills");
    data.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsContainer.appendChild(li);
    });

    const certificationsContainer = document.getElementById("certifications");
    data.certifications.forEach((cert) => {
      const li = document.createElement("li");
      li.textContent = `${cert.name} - ${cert.institution} (${cert.date})`;
      certificationsContainer.appendChild(li);
    });

    document.getElementById("languages").textContent =
      data.languages.join(" | ");

    const volunteeringContainer = document.getElementById("volunteering");
    data.volunteering.forEach((volunteer) => {
      const div = document.createElement("div");
      div.innerHTML = `
    <h3>${volunteer.role} – ${volunteer.organization}</h3>
    <p class="date">${volunteer.date}</p>
    <p>${volunteer.description}</p>
  `;
      volunteeringContainer.appendChild(div);
    });

    const opensourceContainer = document.getElementById("opensource");
    data.opensource?.forEach((contribution) => {
      const div = document.createElement("div");
      div.innerHTML = `
    <h3>${contribution.project}</h3>
    <p>${contribution.description}</p>
    <p><a href="${contribution.link}">View Contribution</a></p>
  `;
      opensourceContainer.appendChild(div);
    });

    document.getElementById(
      "footer"
    ).textContent = `© ${new Date().getFullYear()} - ${data.name}`;
  })
  .catch((error) => console.error("Error loading the data:", error));
