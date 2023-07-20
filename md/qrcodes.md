# QrCodes Implementation Discussion

## Overview

QrCodes is a marvelous technology that represent codes, web addresses, and other types. QrCoes can be any size small enough to fit on a candy bar or painted on the side of a building. This means the only limitation is that the code must be in the line of sight of the camera, and does not even have to be centered.  Thus even a blind man can find a QrCode.

Read this great [article that details the use and history of QrCodes](https://en.wikipedia.org/wiki/QR_code).

## Issue line of Sight

QrCodes must be in the line of sight in order to be read. This makes it a difficult   issue in crowded situations. This means the only way to implement such technology is to place it up high above everyone's head. Then how high?

I am 5'6" with a reach of just under 7'.  At that height the camera can be held perfectly vertically. This means if I rotate the camera it will center on all directions at the 7' mark. Now some people are 6' and have hair or hats that can increase this obstruction of 7'.  This means I gather the optimal height to be 8' to 9'. Reason for a little plush height is that it allows shorter people to slightly tilt their cameras overcome taller people. That is within reason.  This will have to be confirmed and adjusted for what is declared optimal crowd height.

## Walking and Scanning Overhead

This cannot be done and must be strongly discouraged. If a person is walking with their expensive phone over their head, it is just waiting to be dropped and stepped on. That is why they must stop raise camera, rotate camera to get orientation and directions from QrCode scanned. This means QrCodes must be large enough to viewed and read 30'+ away.   Reccommend QrCode alert set to vibrate and beep so that you know when to put your hand down.

## Custom App

This would optimal, but in test / trial runs simple camera processing by smart phone OS should be enough to get a feasibility study.   You can read more on the [custom app here.](app.html).

## How to raise them up to the optimal height?

There are numerous solutions. Some require more planning and setup thatn others. 
*  Direct placing othe walls may not be an option. After all tape or nails may peel or stain painted walls. Repair liability may be costly.

* Flexible mounting sticks mounted a chaire leaning against the wal may be an opton. Lightweight and facillity may provide chairs, thus less carry around items.

* Free standing poles 8'. Must flexible and weighted bottom. Reduces fallover and injury if happens. Also flexible so that it stands back up.

* Assembly poles are metal and I think they would require top mount to bring them to bring them to height.

*  Free standing will need a Multi-sided display of the sam QrCode. Optimal sides for all angles of sight will have to be determines. I was thinking hexagon.

## Appearance

Even though we are blind there are plenty of sighted people around and appearance plays a major role. QrCodes must be "Black & White (I believe?) . There is no limit what can encompass these QrCodes. Example Assembly May be state Flag, bird, etc. May even make it a state competition.

##  What can a QrCode say

There is no limit to speak of. QrCode in simplistist terms will pull up a web page and their screen reader will begin reading it. You can display a range of buttons where NFB President   recording talks to them. Perhaps at the welcome sign.  Perhaps a detailed description of the room or places of interest.

A custom app could buffer and dtect the convention id and download/buffer all the QrCodes. Thus not requiring internet service.

##  Implementation of QrCode

Would require a code convention as well as a web address.

Example: 
 First First 7 letters for conventio (NFBALL, NFBUSDC, NFBIL, NFBILIL)
  NFB National, NFB US in DC, NFBIL, NFB IL Springfield lobbing)
  Next 6 letters are vendor specific/table/facillity specific.  To be determined.

  Using purely webaddress specific it would call a webaddress with the code and return that JSON object if customm app or just the web page if via the phone OS.

  AA special QrCode could be emailed out for every registered user. This way they pull up this QrCode and the registration/signin desk simply scans the code which display the users registration info to the rgistration desk. The app on registration desk only needs to be a simple token app that displays the returned JSON information of the QrCode.  Token authorized is for security circumstances.
 See [App for more discussions[()]](app.html).


 ## Dynamically update QrCodes. 

 Certain peole will be designated as owners of their QrCodes and Authorized editors will be assigned. This way if we find wording is confusing people or unclear, it is a simple matter to message a central person about the QrCode.  That person will then foward the reccomened modifications to the appropiate persons or make them theirselves. 

  If connected to internet they would dynamically detect QrCodes for this event have been modified and download the buffer is an app. Otherwise, they require internet anyway so they will be updated immediately as well.

  ## Conclusion

  QrCodes are seen as a powerful technology tool and should be given serious consideration to it's implementation. Goal should be as always a feasibility study and start small.
  