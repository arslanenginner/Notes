

import pyperclip , re , os
paste_data=pyperclip.paste()
pattern=re.compile(r'''
((\+)?|\d{1,5}|\(\d{3}\)?)   # match one
(\s|-|\.)?
(\d{3})
(\s|-|\.)
(\d{4})
(\s*(|ext|x|ext\.)\s*\d{2,5})?

''',re.VERBOSE)
