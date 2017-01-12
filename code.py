#!/usr/bin/python
my_file = open('html.html', 'r+')

for img in range(1, 83):
    my_file.write("<div class='grid-item filter-class-city'>\n<a href='img/portfolio/photography/{}' class='highslide'\nonclick='return hs.expand(this)'>\n<img class='photography' src='img/portfolio/photography/{}'\ntitle='Click to enlarge'/></a>\n</div>".format(
        (str(img) + ".jpg"), (str(img) + "thumb.jpg")))

my_file.close()