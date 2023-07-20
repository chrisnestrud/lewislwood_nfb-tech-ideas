"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const parts = __importStar(require("./parts/parts"));
const args = process.argv;
let cmds = (args.length > 2) ? args.slice(2) : [];
if (cmds.length === 0) {
    console.log(`You must specify a valid option ( all, ${parts.getAllMdFileChoices().join(", ")})`);
}
else {
    if (cmds[0].toLowerCase() === 'all')
        cmds = parts.getAllMdFileChoices();
    cmds.forEach((f) => {
        const mdFile = parts.getMdFile(f);
        if (!mdFile)
            console.log("Invalid file option", f);
        else {
            if (!mdFile.md_file)
                mdFile.md_file = mdFile.name + ".md";
            parts.writeHtmlFile(mdFile, parts.readMdFile(mdFile));
            console.log(`Choice is ${mdFile.md_file}`);
        }
        ; // mdFile is valid
    });
}
; // cmds.length === 
//# sourceMappingURL=index.js.map