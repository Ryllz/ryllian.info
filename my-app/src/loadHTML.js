function loadHTML(){
    fetch('engagement_ring_box.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('test').innerHTML = text);
  }