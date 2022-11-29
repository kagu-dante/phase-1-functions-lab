// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks) {
if (numberOfBlocks < 42) {
    return 42 - numberOfBlocks;
} else {
    return numberOfBlocks - 42;
}
}
function distanceFromHqInFeet(numberOfBlocks) {
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(startBlock, endBlock) {
    if (distanceTravelledInFeet(startBlock, endBlock) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(startBlock, endBlock) >= 400 && distanceTravelledInFeet(startBlock, endBlock) < 2000) {
        return ((distanceTravelledInFeet(startBlock, endBlock) - 400) * .02);
    } else if (distanceTravelledInFeet(startBlock, endBlock) >= 2000 && distanceTravelledInFeet(startBlock, endBlock) < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}