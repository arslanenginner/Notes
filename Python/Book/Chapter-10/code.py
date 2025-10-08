# Standardizing Path Separators
from pathlib import Path
print(Path('spam','bacon','hello'))     # Just provide directory name 
print(str(Path('spam','bacon','malware'))) # Python print double \\ help to understand its path not escape seq.

from pathlib import Path
files=['malware1.txt','malware2.txt','malware3.txt']
for file in files:
    print(Path('C:\\malware\\',file))   # \\ mean path \

##########################################

# Joining Paths
from pathlib import Path
print(Path('spam') / 'bacon' / 'malware') # using / so one of first two values must be path obj
print(Path('spam') / Path('bacon/eggs'))
print(Path('spam') / Path('bacon') / 'eggs')

##########################################

# Current Working Directory
# Joining Paths
from pathlib import Path
import os
print(Path.cwd())   # provide cwd
os.chdir('C:\\Windows\\System32')   # change the cwd to sys32 and dispaly error if we change to dir that not exist
print(Path.cwd())

##########################################

# Home Directory
from pathlib import Path
print(Path.home())  # provide home directory 

##########################################

# creating new direcotry
import os 
os.makedirs(r'C:\Users\ITguy\Desktop\malware\CyberSec')  # create folder in folder

from pathlib import Path
Path(r'C:\Users\ITguy\Desktop\make_dir').mkdir()   # create dir from path obj

##########################################

# Handling Absolute and Relative Paths
from pathlib import Path 
Path.cwd()      # Print absolute path 
print(Path.cwd().is_absolute())
print(Path('spam/bacon/eggs').is_absolute())
Path.cwd() / Path('my/relative/path')   # to get absolute path from relative path

Path('my/relative/path')    # Print relative path
# Path objects are used to represent both relative and absolute paths. The only difference is whether the Path object begins with the root folder or not.
Path.home() / Path('my/relative/path') 

##########################################

# Getting the Parts of a Filepath
from pathlib import Path 
p = Path('C:/Users/ITguy/Desktop/API.txt')
print(p.suffix,p.stem ,p.drive,p.anchor,p.name,p.parent)
print(p.parts,p.parts[3],p.parts[0:2])      # prints all parts, print part at 3rd index, print part at 0 and 1 index

# same as we can use with CWD 
from pathlib import Path 
print(Path.cwd(),Path.cwd().parents[0],Path.cwd().parents[1],Path.cwd().parents[2])

##########################################

# Finding File Sizes and Timestamps
from pathlib import Path
file = Path('C:/Windows/System32/calc.exe')
print(file.stat())  # Return stat of file
print(file.stat().st_size,file.stat().st_gid)   # same as use other also

# convert into time and These times can also be changes manually 
import time 
print(time.asctime(time.localtime(file.stat().st_mtime)))   # Modified time
print('##################################')
print(time.asctime(time.localtime(file.stat().st_ctime)))   # Created time
print('##################################')
print(time.asctime(time.localtime(file.stat().st_atime)))   #last access time

##########################################

# Finding Files Using Glob Patterns glob() provide everything in directory
from pathlib import Path
p=Path(r'C:\Users\ITguy\Desktop')
p.glob('*')   # provide adress
print(list(p.glob('*')))        # provide path in form of list

# we can also use * or ?
from pathlib import Path
for name in Path('C:\\Users\\ITguy\\Desktop').glob('*'): 
    print(name)     # run loop and print one by one

from pathlib import Path
for name in Path('C:\\Users\\ITguy\\Desktop').glob('Nodej?'):   # check if file with name nodej*  exists
    print(name)

##########################################
# Checking Path Validity
from pathlib import Path
wind_dir=Path(r'C:\Users')
print(wind_dir.exists())    # Check path valid
print(wind_dir.is_dir())    # check dir exists

from pathlib import Path
wind_dir=Path(r'C:\Users\ITguy\Desktop\API.txt')
print(wind_dir.is_file())   # check file exist

# you can also check specific drive exist
from pathlib import Path 
drive=Path('D:\\')
print(drive.exists())
##########################################

# The File Reading and Writing Process
from pathlib import Path
p=Path('C:\\Users\\ITguy\\Desktop\\tmp.txt')    # create file if not exist
print(p.write_text('Its me malware a CyberSec student'))    # write in file and print characters including spaces
print(p.read_text())    # print and read data from file