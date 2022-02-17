const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: './img/barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector(".team-container");

function addMember (memberName, memberRole, memberImg)
{
  const newMember = {
    name: memberName,
    role: memberRole,
    image: memberImg
  }

  team.push(newMember);
  console.log(team);
}

// addMember("Giulio Maria", "magazziniere", "new-team-member-02.jpg");
// console.log(team);

function addMemberToDOM (memberName, memberRole, memberImg) {

  const newDiv = document.createElement ("div");
  newDiv.classList.add("team-card");
  teamContainer.appendChild(newDiv);

  let newItem = `
  <div class="card-image">
      <img src="${memberImg}"/>
  </div>
  <div class="card-text">
      <h3>${memberName}</h3>
      <p>${memberRole}</p>
  </div>
  `;
  newDiv.innerHTML += newItem;
}

const addBtn = document.getElementById("addMemberButton");

addBtn.addEventListener("click", () => 
{
  const inputName = document.getElementById("name").value;
  const inputRole = document.getElementById("role").value;
  const inputImg = document.getElementById("image").value;
  addMember(inputName, inputRole, inputImg);
  addMemberToDOM(inputName, inputRole, inputImg);
  console.log("New member added!");
  // inputName.value = "";
});

for (let i = 0; i < team.length; i++)
{
  const teamName = team[i].name;
  const teamRole = team[i].role;
  const teamImg = team[i].image;

  addMemberToDOM(teamName, teamRole, teamImg);

  // const newDiv = document.createElement ("div");
  // newDiv.classList.add("team-card");
  // teamContainer.appendChild(newDiv);

  // let newItem = `
  // <div class="card-image">
  //     <img src="${teamImg}"/>
  // </div>
  // <div class="card-text">
  //     <h3>${teamName}</h3>
  //     <p>${teamRole}</p>
  // </div>
  // `;
  // newDiv.innerHTML += newItem;
}