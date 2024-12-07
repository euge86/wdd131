const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

//Hambutton
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Mendoza Argentina",
      location: "Mendoza, Argentina",
      dedicated: "2024, September, 22",
      area: 21999,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739.jpg"  
    },
    {
      templeName: "Quito Ecuador",
      location: "Quito, Ecuador",
      dedicated: "2022, November, 20",
      area: 36780,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31203.jpg"
    },
    {
      templeName: "Hamilton New Zealand",
      location: "Hamilton, New Zealand",
      dedicated: "1958, April, 20-22",
      area: 45251,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744.jpg"

    }
  ];

  function loadCSS(file) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
  }
  
  window.onload = function() {
    loadCSS('/styles/filtered-temples.css');
    loadCSS('/styles/filtered-temples-large.css');
  };

  function filterTemples(filter) {
    const templeCardsContainer = document.getElementById('temple-cards-container');
    templeCardsContainer.innerHTML = ''; 
    
    let filteredTemples = temples;
  
    if (filter === 'Old') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    } else if (filter === 'New') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    } else if (filter === 'Large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'Small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
    }
  
    filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.classList.add('temple-card');
  
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area} sq ft</p>
      `;
  
      templeCardsContainer.appendChild(templeCard);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    filterTemples('Home');
  });
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const filter = link.textContent.trim(); 
      filterTemples(filter); 
    });
  });































