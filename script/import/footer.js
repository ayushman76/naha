//IMPORT FOOTER FROM EXPORT SCRIPT
import Footer from "../export/footer.js";

//CREATE OBJECTS FOR CLASS Footer

var tab01 = new Footer('About us','#');
var tab02 = new Footer('FAQs','#');
var tab03 = new Footer('Privacy Policy','#');
var tab04 = new Footer('Terms $ Condition','#');
var tab05 = new Footer('Corporate Policies','#');

//CREATE ARREY FOR FOOTER OBJECTS
var list01 = [tab01,tab02,tab03,tab04,tab05];

var tab11 = new Footer('Trustmarked used cars','#');
var tab12 = new Footer('Advertise with Us','#');
var tab13 = new Footer('Careers','#');
var tab14 = new Footer('Customer Care','#');


var list02 = [tab11,tab12,tab13,tab14];

var tab21 = new Footer('CONNECT WITH US','#');
var tab22 = new Footer('1800 200 3000 (Toll-Free)','#');
var tab23 = new Footer('support@cardekho.com','#');
var tab24 = new Footer('Dealer solutions','#');


var list03 = [tab21,tab22,tab23,tab24];

//ACCESS FOOTER FROM INDEX HTML

document.querySelector('footer').innerHTML+=`
     <div class="container">
	       <div class="row">
		         <div class="col-md-3">
				       <div class="list01">
					          <p>OVERVIEW</p>
							   <ul class="nav"></ul>
					   </div>
				 </div> 
				 <div class="col-md-3">
				       <div class="list02">
					          <p>OTHERS</p>
							   <ul class="nav"></ul>
					   </div>
				 </div> 
				 <div class="col-md-3">
				       <div class="list03">
					          <p>CONNECT WITH US</p>
							   <ul class="nav"></ul>
					   </div>
				 </div> 
				  <div class="col-md-3">
				       <div class="list04">
					          <p>EXPERIENCE CARDEKHO APP</p>
							   <div class="col-md-6">
							         <img src="images/android_download.webp" class="img-responsive">
							   </div>
							   <div class="col-md-6">
							         <img src="images/ios_download.webp" class="img-responsive">
							   </div>
							    
							   <ul class="navbar-nav nav pad-10">
							   <p>Follow us</p>
							         <li><a href="#"><i class='fab fa-facebook-f' style='font-size:24px'></i></a></li>
									 <li><a href="#"><i class='fab fa-instagram' style='font-size:24px'></i></a></li>
									 <li><a href="#"><i class="fab fa-twitter" style='font-size:24px'></i></a></li>
									 <li><a href="#"><i class="fab fa-youtube" style='font-size:24px'></i></a></li>
							   </ul>
					   </div>
				 </div> 
		 </div>
		 <hr>
		   <div class="col-md-4">
				      <div class="my_last">
					        <ul class="navbar-nav nav pad-10">
							      <li><a href="#">© 2021 Girnar Software Pvt. Ltd.</a></li>
							</ul>
					  </div>
				 </div>
				 <div class="col-md-8">
				      <div class="my_last_brand">
					        <ul class="navbar-nav nav pull-right pad-10">
							     <li><a href="#"><img src="images/gaadi-new-logo.svg" class="img-responsive"></a></li>
								 <li><a href="#" class="img-responsive"><img src="images/zigwheels.webp"></a></li>
								 <li><a href="#"><img src="images/bikedekho.png" class="img-responsive"></a></li>
								 <li><a href="#"><img src="images/id-main-logo.svg" class="img-responsive"></a></li>
							</ul>
					  </div>
				 </div>
	     </div>
`;
for(var i in list01){
	document.querySelector('.list01>ul').innerHTML+=`
	   <li><a href="${list01[i].tablink}">${list01[i].tabname}</a></li>
	`;
}
for(var i in list02){
	document.querySelector('.list02>ul').innerHTML+=`
	   <li><a href="${list02[i].tablink}">${list02[i].tabname}</a></li>
	`;
}
for(var i in list03){
	document.querySelector('.list03>ul').innerHTML+=`
	   <li><a href="${list02[i].tablink}">${list02[i].tabname}</a></li>
	`;
}