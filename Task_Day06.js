//1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        if(rating == undefined){
          this.rating = "PG";
        }
        else{
          this.rating = rating;
          }
          }
    getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
      
}
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
let a = new Movie("Vaaranam Aayiram","Studio Green","10/10");
console.log(a);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
let b = new Movie("Jailer","Sun pictures");
console.log(b);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full
let movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "R"),
    new Movie("Movie 3", "Studio C", "PG"),
    new Movie("Movie 4", "Studio D", "PG-13")
];

console.log(a.getPG(movies));

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”     
let d = new Movie("Casino Royale","Eon productions","PG13");
console.log(d);



//2.Class Circle

const PI=3.14;
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get_area(){
        let area = PI*this.radius*this.radius;
        return area;
    }
    get_circumference(){
        let circum = 2*PI*this.radius;
        return circum.toFixed(2);
    }
}
var a = new Circle(5,"blue");
console.log(a);
console.log(a.get_area());

var b = new Circle(5,"red");
console.log(b);
console.log(b.get_circumference());


//3.Write a “person” class to hold all the details

class person{
    constructor(name,age,dob,email,phoneno){
        this.Name = name;
        this.Age = age;
        this.DOB = dob;
        this.Email = email;
        this.PhoneNo = phoneno;
    }
}
let c1 = new person("Deephan","24","22/10/1999","deephan221099@gmail.com","99****09**");
console.log(c1);


//4.write a class to calculate the Uber price.

//Remark - Cost per km ride is taken as INR 18.00

class Uber{
    constructor(kms){
        this.kms = kms;
    }
    get_fare(){
        let fare = "Total amount to be paid for "+ this.kms +" km is " + (this.kms*18);
        return fare;
    }
}
let c1 = new Uber(10);
console.log(c1.get_fare());