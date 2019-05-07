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
    virman = IntegerField()
    reprezentacija_ime = IntegerField()
    reprezentacija_kuca = IntegerField()
    storno = IntegerField()
    ukupno_promet = IntegerField()
    ukupno = IntegerField()

    class Meta:
        database = db

    @classmethod
    def daily_average_by_month(self, month_no):

        return (Pazar
                .select(Pazar.dow, fn.avg(Pazar.ukupno).alias('dnevni_prosek'))
                .where((fn.date_part('month', Pazar.vreme_prometa) == month_no))
                .group_by(Pazar.dow))

    @classmethod
    def get_by_month(self, month_no):
        years = Pazar.select(Pazar.vreme_prometa.year.distinct())
        result = []

        for year, in years.tuples():
            monthly_values = {
                'year': year,
                'days': (Pazar
                         .select()
                         .where((fn.date_part('month', Pazar.vreme_prometa) == month_no) & (fn.date_part('year', Pazar.vreme_prometa) == year)))
                }
            result.append(monthly_values)
            # result[year] = (Pazar
            #                 .select()
            #                 .where((fn.date_part('month', Pazar.vreme_prometa) == month_no) & (fn.date_part('year', Pazar.vreme_prometa) == year)))
        print(result)
        return result
        # return (Pazar
        #         .select()
        #         .where(fn.date_part('month', Pazar.vreme_prometa) == month_no)
        #         .group_by(fn.strftime('%Y', Pazar.vreme_prometa)))

    @classmethod
    def get_by_year(self):
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

        return query

    @property
    def serialize(self):
        data = {
            'vreme_prometa': self.vreme_prometa,
            'dow': self.dow,
            'gotovina': self.gotovina,
            'kartice': self.kartice,
            'virman': self.virman,
            'reprezentacija_ime': self.reprezentacija_ime,
            'reprezentacija_kuca': self.reprezentacija_kuca,
            'ukupno_promet': self.ukupno_promet,
            'storno': self.storno,
            'ukupno': self.ukupno,
            # 'dnevni_prosek': self.get('dnevni_prosek')
            }

        return data


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


def init_db():
    with db:
        db.create_tables([Pazar])
        # write_to_db_from_csv('staro.csv')
        # write_to_db_from_csv('converted.csv')
        write_to_db_from_csv('out.csv')


if __name__ == '__main__':
    init_db()
