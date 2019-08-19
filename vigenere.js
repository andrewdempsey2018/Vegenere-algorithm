function vegenere(plainText, key)
{
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

		var cipherText = "";

		key = processKey(key);

		for(var i = 0; i < plainText.length; i++)
		{
			/* sat evening check that charcode is uncode for a-z small and A-Z caps
			so we can ignore spaces and symbols */
			if(plainText.charCodeAt(i) >= 97 && plainText.charCodeAt(i) <= 122)
			{
			    cipherText += vegenereSquareLowerCase[getRow(key[i])].charAt(getColumn(plainText[i]));
			}
			else if(plainText.charCodeAt(i) >= 65 && plainText.charCodeAt(i) <= 90)
			{
				cipherText += vegenereSquareUpperCase[getRow(key[i])].charAt(getColumn(plainText[i]));
			}
			else
			{
				cipherText += plainText[i];
			}
			
		}

		function processKey(key)
		{
			while(key.length < plainText.length)
			{
				key += key;
			}

			if(key.length > plainText.length)
			{
				var charactersOver = key.length - plainText.length;

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

		function getColumn(character)
		{
			character = character.toLowerCase();

			return vegenereSquareLowerCase[0].indexOf(character);
		}

		return cipherText;
}