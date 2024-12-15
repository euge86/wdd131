document.addEventListener('DOMContentLoaded', function() {

  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
  
  
  function generateCalendar() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    
    const daysInMonth = new Date(2024, 2, 0).getDate(); 
    const calendar = document.getElementById('calendar');
    
    
    if (!calendar) return;

    let month = new Date().getMonth(); 
    let year = new Date().getFullYear(); 
    calendar.innerHTML = `<h3>${monthNames[month]} ${year}</h3>`;
    
    let table = "<table>";
    table += "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

    for (let day = 1; day <= daysInMonth; day++) {
      let date = new Date(year, month, day);
      let dayOfWeek = date.getDay(); 

      if (day === 1 && dayOfWeek !== 0) {
        table += "<td colspan='" + dayOfWeek + "'></td>";
      }

      table += `<td class="day" onclick="showEventDetails('${day}')">${day}</td>`;


      if (dayOfWeek === 6) {
        table += "</tr><tr>";
      }
    }

    if (new Date(year, month, daysInMonth).getDay() !== 6) {
      table += "<td colspan='" + (6 - new Date(year, month, daysInMonth).getDay()) + "'></td>";
    }

    table += "</tr></table>";
    calendar.innerHTML += table;
  }

  function showEventDetails(day) {
    alert(`You clicked on day ${day}. Here are the events for this day (you can expand this functionality).`);
  }

  generateCalendar();


  const form = document.getElementById('join-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const genre = document.getElementById('genre').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !genre || !message) {
        alert('Please fill out all fields.');
      } else {
        alert('Thank you for joining Mendoza Reads! We will get in touch with you soon.');
        this.reset(); 
      }
    });
  }
});































































































































