function vegenere(plainText, key)
{
	var vegenereSquare = ["abcdefghijklmnopqrstuvwxyz",
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

		var cipherText = "";

		key = processKey(key);

		for(var i = 0; i < plainText.length; i++)
		{
			/* sat evening check that charcode is uncode for a-z small and A-Z caps
			so we can ignore spaces and symbols */
			if(plainText[i] != " ")
			{
			    cipherText += vegenereSquare[getRow(key[i])].charAt(getColumn(plainText[i]));
			}
			else
			{
				cipherText += " ";
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

			for(var i = 0; i < vegenereSquare.length; i++)
			{
				if(vegenereSquare[i].charAt(0) == character)
				{
					row = i;
					break;
				}
			}
			
			return row;
		}

		function getColumn(character)
		{
			return vegenereSquare[0].indexOf(character);
		}

		return cipherText;
}