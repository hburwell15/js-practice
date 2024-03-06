//Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.


import { uppercaseString, lowercaseString } from "./useExportToShareACodeBlock";
// Used a different file name, useExportToShareACodeBlock.js, as I name my files differently from the lessons

uppercaseString("hello");
lowercaseString("WORLD!");