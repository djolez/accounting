import csv
import sys
from datetime import datetime
from peewee import *

db = SqliteDatabase('baza.db')


class Pazar(Model):
    date = DateField()
    dow = CharField()
    gotovina = FloatField()
    kartice = FloatField()
    reprezentacija_ime = FloatField()
    reprezentacija_kuca = FloatField()
    storno = FloatField()
    ukupno_promet = FloatField()
    ukupno = FloatField()

    class Meta:
        database = db  # This model uses the "people.db" database.


db.connect()
db.create_tables([Pazar])


def remove_comma(str):
    return str.replace(',', '')


def prepare_for_db(row):
    row[0] = datetime.strptime(row[0], '%d.%m.%Y')
    for i in range(1, 9):
        row[i] = remove_comma(row[i])
    return row


def write_to_db_from_csv(file_name):
    with open('data/{}'.format(file_name), 'r') as csvFile:
        reader = csv.reader(csvFile)
        for row in reader:
            row = prepare_for_db(row)

            new = Pazar(
                date=row[0],
                dow=row[0].strftime('%A'),
                gotovina=row[1],
                kartice=row[2],
                virman=row[3],
                reprezentacija_ime=row[4],
                reprezentacija_kuca=row[5],
                ukupno_promet=row[6],
                storno=row[7],
                ukupno=row[8]
            )
            new.save()

    csvFile.close()


def get_by_year():
    # query = (Pazar.select(Pazar.date, fn.Sum(Pazar.ukupno).alias('ukupno_godina'))
    #          .group_by(fn.strftime('%Y', Pazar.date)))

    # query = (Pazar.select(Pazar.date, Pazar.ukupno)
    #          .where(fn.date_part('month', Pazar.date) == 4))

    query = (Pazar.select(Pazar.date, Pazar.ukupno)
             .where(Pazar.dow == 'Friday'))

    for res in query:
        print(res.date, int(res.ukupno))


get_by_year()

# write_to_db_from_csv('converted.csv')
