"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMdFile = exports.writeHtmlFile = exports.getAllMdFileChoices = exports.getMdFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const marked_1 = require("marked");
const md_files_json_1 = __importDefault(require("../md.files.json"));
const mdFiles = md_files_json_1.default;
const parts = {
    docsPath: path_1.default.resolve(__dirname, "../..", "docs"),
    mdPath: path_1.default.resolve(__dirname, "..", "..", "md"),
    hdrFile: path_1.default.resolve(__dirname, "../../src/parts", "header.html"),
    ftrFile: path_1.default.resolve(__dirname, "../../src/parts", "footer.html"),
    styleFile: path_1.default.resolve(__dirname, "styles.css"),
}; // parts object
const getMdFile = (name) => {
    const srch = new RegExp(name, "i");
    const mF = mdFiles.find((v) => { return srch.test(v.name); });
    if (mF) {
        // Now default values that may not be set..
        if (!mF.md_file)
            mF.md_file = mF.name + ".md";
        if (!mF.html_file)
            mF.html_file = mF.name + ".html";
        if (!mF.doc_title)
            mF.doc_title = mF.name;
    }
    return mF;
}; //getMdFile 
exports.getMdFile = getMdFile;
const getAllMdFileChoices = () => {
    return mdFiles.map((f) => f.name);
};
exports.getAllMdFileChoices = getAllMdFileChoices;
const writeHtmlFile = (mdFile, contents) => {
    if (!mdFile.html_file)
        mdFile.html_file = mdFile.name + ".html";
    const docsFile = path_1.default.resolve(parts.docsPath, mdFile.html_file);
    try {
        if (fs_1.default.existsSync(docsFile)) {
            console.log(`Removing old file ${mdFile.html_file} `);
            fs_1.default.unlinkSync(docsFile);
        }
        ; // exists
        console.log(`Writing file (${mdFile.html_file})`);
        fs_1.default.writeFileSync(docsFile, contents);
    }
    catch (e) {
        console.log("writeHtmlFile error : "), e.message;
    }
}; // writeHtmlFile
exports.writeHtmlFile = writeHtmlFile;
const readMdFile = (mdFile) => {
    var _a;
    initialize();
    if (!mdFile.md_file)
        mdFile.md_file = mdFile.name + ".md";
    const mFile = path_1.default.resolve(parts.mdPath, mdFile.md_file);
    let str = "  **** unable to process file ";
    try {
        console.log(`Reading file(${mdFile.md_file})`);
        str = getFileAsString(mFile);
        console.log(`Parsing ${mdFile.md_file}`);
        const ma = new marked_1.Marked({ mangle: false, headerIds: false });
        if (!mdFile.doc_title)
            mdFile.doc_title = mdFile.name;
        str = ma.parse(str);
        const md = [(_a = parts.header) === null || _a === void 0 ? void 0 : _a.replace(/--title--/g, mdFile.doc_title), str, parts.footer];
        str = md.join("\n");
    }
    catch (e) {
        console.log(`readMdFile error : $P{mdFile}`, e.message);
    }
    ; // catch
    return str;
}; // readMdFile
exports.readMdFile = readMdFile;
const getFileAsString = (fileName) => {
    let str = "";
    try {
        // Quick and dirty readFile.  Works with small files
        const buff = fs_1.default.readFileSync(fileName);
        str = buff.toString();
    }
    catch (e) {
        console.log(`getFileAsString (${fileName}) : `, e.message);
    }
    ; //catch
    return str;
}; // getFileAsString
const initialize = () => {
    if (!parts.initialized) {
        try {
            parts.initialized = true;
            console.log("Reading Header File..", parts.hdrFile);
            parts.header = getFileAsString(parts.hdrFile);
            console.log("Reading footer File..", parts.ftrFile);
            parts.footer = getFileAsString(parts.ftrFile);
        }
        catch (e) {
            console.error("Initialize error: ", e);
        }
        ; // catch
    } // if not initialized
}; // initialize
//# sourceMappingURL=parts.js.map