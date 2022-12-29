
const container_tap = document.querySelector(".card_wrapper");

function open_card(id) {
  for (let i = 0; i < mydata.length; i++) {
    let data_looped = mydata[i];
    if (data_looped.nim == id) {
      let card_detail_data = `
  <div class="card_detail_img" id="link1"></div>
    <div class="card_detail_wrapper">
      <div class="card_detail_inner">
        <img src="${data_looped.image}" alt="bg" />
        <h3>${data_looped.title}</h3>
        <h4>${data_looped.quotes}</h4>
        
        <h4 style="margin-top:.5rem;">
          ~ Quotes of Life ~
        </h4>
      </div>
    </div>
  `;
      container2.innerHTML += card_detail_data;
      a = data_looped.image_zoom;
      const link1 = "url(" + a + ")";
      document.getElementById("link1").style.backgroundImage = link1;
    }
  }

  container2.classList.add("show");  
}

function close_card() {
  container2.classList.remove("show");
  const card_one = document.querySelector(".card_detail_img")
  const card_two = document.querySelector(".card_detail_wrapper")
  const card_three = document.querySelector(".card_detail_inner")
  card_one.remove()
  card_two.remove()
  card_three.remove()  
}