class DigitalClock {
    constructor() {
        this.container = document.querySelector(".clock")
    }

    updateClock() {
        const presentTime = new Date()
        const hour = presentTime.getHours()
        const min = presentTime.getMinutes()
        const sec = presentTime.getSeconds()

        let output = `
        <span>${hour}</span>
        <span>${min}</span>
        <span>${sec}</span>
        `
        let doc = document.querySelector(".clock")
        doc.innerHTML = output
    }
}


export {
    DigitalClock as
    default
}