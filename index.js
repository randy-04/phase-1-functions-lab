// Code your solution in this file!
const hq = 42;
function distanceFromHqInBlocks(location) {
    if (location > 42) {
        return location - hq;
    }
    else {
        return hq - location;
    }
}

function distanceFromHqInFeet(location) {
    const feetDist = distanceFromHqInBlocks(location);
    return feetDist * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distance;
    if (start > destination) {
        distance = start - destination;
    }
    else {
        distance = destination - start;
    }
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400) {
        return fare = 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return fare = 0.02*(distance-400);
    }
    else if (distance > 2000 && distance < 2500) {
        return fare = 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}