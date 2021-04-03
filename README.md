# Homework-3

# Purpose of the Assignment 

Generate a random password that allows the user to select the length and to choose whether or not to include lowercase characters, uppercase characters, numeric characters, and special characters.

# What I Did and Why 

Line 1: Creates the 'generateBtn' variable and links it with the the 'Generate Password' button. 

Lines 2-5: Creates and defines variables for each group of selectable characters.

Line 6: Creates 'selectionString' variable and defines it as an empty string. 

Lines 8-12: Declares the 'getRandomInt' function, which will take random integers from each variable used to generate the password.

Line 14: Declares the 'writePassword' function. 

Line 16: Establishes an empty selectionString again so that it resets itself each time a new password is generated. 

Line 18: Creates the 'passwordText' variable and links it with the password display text area.

Line 20: Creates the 'length' variable, generates the prompt, and defines the length according to the answer to the prompt. 

Lines 22-25: Creates an alert to be displayed in the event that the length entered by the user is less than 8. If an acceptable length is selected, it moves on.

Lines 27-30: Creates an alert to be displayed in the event that the length entered by the user is more than 128. If an acceptable length is selected, it moves on.

Lines 32-35: Creates variables to establish included characters, generates confirm/deny prompts, and defines the prompts as true or false according to the answer selected by the user. 

Lines 39-61: If the prompt is defined as true, adds the applicable characters to the string and moves onto to the next prompt. If it is false, keeps the string as is and moves onto the next prompt. 

Line 63: Tells the password display text area to include the defined 'selectionString' and 'length' variables. Calls the 'generate' function to make this happen. The 'writePassword' function has been declared and defined, but not called. 

Line 69: Declares the 'generate' function. 

Line 70: Within the function, creates the password variable and defines it as an empty string. 

Line 71: Within the function, creates a for loop so that the function cycles through all necessary variables. 

Line 72: Defines the password variable as itself in addition to the selection string and calls the 'getRandomInt' function, 0 being the minimum position and the length of the selection string being the maximum position. 

Line 74: Returns the password. The 'generate' function has been completed.

Line 78: Tells the 'Generate Password' button to listen for a click, and on that click to call the 'writePassword' function. 
