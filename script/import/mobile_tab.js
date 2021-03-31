//IMPORT TAB FROM EXPORT SCRIPT
import Tab from "../export/mobile_tab.js";

//CREATE OBJECTS FOR TAB
var tab01 = new Tab("New Cars","images/tab/newcar.webp","with exciting offers","newcar.html",'tab01');
var tab02 = new Tab("New Cars","images/tab/usedcar.webp","pre-owned cars for sale","usedcar.html",'tab02');
var tab03 = new Tab("New Cars","images/tab/sellcar.webp","at the best price","sellcar.html",'tab03');
var tab04 = new Tab("New Cars","images/tab/compare.webp","and find the right car","compare.html",'tab04');

//CREATE 
var tab_arr = [tab01,tab02,tab03,tab04];

//ACCESS MOBILE TAB ARTICLE 	FROM INDEX HTML FILE

document.querySelector('.mobile_tab').innerHTML+=`
   <div class="container-fluid">
        <div class="row">
		      
		</div>
   </div>
`;

for(var i in tab_arr){
	document.querySelector(".mobile_tab>.container-fluid>.row").innerHTML+=`
	   <div class="col-md-6">
	        <div class="${tab_arr[i].clas}">
					  <a href="${tab_arr[i].link}">
					  <p class="tab_name">${tab_arr[i].name}</p>
					  <p class="get_name">${tab_arr[i].get} →</p>
					 
					  <img src="${tab_arr[i].img}" class="img-responsive">
				  </a>
			</div>
	   </div>
	`;
	
}