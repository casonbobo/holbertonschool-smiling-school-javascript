$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    console.log('Slide');
    loadDoc();
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
         
      }
  };
  xhttp.open("GET", "smile-school-api.txt", true);
  console.log('GET');
  xhttp.send();
  console.log('SEND');
}

let data = [
  {
      "id": 1,
      "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_5.jpg",
      "name": "John Doe",
      "title": "Founder of SmileSchool",
      "text": "Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!"
  },
  {
      "id": 2,
      "pic_url": "https://smileschool-api.s3.amazonaws.com/profile_2.jpg",
      "name": "Nannie Lawrence",
      "title": "Best \"little smile\" 2017",
      "text": "ThoseLorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, sed do eiusmod."
  }
 ];
   
  let items = '<div class="carousel-inner">';
   
  data.forEach((item, index) => {
    items += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <div class="row mx-auto align-items-center">
            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img src="${item.pic_url}" class="d-block align-self-center" alt="${item.name}">
            </div>
            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                <p class="text-white">${item.text}</p>
                <h4 class="text-white font-weight-bold">${item.name}</h4>
                <span class="text-white">${item.title}</span>
              </div>
            </div>
          </div>
        </div>
    `;
  });


   // Add items to the carousel
   document.querySelector('.carousel-inner').innerHTML = items;
