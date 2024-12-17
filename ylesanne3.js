class Student{
    #name
    #id
    #status
    constructor(name, id){
        this.#id = id
        this.#name = name
        this.statuses = [];
    }
    getID(){
        return this.#id;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setStatus(status){
        this.#status = status;
    }
    addStatus(status) {
        if (!this.statuses.includes(status)) {
            this.statuses.push(status); // Add a new status if it doesn't already exist
        }
    }
    removeStatus(status) {
        this.statuses = this.statuses.filter(s => s !== status); // Remove the specified status
    }
    getStatuses() {
        return this.statuses; // Return all statuses
    }
}

const student = new Student ('John', 1)
console.log(student.)

