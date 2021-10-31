// вставка на сайт з лабами

window.addEventListener('click', function(event){

  if(event.target.hasAttribute('data-lab')){
    console.log("Klik Laba");
    // Видаляється опис лаби на сторінці
    document.querySelector('.dell').remove();

    // знаходимо частину коду з класом "vstavka" куди будемо вставляти
    const mistceVstavky =  document.querySelector('.vstavka');
    // перевірка на кнопку яку натискають
    var a=0
    if(event.target.dataset.lab ==="1"){
      a=1;
    }
    if(event.target.dataset.lab ==="2"){
      a=2;
    }
    if(event.target.dataset.lab ==="3"){
      a=3;
    }
    if(event.target.dataset.lab ==="4"){
      a=4;
    }
    console.log(a)
    //шаблон


// FETCH

    const URL= "labs.json";
    let res;
    fetch(URL)
    .then(response=> response.json())
    .then(r5=>{
      res = r5; 
     //console.log(res);
      vstavka(res)
      mozhna_zdaty(res);
    })
      .catch(err=>alert("Сталася неочікувана помилка =( ", err))

      const vstavka = (response) =>{
    
        const shablon = `
        
        <div class="block2 dell" id="labscontent">
        <div class="flexel" id="names">
            <div class="flexel2" id="labname">
                <h1>${res[a].name}</h1>
            </div>
            <div class="flexel2" id="labstatus">
                <h1>Час роботи вийшов</h1>
            </div>
            <div class="flexel2" id="labdeadline">
                <h1>${res[a].to_time}</h1>
            </div>
        </div>
        <div class="differ smalldiffer"></div>
        <div class="labbody">
            <div class="flexel" id=labinfo>
                <h2>Опис роботи:</h2>
                ${res[a].info}
                <ol>
                  <li>${res[a].info_steps[0]}</li>
                  <li>${res[a].info_steps[1]}</li>
                  <li>${res[a].info_steps[2]}</li>
                  <li>${res[a].info_steps[3]}</li>
                  <li>${res[a].info_steps[4]}</li>
                </ol>
            </div>
            <div class="" id="labinteract">
                <div class="insidelabinteract insidelabinteracttop">
                    <div class="flexellabint" id="labdownload">
                        <button class="downloadbutton"><img class="downloadimg" src="download.142aca94.png">Download</button>
                    </div>
                    <div class="flexellabint" id="labyoutube">
                        <iframe class="labvideo" src="${res[a].video_link}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="insidelabinteract">
                    <div class="flexellabint" id="labgit">
                        <a href="${res[a].git_link}" target="_blank"><img class="labGitHub" src="GitHub.6cdce7f1.png"></a>
                    </div>
                    <div class="flexellabint" id="labscreen">
                        <img class="labscreenimg" src="${res[a].photo_link}">
                    </div>
                </div>
                
            </div>
        </div>
        
        
    </div>`
    
      mistceVstavky.insertAdjacentHTML('beforeend', shablon); 
    }

    
    

  }

})



//To_check if laby mozhna zdaty
//FETCH she raz pro vsyiak vypadok

let mozhna_sche_zdaty = [0, 0, 0, 0, 0] // IF mozhna_sche_zdaty[i+1] = 1  => № lab, yaki mozhna zdaty
let nearest_deadline = 0 // var with the nearest deadline
let ii = 0 //Its number (ID in a JSON)

// FETCH
const URL= "labs.json";
let res2;
fetch(URL)
.then(response=> response.json())
.then(r6=>{
  res2 = r6; 
 //console.log(res2);
  mozhna_zdaty(res2);  
  })
  .catch(err=>alert("Сталася неочікувана помилка =( ", err))

  const mozhna_zdaty = (response) => {
    //console.log(new Date());
    for (var i = 0; i < res2.length; i++){
      //console.log(new Date(res[i].time));
      if(new Date(res2[i].time) > new Date()){ //IF Deadline > Present time => laba can be submitted in time
        mozhna_sche_zdaty[i] = 1;
        if (nearest_deadline == 0){ //The first deadline which could be submitted, nothing to compare at the moment
          nearest_deadline = res2[i];
          ii = i;
        }
        else if(new Date(nearest_deadline.time) > new Date(res2[i].time)){  //A Search: I just want to find the NEAREST laba and then push it to the logo or into smth else 
          nearest_deadline = res2[i];
          ii = i;
        }
      }
      console.log(mozhna_sche_zdaty);
      console.log(nearest_deadline);
    }
    next_laba.innerHTML = `<h2> Наступна лабораторна №${ii + 1} до ${nearest_deadline.to_time} </h2>`; //Vstavka nearest DEADLINE in logo (index.html)
    console.log(nearest_deadline.to_time)
  }