
const container = document.querySelector(".card");
const container2 = document.querySelector(".card_detail");
const searchBar = document.querySelector("#searchBar");
const navbar = document.querySelector("#navbar");



searchBar.addEventListener("keyup", (e) => {
  globalThis.value = e.target.value;  
  let mydatafiltered = searchdata(value, mydata);
  card_build(mydatafiltered);
});

card_build(mydata);

function searchdata(value, data) {
  let filtered = [];

  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase();  
    let name = data[i].title.toLowerCase();
    let nim = data[i].nim;

    if (name.includes(value) || nim.includes(value)) {
      filtered.push(data[i]);
    }
  }
  return filtered;
}

function card_build(data) {
  let number = 1;
  container.innerHTML = "";
  
  for (let i = 0; i < data.length; i++) {
    const data_looped = data[i];
    let card_data = `
    <div class="card_wrapper" onclick="open_card(${data_looped.nim})">
        <div class="image_wrapper">
          <img src="${data_looped.image}"/>
        </div>
        <h4>${number}</h4>
        <h4>${data_looped.title}</h4>        
        <h3>${data_looped.jabatan}</h3>
        <p style="display:none;">${number++}</p>
      </div> 
    `;
    container.innerHTML += card_data;
  }
}



window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.boxShadow = "0px 0px 18px rgba(0, 0, 0, 0.116)";
  } else {
    navbar.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.116)";
  }
}

