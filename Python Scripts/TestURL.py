from bs4 import BeautifulSoup
import requests

f = open('output.txt','w')
# 2827 pages
for i in range(1, 300):
    url = "http://allrecipes.com/recipes/?sort=Title&page=" + str(i)
    print(i)
    r = requests.get(url)
    soup = BeautifulSoup(r.content, "lxml")
    links = soup.find_all('article', {'class': "fixed-recipe-card"})
    for ele in links:
        f.write(ele.a["href"] + '\n')

f.close()


