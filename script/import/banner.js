//IMPORT BANNER FROM EXPORT SCRIPT
import Banner from "../export/banner.js";

//CREATE OBJECTS FOR BANNER CLASS

var bannercon = new Banner('images/banner/web-banner.webp','Sell Your Car at Best Price','Instant money transfer • Free RC Transfer • Home Inspection','COVID safety assured - Contactless experience in whole process','Book Home Inspection');

document.querySelector('.banner').innerHTML+=`
  <div class="container-fluid">
        <div class="row">
		      <div class="col-md-3 col-sm-12">
			        <div class="banner-img">
					      <img src="${bannercon .img}" class="img-responsive">
					</div>
			  </div>
			  <div class="col-md-6 col-sm-12">
			        <div class="banner-content">
					      <h6>${bannercon .head}</h6>
						  <p>${bannercon .para}</p>
						  
						  <p class="tag"><img src="images/banner/shield.svg"> ${bannercon .tag}</p>
					</div>
			  </div>
			   <div class="col-md-3 col-sm-12">
			        <div class="banner-tab">
					      <a href="#">${bannercon.btn}</a>
					</div>
			  </div>
		</div>
  </div>
`;