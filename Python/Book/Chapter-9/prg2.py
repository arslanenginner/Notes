Regex Practice Projects with re Module (Easy → Moderate)
Validate Phone Numbers
Task: Write a program that asks the user for a phone number and checks if it matches formats like:
123-456-7890
(123) 456-7890
123.456.7890
Regex Hint: Use groups for (\d{3}), separators [-.\s], and optional parentheses.

---

Email Address Validator
Task: Input a string and check if it’s a valid email address.
Regex Hint: Basic structure → username@domain.extension.

---

Extract Hashtags from Text
Task: Given a sentence (like a social media post), extract all words that start with #.
Regex Hint: Use r"#\w+".

---

Find All Dates
Task: Parse a text and extract all dates in formats like DD/MM/YYYY or DD-MM-YYYY.
Regex Hint: \d{2}[-/]\d{2}[-/]\d{4}.

---

Discord Username Checker
Task: Validate Discord-style usernames like User#1234.
Regex Hint: [A-Za-z0-9_]{2,32}#\d{4}.

---

URL Extractor
Task: Given text with links, extract all URLs starting with http or https.
Regex Hint: https?://[^\s]+.

---

Strong Password Validator
Task: Check if a password meets conditions:
At least 8 characters
One uppercase
One lowercase
One digit
One special character
Regex Hint: Use multiple lookaheads: (?=.*[A-Z]), (?=.*[a-z]), (?=.*\d), (?=.*[@$!%*?&]).

---

Log File IP Extractor
Task: From a log file, extract all IPv4 addresses.
Regex Hint: \b\d{1,3}(\.\d{1,3}){3}\b.

---

Simple Search-and-Replace
Task: Ask the user for text, a word to replace, and a replacement word. Replace all matches using re.sub.

---

Censor Bad Words
Task: Given a list of forbidden words, replace them in text with ***.
Regex Hint: Use alternation (word1|word2|word3).
