import csv
import sys
from datetime import datetime
from peewee import *

db = SqliteDatabase('baza.db')


class Pazar(Model):
    vreme_prometa = DateField()
    dow = CharField()
    gotovina = IntegerField()
    kartice = IntegerField()
    reprezentacija_ime = IntegerField()
    reprezentacija_kuca = IntegerField()
    storno = IntegerField()
    ukupno_promet = IntegerField()
    ukupno = IntegerField()

    class Meta:
        database = db


db.connect()
db.create_tables([Pazar])

DISPLAY_NAMES = [
    'Vreme prometa', 'Gotovina', 'Platne kartice', 'Virman',
    'Reprezentacija (na ime)', 'Reprezentacija (na kucu)',
    'Ukupno promet', 'Storno plaćanja', 'Ukupno']
DISPLAY_NAME_DB_FIELD = {
    'Vreme prometa': 'vreme_prometa',
    'Gotovina': 'gotovina',
    'Platne kartice': 'kartice',
    'Virman': 'virman',
    'Reprezentacija (na ime)': 'reprezentacija_ime',
    'Reprezentacija (na kucu)': 'reprezentacija_kuca',
    'Ukupno promet': 'ukupno_promet',
    'Storno plaćanja': 'storno',
    'Ukupno': 'ukupno',
}
DB_FIELD_INDEX = {
    'vreme_prometa': None,
    'gotovina': None,
    'kartice': None,
    'virman': None,
    'reprezentacija_ime': None,
    'reprezentacija_kuca': None,
    'ukupno_promet': None,
    'storno': None,
    'ukupno': None
}


def remove_comma(str):
    return str.replace(',', '')


def convert_float_string_to_int(str):
    return int(float(remove_comma(str)))


def prepare_for_db(row):
    '''
    Convert vreme prometa to datetime
    Rest of the fields are floats, remove comma and convert to int
    '''
    row[DB_FIELD_INDEX['vreme_prometa']] = \
        datetime.strptime(row[DB_FIELD_INDEX['vreme_prometa']], '%d.%m.%Y')

    for field in DB_FIELD_INDEX:
        if(DB_FIELD_INDEX[field] == 0):
            continue
        row[DB_FIELD_INDEX[field]] = convert_float_string_to_int(row[DB_FIELD_INDEX[field]])
    return row


def get_header_indices(header):
    for (i, column_name) in enumerate(header):
        if(column_name in DISPLAY_NAMES):
            DB_FIELD_INDEX[DISPLAY_NAME_DB_FIELD[column_name]] = i


def write_to_db_from_csv(file_name):
    with open('data/{}'.format(file_name), 'r') as csvFile:
        '''
        First line in the file is column names, take it and skip it later
        in the for loop
        '''
        reader = csv.reader(csvFile)

        iterator = iter(reader)
        header = next(iterator)
        get_header_indices(header)

        for row in iterator:
            row = prepare_for_db(row)
            print(row)

            new = Pazar(
                vreme_prometa=row[DB_FIELD_INDEX['vreme_prometa']],
                dow=row[DB_FIELD_INDEX['vreme_prometa']].strftime('%A'),
                gotovina=row[DB_FIELD_INDEX['gotovina']],
                kartice=row[DB_FIELD_INDEX['kartice']],
                virman=row[DB_FIELD_INDEX['virman']],
                reprezentacija_ime=row[DB_FIELD_INDEX['reprezentacija_ime']],
                reprezentacija_kuca=row[DB_FIELD_INDEX['reprezentacija_kuca']],
                ukupno_promet=row[DB_FIELD_INDEX['ukupno_promet']],
                storno=row[DB_FIELD_INDEX['storno']],
                ukupno=row[DB_FIELD_INDEX['ukupno']]
            )
            new.save()

    csvFile.close()


def get_by_year():
    # query = (Pazar.select(Pazar.date, fn.Sum(Pazar.ukupno).alias('ukupno_godina'))
    #          .group_by(fn.strftime('%Y', Pazar.date)))

    query = (Pazar.select(Pazar.vreme_prometa, Pazar.ukupno)
             .where(fn.date_part('month', Pazar.vreme_prometa) == 4))

    # query = (Pazar.select(Pazar.vreme_prometa, Pazar.ukupno)
    #          .where(fn.date_part('year', Pazar.vreme_prometa).between(2017, 2018)))

    # query = (Pazar.select(Pazar.vreme_prometa, Pazar.ukupno)
    #          .where(Pazar.vreme_prometa.between(datetime(2017, 8, 1), datetime(2018, 8, 1))))

    # query = (Pazar.select(Pazar.vreme_prometa, Pazar.ukupno)
    #          .where(Pazar.dow == 'Friday'))

    for res in query:
        print(res.vreme_prometa, int(res.ukupno))


get_by_year()

# write_to_db_from_csv('converted.csv')
