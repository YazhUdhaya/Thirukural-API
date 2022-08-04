//https://api-thirukkural.vercel.app/api?num=133

let btnClick = document.getElementById("btnClick");
btnClick.addEventListener('click', getThirukralData);

async function getThirukralData() {
    let kuralNum = document.getElementById("kuralNum").value;

    let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNum}`);
    let data = await response.json();

    // console.log(data);
    // console.log(data.chap_tam);
    // console.log(data.line1);
    // console.log(data.line2);
    // console.log(data.chapgrp_tam);
    // console.log(data.sect_tam);
    // console.log(data.tam_exp);
    // console.log(data.chap_eng);
    // console.log(data.chapgrp_eng);
    // console.log(data.sect_eng);
    // console.log(data.eng);
    // console.log(data.eng_exp);


    let kuralDetails = document.getElementById("kuralDetails");
kuralDetails.innerHTML = `<div class="col-lg-12 col-md-12">
    <div class="kuralTamil">
      <h4 class="title"><b>அதிகாரம்</b> : ${data.chap_tam}</h4>
      <p class="text"><b>குறள்</b> : ${data.line1}</p>
      <p class="text">${data.line2}</p>
      <p class="text"><b>இயல்</b> : ${data.chapgrp_tam}</p>
      <p class="text"><b>பால்</b> : ${data.sect_tam}</p>
      <p class="text"><b>உரை</b> : ${data.tam_exp}</p>
  </div>
  </div>

  <div class="col-lg-12 col-md-12">
    <div class="kuralEng">
      <h4 class="title"><b>Chapther</b> : ${data.chap_eng}</h4>
      <p class="text"><b>Chapter Group</b> : ${data.chapgrp_eng}</p>
      <p class="text"><b>Section</b> : ${data.sect_eng}</p>
      <p class="text"><b>Kural</b> : ${data.eng}</p>
      <p class="text"><b>Explanation</b> : ${data.eng_exp}</p>
      </div>
  </div>`


   
}