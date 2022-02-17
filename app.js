const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "./img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "./img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "./img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "./img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "./img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "./img/barbara-ramos-graphic-designer.jpg"
  },
];

const teamContainer = document.querySelector(".team-container");

for (let i = 0; i < team.length; i++)
{
  const newDiv = document.createElement ("div");
  newDiv.classList.add("team-card");
  teamContainer.appendChild(newDiv);

  let newItem = `
  <div class="card-image">
      <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>
  </div>
  <div class="card-text">
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
  </div>
  `;

  newDiv.innerHTML += newItem;
}