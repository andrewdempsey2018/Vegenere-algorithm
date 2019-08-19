/* Vigenere.js by Andrew Dempsey - The Open University TM470 19B
This script encodes and decodes strings based on the famous Vugenere cipher */

/* Hard code two Vegenere squares that are used to replace letters in both cipher text and plain text */

/* Future versions of this script would idealy have these squares generated on the fly
this would allow more complex and secure encryption */

var vegenereSquareLowerCase = ["abcdefghijklmnopqrstuvwxyz",
	"bcdefghijklmnopqrstuvwxyza",
	"cdefghijklmnopqrstuvwxyzab",
	"defghijklmnopqrstuvwxyzabc",
	"efghijklmnopqrstuvwxyzabcd",
	"fghijklmnopqrstuvwxyzabcde",
	"ghijklmnopqrstuvwxyzabcdef",
	"hijklmnopqrstuvwxyzabcdefg",
	"ijklmnopqrstuvwxyzabcdefgh",
	"jklmnopqrstuvwxyzabcdefghi",
	"klmnopqrstuvwxyzabcdefghij",
	"lmnopqrstuvwxyzabcdefghijk",
	"mnopqrstuvwxyzabcdefghijkl",
	"nopqrstuvwxyzabcdefghijklm",
	"opqrstuvwxyzabcdefghijklmn",
	"pqrstuvwxyzabcdefghijklmno",
	"qrstuvwxyzabcdefghijklmnop",
	"rstuvwxyzabcdefghijklmnopq",
	"stuvwxyzabcdefghijklmnopqr",
	"tuvwxyzabcdefghijklmnopqrs",
	"uvwxyzabcdefghijklmnopqrst",
	"vwxyzabcdefghijklmnopqrstu",
	"wxyzabcdefghijklmnopqrstuv",
	"xyzabcdefghijklmnopqrstuvw",
	"yzabcdefghijklmnopqrstuvwx",
	"zabcdefghijklmnopqrstuvwxy"];

var vegenereSquareUpperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	"BCDEFGHIJKLMNOPQRSTUVWXYZA",
	"CDEFGHIJKLMNOPQRSTUVWXYZAB",
	"DEFGHIJKLMNOPQRSTUVWXYZABC",
	"EFGHIJKLMNOPQRSTUVWXYZABCD",
	"FGHIJKLMNOPQRSTUVWXYZABCDE",
	"GHIJKLMNOPQRSTUVWXYZABCDEF",
	"HIJKLMNOPQRSTUVWXYZABCDEFG",
	"IJKLMNOPQRSTUVWXYZABCDEFGH",
	"JKLMNOPQRSTUVWXYZABCDEFGHI",
	"KLMNOPQRSTUVWXYZABCDEFGHIJ",
	"LMNOPQRSTUVWXYZABCDEFGHIJK",
	"MNOPQRSTUVWXYZABCDEFGHIJKL",
	"NOPQRSTUVWXYZABCDEFGHIJKLM",
	"OPQRSTUVWXYZABCDEFGHIJKLMN",
	"PQRSTUVWXYZABCDEFGHIJKLMNO",
	"QRSTUVWXYZABCDEFGHIJKLMNOP",
	"RSTUVWXYZABCDEFGHIJKLMNOPQ",
	"STUVWXYZABCDEFGHIJKLMNOPQR",
	"TUVWXYZABCDEFGHIJKLMNOPQRS",
	"UVWXYZABCDEFGHIJKLMNOPQRST",
	"VWXYZABCDEFGHIJKLMNOPQRSTU",
	"WXYZABCDEFGHIJKLMNOPQRSTUV",
	"XYZABCDEFGHIJKLMNOPQRSTUVW",
	"YZABCDEFGHIJKLMNOPQRSTUVWX",
	"ZABCDEFGHIJKLMNOPQRSTUVWXY"];

/* takes the Vigenere key and duplicates it so that its length matches that of the text to be encoded/decoded */
function processKey(key, targetString)
{
	while(key.length < targetString.length)
	{
		key += key;
	}

	if(key.length > targetString.length)
	{
		var charactersOver = key.length - targetString.length;

		key = key.slice(0, -charactersOver);
	}

	return key;
}

/* returns an integer denoting the row where the argument is the first letter in the string */
function getRow(character)
{
	var row = 0;

	character = character.toLowerCase();

	for(var i = 0; i < vegenereSquareLowerCase.length; i++)
	{
		if(vegenereSquareLowerCase[i].charAt(0) == character)
		{
			row = i;
			break;
		}
	}
	
	return row;
}

/* returns an integer denoting the column where the character is found in the given row */
function getColumn(character, row)
{
	character = character.toLowerCase();

	return vegenereSquareLowerCase[row].indexOf(character);
}

/* takes plain text and a key and encodes the text using the Vegenere squares */
function vegenereEncode(plainText, key)
{
    var cipherText = "";

    key = processKey(key, plainText);

    for(var i = 0; i < plainText.length; i++)
    {
		if(plainText.charCodeAt(i) >= 97 && plainText.charCodeAt(i) <= 122)
		{
		    cipherText += vegenereSquareLowerCase[getRow(key[i])].charAt(getColumn(plainText[i], 0));
		}
		else if(plainText.charCodeAt(i) >= 65 && plainText.charCodeAt(i) <= 90)
		{
			cipherText += vegenereSquareUpperCase[getRow(key[i])].charAt(getColumn(plainText[i], 0));
		}
		else
		{
			cipherText += plainText[i];
		}
			
	}

	return cipherText;
}

/* takes cipher text and a key and decodes the text using the Vegenere squares */
function vegenereDecode(cipherText, key)
{
    var plainText = "";

	key = processKey(key, cipherText);

	for(var i = 0; i < cipherText.length; i++)
	{
		if(cipherText.charCodeAt(i) >= 97 && cipherText.charCodeAt(i) <= 122)
		{
		    var rowA = getRow(key[i]);
			var colA = getColumn(cipherText[i], rowA);

			plainText += vegenereSquareLowerCase[0].charAt(colA);
		}
		else if(cipherText.charCodeAt(i) >= 65 && cipherText.charCodeAt(i) <= 90)
		{
			var rowA = getRow(key[i]);
			var colA = getColumn(cipherText[i], rowA);

			plainText += vegenereSquareUpperCase[0].charAt(colA);
		}
		else
		{
			plainText += cipherText[i];
		}
		
	}

	return plainText;
}