import * as parts from "./parts/parts";


const args = process.argv;
let cmds: string[] = (args.length > 2) ? args.slice(2) : ['beacons'];

if (cmds.length === 0) {
    console.log(`You must specify a valid option ( all, ${parts.getAllMdFileChoices().join(", ")})`);
}    else {
if (cmds[0].toLowerCase() === 'all') cmds = parts.getAllMdFileChoices();
cmds.forEach((f) => {
const mdFile = parts.getMdFile(f);
if (! mdFile)     console.log( "Invalid file option", f)
else {
    if (! mdFile.md_file) mdFile.md_file = mdFile.name + ".md"; 
    parts.writeHtmlFile(mdFile,     parts.readMdFile( mdFile));
console.log(`Choice is ${mdFile.md_file}`);
}; // mdFile is valid


});
    }; // cmds.length === 


