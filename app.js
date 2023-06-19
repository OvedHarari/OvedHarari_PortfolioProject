//Navbar functionality and dark/light mode styling
(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

// COPYRIGHT YEAR DYNAMIC UPDATE
const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);
document.getElementById("copyrightYear").innerText = " " + currentYear;

// HOME - Typing animation
const sentences = [
  `Hi, I'm <span>Oved Harari.</span>
                    A Full Stack Web Developer.`,
];

const sentence1El = document.querySelector(".typing-animation");

let charIndex = 0;
let sentenceIndex = 0;
let direction = 1; // 1 -> forward, -1 backwrds

function nextStep() {
  const sentence = sentences[sentenceIndex];
  sentence1El.innerHTML = sentence.substring(0, charIndex);
  if (direction === 1) {
    charIndex += 1;
    if (charIndex > sentence.length) {
      //direction = -1;
      // stoped the loop after array[0] to leave an option for additional text if I want.
      charIndex = sentence.length;
      setTimeout(nextStep, 2000); // Wait  2 sec before erasing
    } else {
      setTimeout(nextStep, 100); // Wait  100 millisec before typing the next character
    }
  } else {
    charIndex -= 1;
    if (charIndex === -1) {
      direction = 1;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(nextStep, 1000); // Wait  1 sec before typing the next sentence
    } else {
      setTimeout(nextStep, 50); // Wait  50 millisec before erasing the next character
    }
  }
}
nextStep();

// PROJECT CARDS - projects Object array
let projects = [
  {
    name: "Mardi Grassss",
    description:
      "contant here - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
  {
    name: "Mardi Gras",
    description:
      "contant here - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
  {
    name: "Mardi Gras1",
    description: "contant here",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
  {
    name: "Mardi Gras2",
    description: "contant here",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
  {
    name: "Mardi Gras3",
    description: "contant here",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
  {
    name: "Mardi Gras4",
    description: "contant here",
    stack: "HTML, SAAS, JS, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
];

// PROJECT CARDS - Adding progects card to page

function showCards() {
  for (let i = 5; i > -1; i--)
    // for (let i = projects.length; i > -1; i--) ??????????????????????????????
    // let firstProject = projects.length;
    switch (i) {
      case 5:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>${projects[i].name}<span> Last
                                        Project</span></h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">                                                         <img src="img/icons/netlify.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                `;
        break;
      case 0:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>${projects[i].name}</h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">
                                <img src="img/icons/netlify.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                `;
        break;

      default:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>${projects[i].name}</h3>
                        <p>${projects[i].description}</p>
                        <hr>
                        <p>
                            <strong>Stack:</strong> <span class="w-date">${projects[i].stack}
                            </span><br>
                            <span> <strong>Project Field:</strong> ${projects[i].projectField}
                            </span>
                        </p>
                        <div class="icons">
                            <a href="${projects[i].repositoryUrl}" class="icon" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">
                                <img src="img/icons/netlify.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                `;

        break;
    }
}
showCards();

// Set form in session storage function

function setSessionStorage() {
  sessionStorage.setItem(
    "from-name",
    JSON.stringify(document.getElementById("from-name").value)
  );
  sessionStorage.setItem(
    "from-email",
    JSON.stringify(document.getElementById("from-email").value)
  );
  sessionStorage.setItem(
    "from-subject",
    JSON.stringify(document.getElementById("from-subject").value)
  );
  sessionStorage.setItem(
    "email-message",
    JSON.stringify(document.getElementById("email-message").value)
  );
}

// sendEmail() - on-succsess calling:
//setSessionStorage();
// setSuccessMessage();
//openPopup();
//Reset form;

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var templateParams = {
      from_name: document.getElementById("from-name").value,
      from_email: document.getElementById("from-email").value,
      message: document.getElementById("email-message").value,
      notes: "Check this out!",
    };

    emailjs.send("service_odczyjr", "template_johswnj", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        sessionStorage["submit"] = response.status;
        setSessionStorage();
        setSuccessMessage();
        openPopup();

        document.getElementById("contactForm").reset();
        // setModalSuccess();
        // document.getElementById("email-message").value;
      },

      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

// Open/Close - PopUp
let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

// PopUp message on "submit"
function setSuccessMessage() {
  console.log("function 3 called");
  document.getElementById("popup").innerHTML = `
                  <div class="success-icon"><i class="fas fa-check-circle"></i></div>
     <h4 id="message-title">Thank You
  ${JSON.parse(sessionStorage.getItem("from-name"))}!</h4>
  <p class="text-start">The following was sent:<br><br>
                         <b>Subject:</b> 
                         ${JSON.parse(
                           sessionStorage.getItem("from-subject")
                         )}<br><br>
                        <b>Message:</b><br>
                         ${JSON.parse(
                           sessionStorage.getItem("email-message")
                         )}</p><br>
                         <button class="close" type="button" onclick="closePopup()"></button>
  `;
}
