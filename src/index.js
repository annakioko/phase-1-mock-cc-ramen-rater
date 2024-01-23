// write your code here
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");


fetch(`http://localhost:3000/ramens`)
  .then((response) => response.json())
  .then((ramens) => {
    ramens.forEach((ramen) => {
     
      const img = document.createElement("img");
      img.src = ramen.image;
      img.dataset.id = ramen.id; 
      ramenMenu.appendChild(img);

      img.addEventListener('click', () => {
        fetchRamenDetails(ramen.id);
      });
    });
  });

function fetchRamenDetails(id) {
  fetch(`http://localhost:3000/ramens/${id}`)
    .then((res) => res.json())
    .then((ramen) => {
     
      ramenDetail.querySelector('.detail-image').src = ramen.image;
      ramenDetail.querySelector('.name').innerText = ramen.name;
      ramenDetail.querySelector('.restaurant').innerText = ramen.restaurant;

      document.getElementById('comment-display').innerText = ramen.comment;
      document.getElementById('rating-display').innerText = ramen.rating;
    })
    .catch((error) => console.error('Error:', error));
}


 const newRamenForm = document.getElementById("new-ramen");

    newRamenForm.addEventListener("submit", (event) => {
       
        event.preventDefault();

        const newName = document.getElementById("new-name").value;
        const newRestaurant = document.getElementById("new-restaurant").value;
        const newImage = document.getElementById("new-image").value;
        const newRating = document.getElementById("new-rating").value;
        const newComment = document.getElementById("new-comment").value;
        const newRamenImage = document.createElement("img");
        newRamenImage.src = newImage;

        newRamenImage.dataset.name = newName;
        newRamenImage.dataset.restaurant = newRestaurant;
        newRamenImage.dataset.rating = newRating;
        newRamenImage.dataset.comment = newComment;
        newRamenImage.dataset.id = newId

        
        ramenMenu.appendChild(newRamenImage);

        newRamenForm.reset();
    });


