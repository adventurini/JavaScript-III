/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. default binding - window context. 'this.' will perform whatever is within the context of the window
 * 2. explicit binding - use of specific calling methods (bind, call, and apply) to define which object this. will be performed on
 * 3. implicit binding - applies to the object preceding a
 * 4. new binding - creates a new Object with properties XX on this object using this.XX
 *
 * write out a code example of each explanation above
 */

//window binding

'use strict'


function callMe(name) {
    console.log(this);
    return name;
}
callMe();

//explicit binding  

function sayHi() {
    console.log(`Hi, my name is ${this.name} I am ${this.age} from ${this.location}`);
}

const user = {
    name: 'chicka chicka Slim Shady',
    age: 41,
    location: 'Detroit, MI'
}

sayHi.call(user)


//implicit binding

const callMeAnthony = {
    greeting: 'Whats up',
    name: 'Anthony',
    pronoun: 'your',
    sayMyName: function (name) {
        console.log(`${this.greeting} ${this.pronoun} name is ${this.name}, ${name}`);
    }
};
callMeAnthony.sayMyName('Anthony');

//new binding

function playSong(song) {
    this.song = song;
    this.artist = 'Eminem';
    this.playSlimShady = function () {
        console.log(`Now playing ${this.song} by ${this.artist}`)
    };
}

const mnm = new playSong('Slim Shady');

mnm.playSlimShady();




// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding