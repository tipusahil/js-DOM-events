/* html e javascript diye kaj korar

// 25-2 Add onclick handler directly or via javascript

*/

//---------------------------- option 1 : add on directly on html element/tag
// <button onclick="console.log('you clicked btn 2')">button 2</button>


// ----------------------------option 2: add onclick function on html element/tag :
// <button onclick="giveAzureColor()"> click me & make colorful</button>
function giveAzureColor() {
  document.body.style.backgroundColor = 'rgb(147, 249, 246)';
}

/* ----------------------------option 3: add by function name
<button id="blue_btn">make blue</button> */
let getBlueButton = document.getElementById('blue_btn');
getBlueButton.onclick = makeBlue;
// getBlueButton.onclick = makeBlue();
//  ekane makeBlue er sate () bracket ta dewar karone document age thekei blue hoye thakbe, & click korle ekbar kaj korar pore 2nd time click krle kaj korbena,.tai ()ei bracket dewa jabena. rot

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}
/* option : 3 details: 
 blue_btn ta ke js e select kora hoise getElementById er madde.taw oi btn er id name diye. erpore seta k  (getBlueButton)ei name ekta variable declare kore oi variable abr onclick event ta add kora hoise,  setar modde makeblue function er vitorer program ta dewa hoise. jate user btn e click korlei onclick event ta trigger hobe & oi function er kaj ta hobe, tai function name dewa jabe,kintu call kora jabena. ortat function name er sate () ei bracket gulo dewa jabena ,dile function ta call hoye jabe, & function er vitorer program ta ghote/run hoye jabe.
 */


/* --------------------------option 4: js e btn ta select kore then direct ekta function boshai dewa. 
<button id="purple_btn">make purple</button>   */
let purpleButton = document.getElementById('purple_btn');

purpleButton.onclick = function makePurlpleColor() {

  document.body.style.backgroundColor = 'purple';
}


//   btn 5 e click korle niser p tag e output dekanur system 1 :
//   btn 5 e click korle p tag e dekabe j btn 5 e click kora hoise, etar program:
let btn_5 = document.getElementById('button_5');
btn_5.onclick = function () {
  document.getElementById('output_p').innerHTML = 'you clicked button 5';
};


// -----------------------------------option 5: for addEventListener 
// 2vabe event listenre er modde function dewa jai.jmn: 
// annonimous function er maddome & alada kore ekta function banai sei funciton er name event list ener er 2nd value hisebe diye,without bracket.
//addEventListener adding system   1:
let event1_button = document.getElementById('add_eventLR');

event1_button.addEventListener('click', add_event);
function add_event() {
  document.body.style.backgroundColor = 'red';
}




//addEventListener adding system   2:   
let event2 = document.querySelector('#add_event_btn_2');
event2.addEventListener('click', function () {
  // addEventListener er value  2 er jaigai name chara annonimous function pass.
  document.body.style.backgroundColor = 'pink';
  innerHTML = 'you clicked event2 button';
})




//  -----------------------------------------option 6:
//  most most most popular ,ei event add korar ei niom tai beshi use kora hobe. 
document.getElementById('popular_event_add').addEventListener('click', function () {
  document.body.style.backgroundColor = 'grey';
});
