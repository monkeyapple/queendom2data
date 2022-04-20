import os
import psycopg2
from psycopg2.extensions import AsIs
from dotenv import load_dotenv
load_dotenv()
class DatabaseOperate():
    def query_table1(self):
        try:
            # database_url=os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
            database_url=os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
            pg_conn=psycopg2.connect(database_url)
            pg_cur=pg_conn.cursor()
            pg_cur.execute('SELECT * FROM qdscraper_1')
            rows=pg_cur.fetchall()
            
        except(Exception, psycopg2.Error) as error:
            print("Error while fetching data from PostgreSQL", error)
        finally:
            pg_cur.close()
            pg_conn.close()
            return rows

    def query_table2(self):
        try:
            database_url=os.environ.get('DATABASE_URL').replace("postgres://", "postgresql://", 1)
            pg_conn=psycopg2.connect(database_url)
            pg_cur=pg_conn.cursor()
            pg_cur.execute('SELECT * FROM qdscraper_2')
            rows=pg_cur.fetchall()
            
        except(Exception, psycopg2.Error) as error:
            print("Error while fetching data from PostgreSQL", error)
        finally:
            pg_cur.close()
            pg_conn.close()
            return rows
