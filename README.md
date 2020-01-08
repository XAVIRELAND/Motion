# Motion
 Motion detection camera


This project is based in the motion software, https://motion-project.github.io/
Rather than triggering the camera using a dedicated motion detector, in this case is the ammount of changing pixels detected by the camera what starts the video recording.

Once the video recording is trigered the follow happens:

1. An email is sent to the user via "Wia"notifying that a new motion event has started 
2. Video images are stored in the Raspberry Pi. 
3. Video name and timestamp are stored in a Mysql database.
4. Once the video is fully recorded, it gets uploaded to Dropbox.

The images of the camera are streamed to Blynk by an URL created with NoIp application, Dynamic DNS and port forwarding were used.
Finally, using Blink too, the motion software is activated depending on the user`s mobile phone location, if the phone is within a determinated radio distance from the Raspberry pi location, the camera gets deactivated, and viceversa.


