const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  const fareMultiplier = createFareMultiplier(2);

  function fareDoubler(fare) {
        return fare * 2;
  }

  function fareTripler(fare)    {
    return fare * 3;
  }

  function selectDifferentDrivers(drivers, returnDriversFunction) {
    if (returnDriversFunction === returnFirstTwoDrivers) {
      return drivers.slice(0, 2);
    } else if (returnDriversFunction === returnLastTwoDrivers) {
      return drivers.slice(-2);
    } else {
      throw new Error('Invalid returnDriversFunction argument');
    }
  }

  
