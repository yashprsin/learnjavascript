//------------------- Object Destructuring --------------------------
const band = {
    bandName : "bts",
    famousSong : "Life goes on",
    year : 2010,
    another_famousSong : "Fire"
};
// const bandname = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandname, famousSong);

// shortcut 
// const { bandName, famousSong } = band; // also be let and val
// const { bandName:var1, famousSong:var2} = band;
const {bandName, famousSong, ...restProps} = band;
console.log(restProps);
