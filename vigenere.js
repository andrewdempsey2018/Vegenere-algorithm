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

function getColumnEncode(character)
{
	character = character.toLowerCase();

	return vegenereSquareLowerCase[0].indexOf(character);
}

function getColumnDecode(character, row)
{
	character = character.toLowerCase();

	return vegenereSquareLowerCase[row].indexOf(character);
}

function vegenereEncode(plainText, key)
{
    var cipherText = "";

    key = processKey(key, plainText);

    for(var i = 0; i < plainText.length; i++)
    {
		if(plainText.charCodeAt(i) >= 97 && plainText.charCodeAt(i) <= 122)
		{
		    cipherText += vegenereSquareLowerCase[getRow(key[i])].charAt(getColumnEncode(plainText[i]));
		}
		else if(plainText.charCodeAt(i) >= 65 && plainText.charCodeAt(i) <= 90)
		{
			cipherText += vegenereSquareUpperCase[getRow(key[i])].charAt(getColumnEncode(plainText[i]));
		}
		else
		{
			cipherText += plainText[i];
		}
			
	}

	return cipherText;
}

function vegenereDecode(cipherText, key)
{
    var plainText = "";

	key = processKey(key, cipherText);

	for(var i = 0; i < cipherText.length; i++)
	{
		if(cipherText.charCodeAt(i) >= 97 && cipherText.charCodeAt(i) <= 122)
		{
		    //plainText += vegenereSquareLowerCase[getRow(key[i])].charAt(getColumnEncode(cipherText[i]));
			
			var rowA = getRow(key[i]);
			var colA = getColumnDecode(cipherText[i], rowA);

			plainText += vegenereSquareLowerCase[0].charAt(colA);
		}
		else if(cipherText.charCodeAt(i) >= 65 && cipherText.charCodeAt(i) <= 90)
		{
			var rowA = getRow(key[i]);
			var colA = getColumnDecode(cipherText[i], rowA);

			plainText += vegenereSquareUpperCase[0].charAt(colA);
		}
		else
		{
			plainText += cipherText[i];
		}
		
	}

	return plainText;
}