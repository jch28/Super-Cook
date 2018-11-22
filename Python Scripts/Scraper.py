from recipe_scrapers import scrape_me

# give the url as a string, it can be url from any site listed below
# convert to json file to be imported into firebase

lines = [line.rstrip('\n') for line in open('output.txt')]

list = ['pepper', 'beans', ':', 'batter', 'ice', 'cranberries', 'olive oil', 'vegetable oil','shallot', 'spray', 'water', 'toppings', 'sauce', 'spice', 'mint', 'dough', 'butter', 'seed', 'basil', 'oregano', 'thyme', 'chocolate', 'vanilla', 'baking powder', 'butter milk', 'cocoa', 'cheese', 'custard', 'egg', 'ice cream', 'milk', 'sour cream', 'yoghurt', 'apple', 'banana', 'blackberries', 'blueberries', 'cherries', 'coconut', 'cranberries', 'salt', 'grapes', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'raspberries', 'strawberries', 'baking soda', 'bread', 'flour', 'noodles', 'pasta', 'rice', 'yeast', 'beef soup', 'chicken soup', 'beer', 'lamb soup', 'oil', 'red wine', 'white wine', 'bacon', 'beef', 'chicken', 'ham', 'lamb', 'pork', 'salami', 'sausage', 'turkey', 'almond', 'cashew', 'macadamia', 'peanut', 'peanut butter', 'walnut', 'carp', 'catfish', 'crab', 'eel', 'lobster', 'mackerel', 'mussel', 'oyster', 'prawn', 'salmon', 'sardine', 'scallop', 'shrimp', 'squid', 'trout', 'tuna', 'barbeque sauce', 'syrup', 'fish sauce', 'honey', 'mayonnaise', 'mustard', 'soy sauce', 'vinegar', 'sugar', 'avocado', 'broccoli', 'cabbage', 'carrot', 'cauliflower', 'celery', 'corn', 'cucumber', 'eggplant', 'garlic', 'ginger', 'lettuce', 'mushroom', 'olive', 'onion', 'pickle', 'potato', 'pumpkin', 'spinach', 'sweet potato', 'tomato', 'zucchini']

counter = 0
wrongcounter = 0
totalcounter = 0
f = open('Recipes.json','w')
#firebase.database().ref('recipes/rock').set({butter: 1,buttermilk: 1,cheese: 0,custard: 1,eggs: 1,icecream: 0,milk: 0,name: 0,sourcream: 0,yoghurt: 1,base: 'rock',})

f.write('{\n')
f.write('  "recipes" : {\n') 

for each in lines:

    totalcounter = totalcounter + 1
    scraper = scrape_me(each)
    ingredients = scraper.ingredients()
    title = scraper.title().replace('"',"'") 
    contain = []
    legitimate = True
		
    for ingre in ingredients:
	
        edited = ingre.lower()
		
        if any(substring.lower() in edited for substring in list):
            
            for substring in list:
                while substring.lower() in edited:
                    if (substring.lower() == 'butter' and 'peanut butter' in edited):
                        break
                    if (substring.lower() == 'peanut' and 'peanut butter' in edited):
                        break	
                    if (substring.lower() == 'butter' and 'butter milk' in edited):
                        break	
                    if (substring.lower() == 'milk' and 'butter milk' in edited):
                        break	
                    if (substring.lower() == 'chicken' and 'chicken soup' in edited):
                        break
                    if (substring.lower() == 'lamb' and 'lamb soup' in edited):
                        break	
                    if (substring.lower() == 'beef' and 'beef soup' in edited):
                        break						
                    if (substring.lower() == 'egg' and 'eggplant' in edited):
                        break			
                    if (substring.lower() == 'apple' and 'pineapple' in edited):
                        break	
                    if (substring.lower() == 'olive' and 'olive oil' in edited):
                        break							
                    #print(substring.lower())
                    contain.append(substring)
                    break
            				     
        else:
            wrongcounter = wrongcounter + 1
            legitimate = False
            break
	#if all ingredients are legitimate
    if (len(contain) and legitimate == True):
	
        counter = counter + 1
        print(str(counter) + "/" + str(totalcounter))
        #print("firebase.database().ref('recipes/" + scraper.title() + "').set({", end='')
        f.write('    "' + title + '"' + ': {' + '\n')   			
        for substring in list:
            if any(all == substring for all in contain):		
                if (substring != 'pepper' and substring != ':' and substring != 'oil' and substring != 'sugar' and substring != 'ice' and substring != 'water' and substring != 'spray' and substring != 'toppings' and substring != 'spice' and substring != 'sauce' and substring != 'salt'):			
                    f.write('      "' + substring.replace(" ", "") + '"' + ': 1,' + '\n')
            else:
                if (substring != 'pepper' and substring != ':' and substring != 'oil' and substring != 'sugar' and substring != 'ice' and substring != 'water' and substring != 'spray' and substring != 'toppings' and substring != 'spice' and substring != 'sauce' and substring != 'salt'):			
                    f.write('      "' + substring.replace(" ", "") + '"' + ': 0,' + '\n')
            				
        f.write('      "size": ' + str(len(contain)) + ',' + '\n') 					
        f.write('      "base":' + '"' + title + '"' + ',' + '\n')
        f.write('      "link":' + '"' + each + '"' + '\n')
        f.write('    },' + '\n')	

f.write('}}')
f.close()		
        

    #print (str(counter - wrongcounter) + '/' + str(counter))	






