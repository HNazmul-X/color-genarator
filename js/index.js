/* color arry  */
// const color = ["f44336", "e91e63", "5927b0", "ffebee", "fce4ec", "f3e5f5", "ffcdd2", "f8bbd0", "e1bee7", "ef9a9a", "f48fb1", "ca93d8", "e57373", "f06292", "ba68c8", "ef5350", "ec407a", "ab47bc", "f44336", "e91e63", "9c27b0", "e53935", "d81b60", "8e24aa", "d32f2f", "c2185b", "7b1fa2", "c62828", "ad1457", "6a1b9a", "b71c1c", "880e4f", "4a148c", "ff8a80", "ff80ab", "ea80fc", "ff5252", "ff4081", "e040fb", "ff1744", "f50057", "d500f9", "d50000", "c51162", "aa00ff", "673ab7", "3f51b5", "2196f3", "ede7f6", "e8eaf6", "e3f2fd", "d1c4e9", "c5cae9", "bbdefb", "b39ddb", "9fa8da", "90caf9", "9575cd", "7986cb", "64b5f6", "7e57c2", "5c6bc0", "42a5f5", "673ab7", "673ab7", "2196f3", "5e35b1", "3949ab", "1e88e5", "512da8", "303f9f", "1976d2", "4527a0", "283593", "1565c0", "311b92", "1a237e", "0d47a1", "b388ff", "8c9eff", "82b1ff", "7c4dff", "536dfe", "448aff", "651fff", "3d5afe", "2979ff", "6200ea", "304ffe", "2962ff", "03a9f4", "00bcd4", "009688", "e1f5fe", "e0f7fa", "e0f2f1", "b3e5fc", "b2ebf2", "b2dfdb", "81d4fa", "80deea", "80cbc4", "4fc3f7", "4dd0e1", "4db6ac", "29b6f6", "26c6da", "26a69a", "03a9f4", "00bcd4", "009688", "039be5", "00acc1", "00897b", "0288d1", "0097a7", "00796b", "0277bd", "00838f", "00695c", "01579b", "006064", "004d40", "80d8ff", "84ffff", "a7ffeb", "40c4ff", "18ffff", "64ffda", "00b0ff", "00e5ff", "1de9b6", "0091ea", "00b8d4", "00bfa5", "4caf50", "8bc34a", "cddc39", "e8f5e9", "f1f8e9", "f1f8e9", "c8e6c9", "dcedc8", "f0f4c3", "a5d6a7", "c5e1a5", "81c784", "e6ee9c", "aed581", "dce775", "66bb6a", "9ccc65", "d4e157", "4caf50", "8bc34a", "cddc39", "43a047", "7cb342", "c0ca33", "388e3c", "689f38", "afb42b", "2e7d32", "558b2f", "9e9d24", "1b5e20", "33691e", "827717", "b9f6ca", "ccff90", "f4ff81", "69f0ae", "b2ff59", "eeff41", "00e676", "76ff03", "c6ff00", "00c853", "64dd17", "aeea00", "fffde7", "fff8e1", "fff3e0", "fff9c4", "ffecb3", "ffe0b2", "fff59d", "ffe082", "ffcc80", "fff176", "ffd54f", "ffb74d", "ffee58", "ffca28", "ffa726", "ffeb3b", "ffc107", "ff9800", "fdd835", "ffb300", "fb8c00"];
const colorShower = document.querySelector(".color-shower");
const colorCodeWord = ["b", "3", "f", "a", "c", "a", "2", "c", "b", "f", "3", "c", "4", "c", "d", "5", "e", "6", "f", "7", "a", "8", "b", "9", "c", "0"];
const addColorToArry = document.querySelector(".add-color-to-cart");
let oneColor  ,towColor ,threeColor;
// selected color arry
const selectedColor = []



const getColorCode = () => {
    let colorCode = "";
    for(let i = 0; i <=5 ; i ++ ){
        const randomNumber = Math.round( (Math.random()) *( colorCodeWord.length -1 ));
        colorCode += colorCodeWord[randomNumber];
    }
    return colorCode;
}
 const setColor = () => {
      oneColor = `#${getColorCode()}`;
      towColor = `linear-gradient(#${getColorCode()},#${getColorCode()})`;
      threeColor = `linear-gradient(#${getColorCode()},#${getColorCode()},#${getColorCode()})`
     colorShower.style.background = oneColor;
 }
 

const getSelectedColor = () => {
    addColorToArry.addEventListener('click', e => {
        selectedColor.push(oneColor)
        document.querySelector('#selected-item').innerHTML = ""
       console.log(selectedColor);
        selectedColor.forEach((colorbox) => {
              const div = document.createElement("div");
              div.style.background = colorbox;
              div.classList = "p-3 my-bg-primary selected-color-card";
              document.querySelector("#selected-item").appendChild(div);
        });
    })
}
getSelectedColor();






