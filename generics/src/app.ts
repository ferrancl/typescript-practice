// const names: Array<string> = []; //string[] = Array<string>

// const promise: Promise<number> = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(100);
//     }, 4000)
// })

// promise.then(numb => {
//     console.log(numb+ 40)
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Ferran', surname:'Calvo'}, {age: 30});
console.log(mergedObj.name); 

interface Lengthy {
    length: number;
}

function countAndPrint <T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.'
    if (element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

console.log(countAndPrint('Ferran'))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Ferran', age: 26}, 'name'))

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItem(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Ferran')
textStorage.addItem('Pepe')
textStorage.addItem('Jose')
textStorage.removeItem('Pepe')
console.log(textStorage.getItem())

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string, 
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title
    courseGoal.description = description
    courseGoal.completeUntil = date
    return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ['Ferran', 'Tatiana']
// names.push('Eira')