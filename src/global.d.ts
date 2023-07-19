type Parts = {
    initialized?: boolean;
    docsPath:  string;
mdPath:  string;
hdrFile : string;
ftrFile  : string;
styleFile  : string;
header?: string;
footer?: string;
}

interface Md_File  {
        name: string;
        md_file?: string;
        html_file?: string;
        doc_title?: string;
        desc?: string;
    }

