
var time=new Date().getHours();
    if(time<10){
        greeting="Good Morning";
    }
    else if(time<20){
greeting ="Good Day";
    }
    else{greeting="Good Evening";
}
console.log(greeting)

class KioskCalc{
 constructor (price,quantity) {
        this.fruit="Oranges";
        this.price=25;
        this.quantity=3;

        this.fruit1="Mangoes";
        this.price1=15;
        this.quantity1=5;

        this.fruit2="Avocado";
        this.price2=20;
        this.quantity2=4;

         }
         getTotalCost(){
             return `${this.quantity} ${this.fruit} for KES ${this.price*this.quantity}` 
         }
         getTotalCost1(){
            return `${this.quantity1} ${this.fruit1} for KES ${this.price1*this.quantity1}` 
        }
        getTotalCost2(){
            return `${this.quantity2} ${this.fruit2} for KES ${this.price2*this.quantity2}` 
        }
    }
    var fruit=new KioskCalc("oranges",3)
    console.log(fruit.getTotalCost())

    var fruit1=new KioskCalc("Mangoes",5)
    console.log(fruit1.getTotalCost1())
    
    var fruit2=new KioskCalc("Avocado",4)
    console.log(fruit2.getTotalCost2())
    