$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    console.log('Quote Slide');
    loadDocQuote();
});
$('#carouselExampleControls2').on('slide.bs.carousel', function (e) {
  console.log('Video Slide');
  loadDocVideo();
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
  let videoItems = '<div class="carousel-inner">';

  function loadDocVideo() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "smile-school-video.txt", true);
    console.log('GET');
    xhttp.send();
    console.log('SEND');
  }

  let videoData = [
      {
        "id": 1,
        "title": "Diagonal Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_1.jpg",
        "author": "Phillip Massey",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_1.jpg",
        "star": 4,
        "duration": "8 min",
        "topic": "Intermediate",
        "views": 120,
        "published_at": 1586734529,
        "keywords": [
            "Face",
            "Diagonal"
        ]
      },
      {
        "id": 2,
        "title": "Sad Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_2.jpg",
        "author": "Nannie Lawrence",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_2.jpg",
        "star": 5,
        "duration": "14 min",
        "topic": "Novice",
        "views": 420,
        "published_at": 1586734429,
        "keywords": [
            "Sad",
            "Face"
        ]
      },
      {
        "id": 3,
        "title": "Natural Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_3.jpg",
        "author": "Bruce Walters",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_3.jpg",
        "star": 2,
        "duration": "21 min",
        "topic": "Novice",
        "views": 310,
        "published_at": 1586732529,
        "keywords": [
            "Face",
            "Natural",
            "Beginner"
        ]
      },
      {
        "id": 4,
        "title": "Happy Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_4.jpg",
        "author": "Phillip Massey",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_1.jpg",
        "star": 4,
        "duration": "24 min",
        "topic": "Expert",
        "views": 13,
        "published_at": 1586724529,
        "keywords": [
            "Face",
            "Happy"
        ]
      },
      {
        "id": 5,
        "title": "None-expressive Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_2.jpg",
        "author": "Nannie Lawrence",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_2.jpg",
        "star": 3,
        "duration": "9 min",
        "topic": "Intermediate",
        "views": 29,
        "published_at": 1586732529,
        "keywords": [
            "Face",
            "Expression"
        ]
      },
      {
        "id": 6,
        "title": "Cry and Smile",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_4.jpg",
        "author": "Henry Hughes",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_4.jpg",
        "star": 5,
        "duration": "18 min",
        "topic": "Expert",
        "views": 321,
        "published_at": 1586724529,
        "keywords": [
            "Face",
            "Cry"
        ]
      },
      {
        "id": 7,
        "title": "Breath first",
        "sub-title": "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.",
        "thumb_url": "https://smileschool-api.s3.amazonaws.com/thumbnail_1.jpg",
        "author": "Phillip Massey",
        "author_pic_url": "https://smileschool-api.s3.amazonaws.com/profile_1.jpg",
        "star": 4,
        "duration": "16 min",
        "topic": "Novice",
        "views": 931,
        "published_at": 1586734529,
        "keywords": [
            "Breath",
            "Body"
        ]
      }
    ];

  // Format the items for the video carousel
  videoData.forEach((item, index) => {
    videoItems += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
          <div class="card">
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
                class="align-self-center play-overlay"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title font-weight-bold">
                ${item.title}
              </h5>
              <p class="card-text text-muted">
                ${item['sub-title']}
              </p>
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
                <div class="rating">
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_on.png"
                    alt="star on"
                    width="15px"
                  />
                  <img
                    src="images/star_off.png"
                    alt="star on"
                    width="15px"
                  />
                </div>
                <span class="main-color">${item.duration}</span>
              </div>
            </div>
          </div>
        </div> 
      </div>
    `;
  });

  document.querySelector('.carousel2').innerHTML = videoItems;
