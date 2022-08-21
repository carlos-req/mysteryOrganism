// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)]
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Return new object of pAequor
const pAequorFactory = (specimanNum, dna) =>{
  return {
    specimanNum: specimanNum,
    dna: dna,
    mutate() {
      let baseFinder = Math.floor(Math.random() * 15);
      switch (this.dna[baseFinder]){
        case 'A':
          this.dna[baseFinder] = 'T'
          break;
        case 'T':
            this.dna[baseFinder] = 'C'
            break;
        case 'C':
          this.dna[baseFinder] = 'G'
          break;
        case 'G':
          this.dna[baseFinder] = 'A'
          break;  
      };
    },
    compareDNA(obj) {
      let sameDnaCounter = 0;
      for (let i= 0; i <this.dna.length; i++){
        if (this.dna[i] === obj.dna[i]){
          sameDnaCounter++
        };
      };
      let percentSame = (sameDnaCounter / this.dna.length) * 100;
      console.log(`Specimen #1 and Specimen #2 have ${percentSame.toFixed(2)}% DNA in common`)

    },
    willLikelySurvive() {
      let surviveCounter = 0;
      for(let i=0; i < this.dna.length; i++){
        if (this.dna[i] == 'C' || this.dna[i] == 'G'){
          surviveCounter++
        };
      };
      let percentSurvival = surviveCounter/this.dna.length;
      console.log(percentSurvival);
      if (percentSurvival => .60){
        return true;
      }else {
        return false; 
      }
    },
  };

};

const thirtyInstances = () =>{
  let thirtySurvivals = [];
  let i =1;
  while (thirtySurvivals.length < 30){
  let instance = pAequorFactory(i, mockUpStrand);
  if(instance.willLikelySurvive()){
    thirtySurvivals.push(instance);
    };
  i++;
  };
  return thirtySurvivals;
}

console.log(thirtyInstances());






