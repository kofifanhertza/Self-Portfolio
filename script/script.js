let experiences = [
    {
        title : "AI Engineer Intern",
        period : "September 2022 - January 2023",
        description: "I have an experience as an AI Engineer intern under Smart City and Community Inovation Center ITB. Me and my team created data processing pipeline to extract data from road damage detection model",
        images : [ 'https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/gif/Lubang.gif', 'https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/image/experience/846933_0.jpg','https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/gif/Retak_Kulit_Buaya.gif']
    },
    
    
    {
        title : "Data Scientist Intern",
        period : "April 2023 - Present",
        description : "Currently I'm working as A Data Scientist on Telkom Indonesia. I managed to create multiple Tableau Dashboard that helps in business decision making",
        images : ['https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/image/experience/DS_1.png','https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/image/experience/DS_2.png']
    }
]

let currentExperience = 0;
let currentImage = 0;

function updateExperience() {
  document.getElementById('jobTitleText').innerText = experiences[currentExperience].title;
  document.getElementById('jobPeriod').innerText = "Period : " + experiences[currentExperience].period;
  document.getElementById('jobDesc').innerText = experiences[currentExperience].description;
}

function updateImage() {
  document.getElementById('slideshow').src = experiences[currentExperience].images[currentImage];
}

document.getElementById('jobPrevButton').addEventListener('click', function() {
    currentExperience = (currentExperience - 1 + experiences.length) % experiences.length;
    currentImage = 0;
    updateExperience();
    updateImage();
  });
  
document.getElementById('jobNextButton').addEventListener('click', function() {
    currentExperience = (currentExperience + 1) % experiences.length;
    currentImage = 0;
    updateExperience();
    updateImage();
  });

setInterval(function() {
  currentImage = (currentImage + 1) % experiences[currentExperience].images.length;
  updateImage();
}, 3000);


let portfolios = [
  {
    title: "Magrib Runner",
    tech: "Tech Stack: C#, Unity",
    description: "Maghrib Runner is an endless runner side scrolling mobile game that are developed using Unity Engine",
    images: ["https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/image/portfolio/mr.jpg"],
    repo: "https://kofifanhertza.itch.io/maghrib-runner"
  },
  {
    title: "Hotel Price Prediction Model",
    tech: "Tech Stack: Python",
    description: "Built a predictive model employing the Random Forest Regressor algorithm to estimate hotel prices through the analysis of amenities and ratings",
    images: ['https://storage.googleapis.com/bucket_project_dicoding_intricate-idiom-402915/image/portfolio/hotel.jpg'],
    repo: "https://github.com/kofifanhertza/Hotel-Price-Prediction.git"
  }
];

let currentPortfolio = 0;
let currentPortfolioImage = 0;

function updatePortfolio() {
  
  document.getElementById('portfolioTech').innerText = portfolios[currentPortfolio].tech;
  document.getElementById('portfolioDescription').innerText = portfolios[currentPortfolio].description;
  document.getElementById('portfolioRepoLink').href = portfolios[currentPortfolio].repo;
}

function updatePortfolioImage() {
  document.getElementById('portfolioSlideshow').src = portfolios[currentPortfolio].images[currentPortfolioImage];
}

document.getElementById('portfolioDropdown').addEventListener('change', function() {
  currentPortfolio = this.value;
  currentPortfolioImage = 0;
  updatePortfolio();
  updatePortfolioImage();
});

function populateDropdown() {
  const dropdown = document.getElementById('portfolioDropdown');
  portfolios.forEach((portfolio, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.text = portfolio.title;
    dropdown.add(option);
  });
}

populateDropdown();

setInterval(function() {
  currentPortfolioImage = (currentPortfolioImage + 1) % portfolios[currentPortfolio].images.length;
  updatePortfolioImage();
}, 3000);
