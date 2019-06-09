from recipe_scrapers import scrape_me
lines = [line.rstrip('\n') for line in open('output.txt')]

wordlist = ['baking soda', 'baking powder', 'batter', 'blueberries', 'bread', 'chocolate', 'coriander', 'cocoa', 'dough', 'flour', 'noodles', 'pasta', 'rice', 'vanilla', 'yeast', 'avocado', 'basil', 'beans', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'garlic', 'ginger', 'lettuce', 'mint', 'mushroom', 'olive', 'onion', 'oregano', 'pickle', 'potato', 'pumpkin', 'seed', 'shallot', 'spinach', 'sweet potato', 'thyme', 'tomato', 'zucchini','butter', 'butter milk', 'cheese', 'custard', 'egg', 'ice cream', 'milk', 'sour cream', 'yoghurt', 'apple', 'banana', 'blackberries', 'cherries', 'coconut', 'cranberries', 'grapes', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'raspberries', 'strawberries', 'beef soup', 'beer', 'chicken soup', 'lamb soup', 'olive oil', 'red wine', 'vegetable oil', 'white wine', 'barbeque sauce', 'syrup', 'fish sauce', 'honey', 'mayonnaise', 'mustard', 'soy sauce', 'vinegar', 'carp', 'catfish', 'crab', 'eel', 'lobster', 'mackerel', 'mussel', 'oyster', 'prawn', 'salmon', 'sardine', 'scallop', 'shrimp', 'squid', 'trout', 'tuna', 'almond', 'cashew', 'macadamia', 'peanut', 'peanut butter', 'walnut', 'bacon', 'beef', 'chicken', 'ham', 'lamb', 'pork', 'salami', 'sausage', 'turkey', 'paprika', 'apple juice', 'orange juice', 'pecan', 'allspice', 'nutmeg', 'tomato sauce', 'watermelon']
exceptions = ['peanut butter', 'butter milk', 'chicken soup', 'lamb soup', 'beef soup', 'eggplant', 'pineapple', 'watermelon', 'vinegar', 'apple juice', 'orange juice', 'tomato sauce']
defaults = [' ice', ' water', ' oil', ' salt', ' pepper', ':', 'optional', 'sugar', 'butter', 'seasoning']

f = open('Recipes.json','w')
f.write('{\n')
f.write('  "recipes" : {\n')

recipesValid = 0
recipesTotal = 0

for each in lines:
	#no puddings!
	if 'pudding' in each:
		continue
		
	recipesTotal += 1
	#if scraping encounters an exception, then skip
	try:
		scraper = scrape_me(each)
	except:
		continue
	ingredients = scraper.ingredients()
	title = scraper.title().replace('"',"'") 
	matches = []
	matchedLength = 0
		
	for ingredient in ingredients:
	
		ingredient = ingredient.lower()
		#plurals / alternatives
		if 'cherry' in ingredient:
			matches.append('cherries')
			matchedLength += 1
			break
			
		if 'strawberry' in ingredient:
			matches.append('strawberries')
			matchedLength += 1
			break	
		
		if 'raspberry' in ingredient:
			matches.append('raspberries')
			matchedLength += 1
			break

		if 'ketchup' in ingredient:
			matches.append('tomato sauce')
			matchedLength += 1
			break		
		#ingredients with priority over other ingredients
		if any(exception in ingredient for exception in exceptions):
			for exception in exceptions:
				if exception in ingredient:
					matches.append(exception)
					matchedLength += 1
					break
		#ingredient matches	
		elif any(substring in ingredient for substring in wordlist):
			for substring in wordlist:
				if substring in ingredient:
					matches.append(substring)
					matchedLength += 1
					break
		#default ingredients that are ignored (like water, sugar, salt etc.)			
		elif any(default in ingredient for default in defaults):		
			for default in defaults:
				if default in ingredient:
					matchedLength += 1
					break			
	#if every ingredient in the recipe has a corresponding match (exception, match or default)
	if matchedLength == len(ingredients) and len(matches) > 0:
		
		f.write('    "' + title + '"' + ': {' + '\n')
		matches = list(dict.fromkeys(matches)) 
		#ratio of parsed ingredients out of total
		recipesValid += 1
		print(str(recipesValid) + "/" + str(recipesTotal))
		
		for match in matches:
			f.write('      "' + match.replace(" ", "") + '"' + ': 1,' + '\n')
		f.write('      "size": ' + str(len(matches)) + ',' + '\n') 					
		f.write('      "base":' + '"' + title + '"' + ',' + '\n')
		f.write('      "link":' + '"' + each + '"' + '\n')
		f.write('    },' + '\n')
		
f.write('}}')
f.close()		
		
		