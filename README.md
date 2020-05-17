# Dog YouTube Videos
Angular frontend application that implements YouTube's Data API to search and watch dog related YouTube videos.

![ezgif com-optimize(1)](https://user-images.githubusercontent.com/20258893/82151282-cafe5200-9828-11ea-9b34-bb8c5932bbec.gif)

Colors don't look well in the GIF... <br>

## Preparation / Installation

Generate Google API Key from google [developer console](https://console.developers.google.com) <br>
Enable YouTube Data API v3 from library section in the developer console ([This video](https://www.youtube.com/watch?v=pP4zvduVAqo) explains how to enable it) <br>

- Install npm and angular/cli ([how to install angular/cli on Ubuntu 18.04 and 16.04](https://tecadmin.net/install-angular-on-ubuntu/)) <br>
- Clone the repository `git clone https://github.com/nmahser/search-and-browse-angular-app.git` <br>
- Go to environments directory`cd searc-and-browse-angular-app/src/environments` <br>
- Change file name from "environment.ts.dist" to "environment.ts" `mv environment.ts.dist environment.ts` <br>
- Paste your API KEY into "environment.ts" `nano environment.ts` and then save it by "CTRL-O" <br>
- Insall all the libraries `npm install package.json` <br>
- Run `ng serve -o`
