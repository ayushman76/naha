//CREATE CLASS FOR COMPARED CAR

class CompareCar{
     //CREATE CONSTRUCTOR FOR COMPARECAR
      constructor(img01,img02,name01,name02,price01,price02,btn,link){
            this.img01 = img01;
			this.img02 = img02;
			this.name01 = name01;
            this.name02 = name02;
			this.price01 = price01;
			this.price02 = price02;
			this.btn = btn;
			this.link = link;
      }
}

//EXPORT COMPARED CLASS FOR IMPORT SCRIPT
export default CompareCar;