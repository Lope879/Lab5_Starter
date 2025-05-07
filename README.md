# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Cesar Lopez

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   - I would not use a unit test to test the message feature of a messaging aplication because unit tests cannot test how two individual componens interact with each other on a feature level. The messages being the feature, and the users being the individual components, unit testing would not be useful as they would not be able to track how correct messaging among users.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

   - I would use a unit test to test the max message lenth feature of a messaging application because the tests would quickly figure out if a small section of code is functioning properly by checking if messages longer than 80 characters are accepted, or if messages less than 80 characters are not accepted. If either case is found to be true, then the tests would tell us the feature is not ready.

https://lope879.github.io/Lab5_Starter/explore.html
https://lope879.github.io/Lab5_Starter/expose.html
