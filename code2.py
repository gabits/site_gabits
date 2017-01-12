#!/usr/bin/python
my_file = open('html3.html', 'r+')

for img in range(10, 34):
    my_file.write(
        "<div class='col-lg-3 text-left'>\n<a href='img/portfolio/planodevoo/{}.jpg' class='highslide' onclick='return hs.expand(this)'>\n<img class='pdv-thumbnail' src='img/portfolio/planodevoo/{}.jpg' title='Click to enlarge'/></a></div>".format(
            (str(img)), (str(img))))

my_file.close()
