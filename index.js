let instruments = [
    {weight: 3, volume: 2, value: 10},
    {weight: 4, volume: 3, value: 15},
    {weight: 2, volume: 1, value: 8},
    {weight: 5, volume: 4, value: 20},
];

let payloadCapacity = 10;
let volumeCapacity = 7;

function generateCombination(instruments){
    let combinations = [];
    let n = instruments.length;

    for(let i=0; i<(1<<n); i++){
        let totalWeight = 0;
        let totalVolume = 0;
        let totalValue = 0;

        let combination = [];

        for(let j=0; j<n; j++){
            if(i & (1<<j)){
                totalWeight+=instruments[j].weight;
                totalVolume+=instruments[j].volume;
                totalValue+=instruments[j].value;

                combination.push("Instrument "+ (j+1));
            }
        }

        if(totalWeight<=payloadCapacity && totalVolume<=volumeCapacity){
            combinations.push({combination, totalWeight, totalVolume, totalValue});
        }
    }

    return combinations;
}

function findOptimalCombination(){
    let combinations = generateCombination(instruments);
    let optimalCombination = {};
    let maxValue = 0; 

    for(let combination of combinations){
        if(combination.totalValue > maxValue){
            optimalCombination = combination;
            maxValue = combination.totalValue;
        }
    }

    return optimalCombination;
}

function Main(){
    const optimalCombination = findOptimalCombination();

    console.log("Instruments: ", optimalCombination.combination);
    console.log("Total Value: ", optimalCombination.totalValue);
    console.log("Total Weight: ", optimalCombination.totalWeight);
    console.log("Total Volume: ", optimalCombination.totalVolume);

}

Main();