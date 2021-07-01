// Code your solution her
function findMatching(drivers, aStr) {
    let findName = drivers.filter(function(driver) {
        return driver.toLowerCase() === aStr.toLowerCase()
    })
    return findName;
}

const fuzzyMatch = (drivers, aStr) => {
    let foundName = drivers.filter(function(driver) {
        return aStr === driver.slice(0, 2)
    }) 
    return foundName;
}

const matchName = (driverObj, aStr) => {
    let foundDriver = driverObj.filter(function(driver) {
        return aStr === driverObj;
    })
    if (foundDriver.name === aStr)
    return foundDriver;
}
