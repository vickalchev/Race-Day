let raceNumber = Math.floor(Math.random()*1000);



const regNumberAssignor = (age, raceTime) => {
    if (age >= 18 && raceTime === 'early')
        console.log(`You race at 9:30 and your race number is ${raceNumber + 1000}`);
    else if (age >= 18 && raceTime === 'late')
        console.log(`You race at 11:00 and your race number is ${raceNumber}`);
    else 
        console.log(`You race at 12:30 and your race number is ${raceNumber}`);
        
}

regNumberAssignor (30, 'late');