import { makeAutoObservable } from "mobx";

class Books{
    constructor() {
        makeAutoObservable(this)
    }
    counter = 0
    increment() {
        this.counter +=1
    }
}

export default new Books()