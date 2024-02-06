import sqlite3
import os.path

# Ref-> https://stackoverflow.com/questions/28126140/python-sqlite3-operationalerror-no-such-table
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, 'chinook.db')

connection = sqlite3.connect(db_path)
print('Connect to DB Succeed !')
cursor = connection.execute('SELECT * FROM Customers;')
for row in cursor:
  print(row[0], row[1], row[2])
connection.close()