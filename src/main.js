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
    const shablon = `<div class="block2 dell" id="labscontent">
    <div class="flexel" id="names">
        <div class="flexel2" id="labname">
            <h1>Laba hahaha (Зробити щось там)</h1>
        </div>
        <div class="flexel2" id="labstatus">
            <h1>Час роботи вийшов</h1>
        </div>
        <div class="flexel2" id="labdeadline">
            <h1>До 01.01.2001 1:00</h1>
        </div>
    </div>
    <div class="differ"></div>
    <div class="labbody">
        <div class="flexel" id=labinfo>
            <h2>Опис роботи:</h2>
            Далi крутий опис Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sequi consequatur veniam voluptas nostrum? Beatae atque earum, vel, iure asperiores quas nesciunt eaque sed laboriosam enim, tempore quos debitis qui.
            <ol>
                <li>zavdanna</li>
                <li>zavdanna</li>
                <li>zavdanna</li>
                <li>zavdanna</li>
                <li>zavdanna</li>
                <li>zavdanna</li>
            </ol>
        </div>
        <div class="" id="labinteract">
            <div class="insidelabinteract">
                <div class="flexellabint" id="labdownload">
                    <button class="downloadbutton"><i class="labdownload"><img class="downloadimg" src="img/download.png">  Download</i></button>
                </div>
                <div class="flexellabint" id="labyoutube">
                    <iframe class="labvideo" src="https://www.youtube.com/embed/9WjXGsymT5M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="insidelabinteract">
                <div class="flexellabint" id="labgit">
                    <a href="https://github.com/RomanMykolaichuk/wd2021/tree/LectionFetchAPI" target="_blank"><img class="labGitHub" src="img/GitHub.png"></a>
                </div>
                <div class="flexellabint" id="labscreen">
                    <img class="labscreenimg" src="img/screen.png">
                </div>
            </div>
            
        </div>
    </div>
    
    
</div>`

    
    mistceVstavky.insertAdjacentHTML('beforeend', shablon)

  }

})





//----------------------------------------------------------------------------------
// to see a calendar with weeks starts by Monday look here: https://codepen.io/jacknumber/pen/RWLyQW

// function calendar(params) {
//     var days_labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
//         months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     // var days_labels = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
//     //     months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
//     var days_in_month = getDaysInMonth(params.month, params.year),
//         first_day_date = new Date(params.year, params.month, 1),
//         first_day_weekday = first_day_date.getDay();
    
//     var prev_month = params.month == 0 ? 11 : params.month - 1,
//         prev_year = prev_month == 11 ? params.year - 1 : params.year,
//         prev_days = getDaysInMonth(prev_month, prev_year);
    
//     // calendar header
//     var html = '<h2>' + months_labels[params.month] + ' ' + params.year + '</h2>';
    
//     function getDaysInMonth(month, year) {
//       // 0 = last day of the previous month
//       return new Date(year, month + 1, 0).getDate();
//     }
    
//     // calendar content
//     html += '<table class="calendar-table">';
    
//     // week days labels
//     html += '<tr class="week-days">';
//     for (var i = 0; i <= 6; i++) {
//       html += '<td class="day">';
//       html += days_labels[i];
//       html += '</td>';
//     }
//     html += '</tr>';
    
//     var w = 0; // week day
//     var n = 1; // next days date
//     var c = 1; // current date
    
//     // dates loop
//     for (var i = 0; i < 6*days_labels.length; i++) {
//       if (w == 0) {
//         // first week's day
//         html += '<tr class="week">';
//       }    
      
//       if (i < new Date(params.year, params.month, 1).getDay()) {
//         // previous month's day
//         html += '<td class="day other-month">' + (prev_days - first_day_weekday + i + 1) + '</td>';
//       } else if (c > days_in_month) {
//         // next month's day
//         html += '<td class="day other-month">' + n + '</td>';
//         n++;
//       } else {
//         // current month's day
//         var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
//         var display_date = new Date(params.year, params.month, c);
//         html += '<td class="day" title="' + display_date.toLocaleDateString('en-GB', options) + '">' + c + '</td>';
//         c++;
//       }
      
//       if (w == days_labels.length - 1) {
//         // last week's day
//         html += '</tr>';
//         w = 0;
//       } else {
//         w++;
//       }
//     }  
  
//     html += '</tr>'; 
//     return html;
//   }
  
//   var now = new Date();
//   var params = {
//     month: now.getMonth(),
//     year: now.getFullYear()
//   };
//   document.getElementById('calendar').innerHTML = calendar(params);

//FETCH

let URL1 = "http://localhost:1234/labs.json"

let res1

function GetData(URL1){
  fetch(URL1)
    .then((response) => {
      return response.json()
    })
    .then((fetch_res1) => {  
      //alert(fetch_res1)
      res1 = fetch_res1
      vstavka(res1)

  })
  .catch(err=>alert("Сталася неочікувана помилка =( ", err))
}

GetData(URL1)

const vstavka = (response) => {

  console.log(res1) //Zminna z lab1, lab2, lab3, lab4, lab5


}