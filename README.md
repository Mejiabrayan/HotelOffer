
# Hotel Offer Expiration

All of this code inisde of an Immediate Invoked Function Expression (IIFE) to ensure any variables names are used in the script do not class with variables names used in other scripts.

# Creating a Hotel Object
The first part of our script is creates a hotel object which has three properties: the hotel name, room rate, and discount being offered including a method to calculate the offer price which is then displayed to the user.

# The Details
The discount is written into the page using information from the hotel object. To ensure that the discounted rate is shown with two decimal places (like most prices are shown) the .toFixed method of the Number object is used.

# The Second Part
The script shows that the offer will expire in seven days. It does this using a function called offerExpires(). The date currently set on the user's computer is passed as an argument to the offerExpires() function so that it can calculate when the offer ends.
