#  How to edit or Submit edits

## Least technical method

Bottom of every page are "edit page" links. You click on these links and you will be redirected to the github repo where the file will be displayed.  You will need to select and copy the page content. Then paste it in your favorite text editor (Notepad works) and save it as an ".md" file.  This is a markdown file for all pages. There are few exceptins (css, txt, ...). If your changes are small and quick, simply paste the text and description in the discussions of the repository on github. 

You may also  submit your changes to a discussion forum nfbcs@nfbnet.org I or another volunteer will see about incorporating your changes.

## Download Repo as a Zip file

If you do not have a github account or have git installed locally then this is the best option.
[Zipped Repo](https://github.com/lewislwood/nfb-tech-ideas/zipball/main)


              $git clone https://github.com/lewislwood/nfb-tech-ideas
    

##  Fork repo and issue pull requests

This option requires you to have a github account. You will want to fork the repo. Clone the repo locally where you can work on it locally and push it to your fork of the repo. Read the cloning repo instructions found at the root folder on how to rebuild the repo.

    $git clone git@github.com:lewislwood/nfb-tech-ideas.git

You wil of course use your own username instead of my name lewislwood.  Also your fork repo name if you changed it. This will require that you have a shared key with github already set up.

This  option requires you to have NodeJs installed, as well as Git installed. So that you can view the generated html files. I used NodeJs version 18.
Install [NodeJs here](https://nodejs.dev/en/download/).

See "setup & instructions" found in root folder of repo.

## Special edit files.

[styles.css](https://raw.github.com/lewislwood/nfb-tech-ideas/main/docs/styles.css) file that controls the appearance.

[JSON file](https://raw.github.com/lewislwood/nfb-tech-ideas/main/src/md.files.json) that controls the allowable list of markdown files.

[Html Header Template](https://raw.github.com/lewislwood/nfb-tech-ideas/main/src/parts/header.html) is the header at the top of every page.

[Html Footer Template](https://raw.github.com/lewislwood/nfb-tech-ideas/main/src/parts/footer.html) is the footer at the bottom of every page.

[Setup & Instructions](https://raw.github.com/lewislwood/nfb-tech-ideas/main/setup-instructions.txt) only need if you plan on downloading or cloning repo and running it.
