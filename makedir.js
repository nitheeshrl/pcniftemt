
async function main() {
    var fs = require('fs');
   /*  const sharp = require("sharp");
var inames = [
    'Srivigneswar S',
    'Sathishwaran S',

       ]
       var photourls =[
        'profiles/FSQA - Srivigneshwar.JPG',
        'profiles/FPE - Satishwaran.JPG'
         ]
for(var i =0;i<inames.length;i++){

    var ndir = './user/'+photourls[i];
    var dir = './labels/'+inames[i];
    var mdir = './labels/'+inames[i]+'/';
   fs.mkdirSync(dir, { recursive: true });
    fs.copyFile(ndir, './labels/'+inames[i]+"/1.JPG", (err) => {
        if (err) 
            throw err;
        console.log('source.txt was copied to destination.txt');
    });
      try {
        await sharp (mdir+"1.JPG")
        .rotate(180) // Rotate the image 90 degrees clockwise
        .flip() // Flip the image vertically . flop() // Flip the image horizontally
        .toFile(mdir+"2.JPG") ;
        console.log("Image midified successfully.");
        }
        catch (error) {
        console.error ("Error modifying image:", error);
   
}
}*/
var name = [
    ['Anandha Keerthy M','2021U1007'],
['Anindit Bizy Nair','2021U1008'],
['David Evander Jebson S','2021U1016'],
['Keerthika P','2021U1033'],
['Nitheesh R L','2021U1049'],
['Shivam Jha','2021U1058'],
['Srinithi C P','2021U1061'],
['Subbu Krishna Sharma GM','2021U1063'],
['Yuvashreekantham R','2021U1071'],
['R B Ramyaa','2023P1007'],
['Sathishwaran S','2023P1008'],
['Anjali S','2023P2001'],
['Mathangi G','2023P3008'],
['Srivigneswar S','2023P3014']
]
const testFolder = './check face/labels/';
for(var i =0;i<name.length;i++){
    console.log(name[i][0])
fs.rename(testFolder+name[i][0],testFolder+name[i][1], err => {
    if (err) throw err;
    console.log(name[i][0]+` was renamed to `+name[i][1]);
});
}
}
main();
