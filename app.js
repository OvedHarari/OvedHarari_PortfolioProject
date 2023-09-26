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
// console.log(currentYear);
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
    name: "Mind Your Own Business V2",
    description:
      "The is a convertion of 'Mind Your Own Business' project fome Frontend to a FULL-STACK project working with MongoDB",
    stack: "React.ts, Google APIs, Bootstrap, Node.js, MongoDB",
    projectField: "Full-Stack",
    repositoryUrl:
      "https://github.com/OvedHarari/mind_your_own_business_V2.git",
    websiteLink: "https://github.com/OvedHarari/mind_your_own_business_V2.git",
    websiteImg: "./img/projectPics/MYOB_V2.png",
  },
  {
    name: "Mind Your Own Business",
    description:
      "The is a Frontend project of a platform that connects businesses with potential customers in a user-friendly way.",
    stack: "React.ts, Google APIs, Bootstrap, JSON DB",
    projectField: "Front-End",
    repositoryUrl:
      "https://github.com/OvedHarari/mind_your_own_business.git",
    websiteLink: "https://github.com/OvedHarari/mind_your_own_business.git",
    websiteImg: "./img/projectPics/MYOB.png",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio is a a compilation of professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences.",
    stack: "HTML, SAAS, JavaScript",
    projectField: "Front-End",
    repositoryUrl:
      "https://github.com/OvedHarari/OvedHarari_PortfolioProject.git",
    websiteLink: "https://oved-harari-portfolio.netlify.app",
    websiteImg: "./img/projectPics/portfolio.png",
  },
  {
    name: "Weather App",
    description:
      "Weather App allows you to search for the current weather in Cities around the world",
    stack: "HTML, CSS, JavaScript, REST API",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/WeatherApp.git",
    websiteLink: "https://oved-harari-weatherapp.netlify.app",
    websiteImg: "./img/projectPics/weatherApp.png",
  },
  {
    name: "My Account",
    description:
      "My Account is a tool that helps you keep track on your Bank acount balance",
    stack: "HTML, JavaScript, OOP, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/ACCOUNT.git",
    websiteLink: "https://ovedh-myaccount.netlify.app",
    websiteImg: "./img/projectPics/myAccount.png",
  },
  {
    name: "Electrix Shop",
    description: "Electrix Shop is an example of ecommers store",
    stack: "HTML, JavaScript",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/electrixshop.git",
    websiteLink: "https://oved-harari-electrixshop.netlify.app",
    websiteImg: "./img/projectPics/electrixShop.png",
  },
  {
    name: "ManageU",
    description: "ManageU is a tool to keep tracking your daily Tasks",
    stack: "HTML, TypeScript, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/ManageU.git",
    websiteLink: "https://ovedh-manageu.netlify.app/",
    websiteImg: "./img/projectPics/manageU.png",
  },
  {
    name: "Mardi Gras",
    description:
      "Mardi Gras New Orleans.<br>Mardi Gras is about music, parades, picnics, floats and excitement. It's one big holiday in New Orleans!",
    stack: "HTML, SAAS, JavaScript, Bootstrap",
    projectField: "Front-End",
    repositoryUrl: "https://github.com/OvedHarari/MardiGrasProject.git",
    websiteLink: "https://ovedh-mardigras-projecs.netlify.app",
    websiteImg: "./img/projectPics/mardiGrasProject.png",
  },
];

// PROJECT CARDS - Adding progects card to page

function showCards() {
  for (let i = 0; i < projects.length; i++)
    // for (let i = projects.length; i > -1; i--) ??????????????????????????????
    // let firstProject = projects.length;
    switch (i) {
      case 0:
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
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">  
                            <i class="fab fa-edge-legacy"></i>                                                       
                            </a>
                        </div>
                    </div>
                </div>
                `;
        break;
      case projects.length - 1:
        document.getElementById("portfolioCards").innerHTML += `
        
        <div class="portfolio-item">
                    <div class="image">
                        <img src="${projects[i].websiteImg}" alt="">
                    </div>
                    <div class="hover-items">
                        <h3>${projects[i].name}<span> First
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
                            <a href="${projects[i].websiteLink}" class="icon" target="_blank">
                               <i class="fab fa-edge-legacy"></i> 
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
                                <i class="fab fa-edge-legacy"></i> 
                            </a>
                        </div>
                    </div>
                </div>
                `;

        break;
    }
}
showCards();

// Set contact form in sessionStorage function

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
      subject: document.getElementById("from-subject").value,
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
${JSON.parse(sessionStorage.getItem("from-subject"))}<br><br>
<b>Message:</b><br>
${JSON.parse(sessionStorage.getItem("email-message"))}</p><br>
<button class="close" type="button" onclick="closePopup()"></button>
  `;
}
