// // Code your solution in this file!
// const hq = 42;

// function distanceFromHqInBlocks (distance) {
//     if (distance > hq) {
//         return (distance - hq);
//     } else if (distance < hq) {
//         return (hq - distance);
//     };
// }

// function distanceFromHqInFeet (distance) {
//     if (distance > hq) {
//         return (distance - hq) * 264;
//     } else if (distance < hq) {
//         return (hq - distance) * 264;
//     };
// }

// function distanceTravelledInFeet(start, destination) {
//     if (start < destination) {
//         return (destination-start)*264
//     }
//     else if (start > destination) {
//         return (start-destination)*264
//     };
// }

// function calculatesFarePrice(start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);

//     if (distance <= 400) {
//         return 0;
//     }
//     else if (distance >= 400 && distance <= 2000) {
//         return (distance - 400) * .02;
//     }
//     else if (distance > 2000 && distance < 2500) {
//         return 25;
//     }
//     else {
//         return "cannot travel that far";
//     };
// };

const hq = 42;

const distanceFromHqInBlocks = function (distance) {
  if (distance > 42) {
    return distance - hq;
  } else if (distance < hq) {
    return hq - distance;
  }
};

const distanceFromHqInFeet = function (distance) {
  if (distance > 42) {
    return (distance - hq) * 264;
  } else if (distance < hq) {
    return (hq - distance) * 264;
  }
};

const distanceTravelledInFeet = function (start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else if (destination < start) {
    return (start - destination) * 264;
  }
};

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
