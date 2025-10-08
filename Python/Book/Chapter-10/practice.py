from pathlib import Path
hello_file = open(Path.home() / 'Desktop/tmp.txt', encoding='UTF-8') # it will let you read file but not write its deault mode
print(hello_file)