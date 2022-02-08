/**
 * Full-Stack Software Engineering
 * Javascript Syntax, Part II
 * Mysterious Organism
 */

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dnaArray) => {
  return {
    specimenNum: number,
    dna: dnaArray,
    //should mutate the objects dna property
    mutate() {
      let randomBase = returnRandBase();
      const dnaBases = ["A", "T", "C", "G"];
      dnaBases.splice(dnaBases.indexOf(randomBase), 1);
      let dnaCopy = this.dna;
      this.dna = dnaCopy.map((base) => {
        return base === randomBase
          ? dnaBases[Math.floor(Math.random() * 3)]
          : base;
      });

      return this.dna;
    },

    // should compare this objects dna to passed in objects dna
    compareDNA(pAequor) {
      let currentDNA = this.dna;
      let passedInDna = pAequor.dna;
      let percentageCount = 0;
      currentDNA.forEach((dna) => {
        if (currentDNA.indexOf(dna) === passedInDna.indexOf(dna)) {
          percentageCount += 1;
        }
      });
      percentageCount = Math.floor((percentageCount / currentDNA.length) * 100);
      return `specimen #1 and specimen #2 have ${percentageCount}% DNA in common.`;
    },

    // should true if object has 60% of C or G dna bases
    willLikelySurvive() {
      let CGbases = this.dna.reduce(
        (a, v) => (v === "C" || v === "G" ? a + 1 : a),
        0
      );
      CGbases = Math.floor((CGbases / this.dna.length) * 100);
      return CGbases >= 60;
    },
  }; //returned object
}; //factory

let instance1 = pAequorFactory(1, [
  "C",
  "A",
  "C",
  "C",
  "T",
  "A",
  "T",
  "C",
  "A",
  "G",
  "T",
  "C",
  "T",
  "G",
  "C",
]);
let instance2 = pAequorFactory(2, mockUpStrand());
let instance3 = pAequorFactory(3, mockUpStrand());
let instance4 = pAequorFactory(4, mockUpStrand());
let instance5 = pAequorFactory(5, mockUpStrand());
let instance6 = pAequorFactory(6, mockUpStrand());
let instance7 = pAequorFactory(7, mockUpStrand());
let instance8 = pAequorFactory(8, mockUpStrand());
let instance9 = pAequorFactory(9, mockUpStrand());
let instance10 = pAequorFactory(10, mockUpStrand());
let instance11 = pAequorFactory(11, mockUpStrand());
let instance12 = pAequorFactory(12, mockUpStrand());
let instance13 = pAequorFactory(13, mockUpStrand());
let instance14 = pAequorFactory(14, mockUpStrand());
let instance15 = pAequorFactory(15, mockUpStrand());
let instance16 = pAequorFactory(16, mockUpStrand());
let instance17 = pAequorFactory(17, mockUpStrand());
let instance18 = pAequorFactory(18, mockUpStrand());
let instance19 = pAequorFactory(19, mockUpStrand());
let instance20 = pAequorFactory(20, mockUpStrand());
let instance21 = pAequorFactory(21, mockUpStrand());
let instance22 = pAequorFactory(22, mockUpStrand());
let instance23 = pAequorFactory(23, mockUpStrand());
let instance24 = pAequorFactory(24, mockUpStrand());
let instance25 = pAequorFactory(25, mockUpStrand());
let instance26 = pAequorFactory(26, mockUpStrand());
let instance27 = pAequorFactory(27, mockUpStrand());
let instance28 = pAequorFactory(28, mockUpStrand());
let instance29 = pAequorFactory(29, mockUpStrand());
let instance30 = pAequorFactory(30, mockUpStrand());

let instacesArray = [
  instance1,
  instance2,
  instance3,
  instance4,
  instance5,
  instance6,
  instance7,
  instance8,
  instance9,
  instance10,
  instance11,
  instance12,
  instance13,
  instance14,
  instance15,
  instance16,
  instance17,
  instance18,
  instance19,
  instance20,
  instance21,
  instance22,
  instance23,
  instance24,
  instance25,
  instance26,
  instance27,
  instance28,
  instance29,
  instance30,
];

let dummyObject = {
  dna: [
    "C",
    "T",
    "C",
    "C",
    "T",
    "C",
    "T",
    "C",
    "C",
    "G",
    "T",
    "C",
    "T",
    "G",
    "C",
  ],
};

console.log(instance1.dna);
console.log(instance1.mutate()); //should return a new array
console.log(instance1.compareDNA(dummyObject));
console.log(instance1.willLikelySurvive());
