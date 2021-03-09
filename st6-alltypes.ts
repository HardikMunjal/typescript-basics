// number type
let age: number = 32;

// string type
let fname: string = "John";

// boolean type
let isUpdated: boolean = true;

// object type 
// not a good practice to define object in such way..

let employee: {
    lname: string;
    salary: number;
} = {
    lname: 'sandy',
    salary: 1000000
}


// array
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let roleids: number[] = [1, 2, 3, 4, 5];


// array with more than 1 data type
// tuple 
// fixed number of elements whose types are known
let roleset: [number, string, boolean] = [2, 'admin', true];
// push exception for tuple, ts dont capture



// union
function combine(input1: number | string, input2: string) {
    return input1 + input2;
}


// Nested Objects


var product: {
    id: string;
    price: number;
    tags: string[],
    details: {
        title: string;
        description: string;
    }
}

product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}




//unknown and any
let versionAny: any = 10;          // We can assign anything to any
let versionUnknown: unknown = 10; // We can assign anything to unknown just like any 


let s1: string = versionAny;     // Any is assignable to anything 
//let s2: string = versionUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)
let s2: unknown = versionUnknown;





//void
function saveEmployee(age: number, name: string, isUpdated: boolean): void {
    // save data
    return
}
saveEmployee(12, 'Hardi', true)



//never
function generateError(message: string, code: number): never {
    throw {message:message, errorCode:code}
    //further looping...
}


// Interfaces are basically a way to describe data shapes, for example, an object.
// Type is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.

  type Man = {
    name: string
  };
  
  type Woman = {
    name: string
  };
  
  type Person = Man | Woman;