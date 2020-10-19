type Admin = {
    name: string;
    privileges: string[]
};

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Employee, Admin{}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

const userData = ''

const storedData = userData?? 'DEFAULT'

console.log(storedData)

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a:number, b:number): number
function add(a:string, b:string): string
function add(a: Combinable, b: Combinable){
    if (typeof a==='string' || typeof b==='string'){
        return a.toString() + b.toString()
    }
    return a + b 
}

const result = add('Pepito ', 'Grillo');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Ferran',
    job: { 
        title: 'CEO', 
        description: 'My own company'
    }
}

console.log(fetchedUserData?.job?.title)

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log('Name: ' + emp.name)
    if ('privileges' in emp){
        console.log('Privileges: ' + emp.privileges)
    }
    if ('startDate' in emp){
        console.log('Start Date: ' + emp.startDate)
    }
}

const emplo: UnknownEmployee = {
    name: 'Paco',
    privileges: ['Doesnt work on Mondays'],
}

printEmployeeInformation(emplo)

class Car {
    drive(){
        console.log('Driving...')
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...')
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse

const moveAnimal = (animal: Animal) => {
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at: ' + speed + ' km/h')
}

moveAnimal({type: 'horse', runningSpeed: 50})

// const userInput = <HTMLInputElement>document.getElementById('input')!;
const userInput = document.getElementById('input')! as HTMLInputElement;

userInput.value = 'Hi there!'

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character'}
    [prop: string]: string;
}

const erroBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
}