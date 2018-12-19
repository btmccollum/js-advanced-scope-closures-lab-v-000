function produceDrivingRange(blockRange) {
    return function(pickUp, dropOff) {
        let total = dropOff.match(/\d+/) - pickUp.match(/\d+/);
        if (blockRange >= total) {
            let range = blockRange - total;
            return `within range by ${total}`;
        } else {
            let range = total - blockRange;
            return `${range} blocks out of range`;
        }
    }
}

function produceTipCalculator(percentage) {
    return function(amount) {
        return amount * percentage;
    }
}

function createDriver() {
    let driverId = 0;

    return class Driver{
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}