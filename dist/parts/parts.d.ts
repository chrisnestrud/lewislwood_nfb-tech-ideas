export declare const getMdFile: (name: string) => Md_File | undefined;
export declare const getAllMdFileChoices: () => string[];
export declare const writeHtmlFile: (mdFile: Md_File, contents: string) => void;
export declare const readMdFile: (mdFile: Md_File) => string;
