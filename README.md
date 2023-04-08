# According to the Description of this Repo, I said that I'll explain to you whe stuff in the README.md and here we are

## So I'll start explaining from the Site.js file:

-------------------------SITE.js-------------------------


# This file contains my Functions:

## 1. Encrypter: 

This Function uses a set of charachters to randomly generate an encrpted text which will be visible to you on the front end to copy and it automatically relocates you to the front page of the website when clicked and also it stores the data in a list in the DB.js file and not in a Database..


## 2. Decrypt:

This one just helps on to decrypt any file encrypted using this webApp


-------------------------APP.js-------------------------

This contains the express framework of the server and soon


-------------------------DB.js-------------------------

This contains the Object list for the saving of Data from the Encrypter function





----------------------------------------------------------------------NB----------------------------------------------------------------------

# The main prupose of this site is to show business owners that u mustnot have a DB to create a site cos the cost is Large


DOWN SIDES TO THIS APPROACH

- When the server goes off, so does all the data in your application.

Solution: Creating a document using code so that whenever such data is created, a virtual or online txt file is edited and an object is being added like text, So that when server goes down, all we need to do is to copy the text and add it to the list in the DB.js file


UPSIDES

- Security: This data is virtual and cannot be accessed from any DB by a hacker so it is secure and also, the creator also cannot access it thus imporving security, So it can be conviniently used to stor data like Credit Card Numbers due to its security and its downside being Loss of Data if server goes down is not so bad here as Credit card numbers can be easily requested again from the customer. But in cases of Usernames and Passwords, If documentation is not done, then the damages could be very bad. This documentation can be done by sending Emails to yourself of every entry into the DB



## THANKS ALOT FOR YOUR PATIENCE