class Department {
    // private id: string
    // private name: string;
    private employees: string[] = []

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = n;
    }

    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}


class ITDepartment extends Department {
    admins: string[]
    constructor (id: string, admins: string[]) {
        super(id, 'IT')
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReports(text: string){
        this.reports.push(text);
    }

    getReports(){
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d2', [])

accounting.addReports('Something happened...')

accounting.getReports()

accounting.describe() 

console.log(accounting)

const dep = new ITDepartment('d11', ['Pepe', 'Ferran', 'José'])

dep.describe()

console.log(dep)

// const accounting = new Department('d1', 'Accounting');
// console.log(accounting)
// accounting.describe()

// accounting.addEmployee('Pepito')
// accounting.addEmployee('Max')
// accounting.name = 'Medio Ambiente'
// accounting.describe()


// accounting.printEmployeeInformation();