$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    console.log('Quote Slide');
    loadDocQuote();
});

function loadDocQuote() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "smile-school-api.txt", true);
  console.log('GET');
  xhttp.send();
  console.log('SEND');
}

let slideData = [
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
   
  let slideItems = '<div class="carousel-inner">';
   
  slideData.forEach((item, index) => {
    slideItems += `
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
  document.querySelector('.carousel-inner').innerHTML = slideItems;

  //THIS IS THE VIDEO SECTION
  function getVideos() {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
      method: "GET",
      success: function(data) {
        data.forEach(function(item) {
          var videos = '';
          videos += `
                    <img
                      src="${item.thumb_url}"
                      class="card-img-top"
                      alt="Video thumbnail"
                    />
                    <div class="card-img-overlay text-center">
                      <img
                        src="images/play.png"
                        alt="Play"
                        width="64px"
                        class="align-self-center m-auto play-overlay"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">${item.title}</h5>
                      <p class="card-text text-muted">${item['sub-title']}</p>
                      <div class="creator d-flex align-items-center">
                        <img
                          src="${item.author_pic_url}"
                          alt="Creator of
                          Video"
                          width="30px"
                          class="rounded-circle"
                        />
                        <h6 class="pl-3 m-0 main-color">${item.author}</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating d-inline-flex">`
          for (i = 0; i < 5; i++) {
            if (i < item.star) {
              videos += `
                          <img
                            src="images/star_on.png"
                            alt="star on"
                            width="15px"
                            height="15px"
                          />`;
            }
            else {
              videos += `
                          <img
                            src="images/star_off.png"
                            alt="star on"
                            width="15px"
                            height="15px"
                          />`;
            }
          }

          videos += `
                        </div>
                        <span class="main-color">${item.duration}</span>
                      </div>
                    </div>`;

          var card = $('<div>').addClass('card p-3').html(videos);
          $("#video-carousel").append(card);
        });
        $("#video-loader").hide();

        $("#video-carousel").slick({
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: $('.carousel-control-prev'),
          nextArrow: $('.carousel-control-next'),
          responsive: 
          [
            {
              breakpoint: 992,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 576,
              settings: { slidesToShow: 1 }
            }
          ]
        });
        $("#video-loader").hide();
        $("#video-carousel").removeClass("d-none");
      },
      error: function() { $("#video-loader").replaceWith('<h1 style="margin: auto; color: white;">UH OH</h1>'); }
    });
  }


  $(document).ready(function() {
    getVideos();
  });
