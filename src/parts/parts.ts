import fs from "fs";
import path from "path";
import marked, { Marked } from "marked";
import mdFilesList   from "../md.files.json";

const mdFiles:Md_File[] = mdFilesList;
//  https://github.com/lewislwood/nfb-tech-ideas/blob/main/md/beacons.md


const parts:Parts = {
    docsPath:  path.resolve(__dirname, "../..", "docs"),
mdPath:  path.resolve(__dirname, "..","..", "md"),
hdrFile : path.resolve(__dirname,"../../src/parts", "header.html"),
ftrFile  : path.resolve(__dirname,"../../src/parts", "footer.html"),
styleFile  : path.resolve(__dirname, "styles.css"),
}; // parts object


export const getMdFile = (name: string) : Md_File| undefined => {
const srch = new RegExp(name,"i");    
    const mF = mdFiles.find((v:Md_File) => { return srch.test(v.name); })
    if (mF) {
        // Now default values that may not be set..
        if (! mF.md_file) mF.md_file = mF.name + ".md";
if(! mF.html_file) mF.html_file = mF.name + ".html";
if (! mF.doc_title)  mF.doc_title = mF.name;
    }
    return mF;
}; //getMdFile 

export const getAllMdFileChoices = (): string[]  => {
return mdFiles.map((f) => f.name);
} ;

export const writeHtmlFile =     (mdFile: Md_File, contents: string)  => {
    if (! mdFile.html_file) mdFile.html_file = mdFile.name + ".html" ;
    const docsFile = path.resolve( parts.docsPath, mdFile.html_file);
try {
if (fs.existsSync(docsFile)) {
    console.log(`Removing old file ${mdFile.html_file} `)
    fs.unlinkSync(docsFile);

}; // exists
console.log(`Writing file (${mdFile.html_file})`)
fs.writeFileSync( docsFile,contents);
} catch(e:any) {
    console.log("writeHtmlFile error : "), e.message
}
}; // writeHtmlFile

export const readMdFile = ( mdFile: Md_File): string =>{
    initialize();
    if (! mdFile.md_file)  mdFile.md_file = mdFile.name + ".md";
    const mFile = path.resolve( parts.mdPath, mdFile.md_file)
    let str = "  **** unable to process file ";

try {
    console.log(`Reading file(${mdFile.md_file})` )
str = getFileAsString( mFile);
console.log(`Parsing ${mdFile.md_file}`);

const ma = new Marked({mangle: false, headerIds : false });
if (! mdFile.doc_title) mdFile.doc_title = mdFile.name;
str = ma.parse(str);
const md = [parts.header?.replace(/--title--/g,mdFile.doc_title ),
   str , parts.footer];  
str = md.join("\n");

} catch(e:any) {
console.log(`readMdFile error : $P{mdFile}`, e.message)
}; // catch
return str;
} ; // readMdFile

const getFileAsString = ( fileName: string): string  => {
    let str = "";
try {
    // Quick and dirty readFile.  Works with small files
const buff = fs.readFileSync(fileName);
str = buff.toString();
} catch(e:any) {
console.log(`getFileAsString (${fileName}) : `, e.message)
}; //catch
return str;
} ; // getFileAsString

const initialize = () => {
    if (! parts.initialized) {
        try {
parts.initialized = true;
console.log("Reading Header File..", parts.hdrFile);
parts.header = getFileAsString( parts.hdrFile);
console.log("Reading footer File..", parts.ftrFile);
parts.footer = getFileAsString( parts.ftrFile);
        } catch(e:any) {
console.error("Initialize error: ", e)
        }; // catch

    } // if not initialized
}; // initialize






