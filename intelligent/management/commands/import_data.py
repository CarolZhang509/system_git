# intelligent/management/commands/import_data.py
from django.core.management.base import BaseCommand
import pandas as pd
from intelligent.models import WaterQualityPredict

class Command(BaseCommand):
    help = 'Import data for WaterQualityPredict model from CSV'

    def handle(self, *args, **options):
        file_path = 'waterqualitypredict/all_factors_forecast_result.csv'  # 更新为实际的 CSV 文件路径
        df = pd.read_csv(file_path)

        for index, row in df.iterrows():
            WaterQualityPredict.objects.create(
                TEMP=row['TEMP'],   # 根据 CSV 列名和模型字段名调整
                PH=row['pH'],
                DO=row['DO'],
                Cond=row['Cond'],
                NTU=row['NTU'],
                Mn=row['Mn'],
                NH3=row['NH3']
            )

        self.stdout.write(self.style.SUCCESS('Successfully imported water quality data'))
