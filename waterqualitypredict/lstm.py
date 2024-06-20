import pandas as pd
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, LSTM
from sklearn.preprocessing import StandardScaler
import time

look_back = 20
look_after = 1

scaler = StandardScaler()

def process_data(dataset): 
    data = dataset.dropna()
    dataset = data.astype('float32')
    dataset = np.array(dataset)
    dataset = dataset.reshape(-1, 1)
    dataset = scaler.fit_transform(dataset)
    return dataset

def create_dataset(dataset, look_back=1, look_after=1):                      
    dataX, dataY = [], []
    for i in range(len(dataset) - look_back):
        x = dataset[i:(i+look_back), 0]
        y = dataset[(i+look_back):(i+ look_after+look_back), 0]                   
        dataX.append(x)
        dataY.append(y)
    return np.array(dataX), np.array(dataY)

def get_train_set(dataset, scale=1):
    train_size = int(len(dataset) * scale)
    train = dataset[0:train_size, :]
    trainX, trainY = create_dataset(train, look_back, look_after)
    
    # 调试信息
    print(f"trainX shape before reshape: {trainX.shape}")
    print(f"trainY shape: {trainY.shape}")
    
    if trainX.shape[0] == 0 or trainX.shape[1] != look_back:
        raise ValueError("The dataset is too small or not correctly shaped to generate the required sequences.")
    
    trainX = np.reshape(trainX, (trainX.shape[0], 1, trainX.shape[1]))
    
    # 调试信息
    print(f"trainX shape after reshape: {trainX.shape}")
    
    return trainX, trainY

def train(trainX, trainY, input_dim=1, output_dim=1, epoch=10):
    model = Sequential()
    model.add(LSTM(4, input_shape=(1, input_dim)))
    model.add(Dense(output_dim))
    model.compile(loss='mse', optimizer='rmsprop')
    model.fit(trainX, trainY, epochs=epoch, batch_size=1, verbose=1)
    return model

def get_forecast_input(trainx, trainy):
    trainx = trainx[trainx.shape[0] - 1][trainx.shape[1] - 1]
    trainy = trainy[trainy.shape[0] - 1]
    input = []
    for i in range(look_after, look_back):
        input.append(trainx[i])
    for i in range(look_after):
        input.append(trainy[i])
    input = np.reshape(input, (1, 1, look_back))
    return input

def forecast(data, type='month'):
    data = process_data(data)
    trainx, trainy = get_train_set(data)
    model = train(trainx, trainy, input_dim=look_back, output_dim=look_after, epoch=20)
    forecast_result = []
    first_day_input = get_forecast_input(trainx, trainy)
    first_day_forecast = model.predict(first_day_input)
    second_day_input = get_forecast_input(first_day_input, first_day_forecast)
    second_day_forecast = model.predict(second_day_input)
    third_day_input = get_forecast_input(second_day_input, second_day_forecast)
    third_day_forecast = model.predict(third_day_input)
    fouth_day_input = get_forecast_input(third_day_input, third_day_forecast)
    fouth_day_forecast = model.predict(fouth_day_input)
    if type == 'month':
        five_day_input = get_forecast_input(fouth_day_input, fouth_day_forecast)
        five_day_forecast = model.predict(five_day_input)
        six_day_input = get_forecast_input(five_day_input, five_day_forecast)
        six_day_forecast = model.predict(six_day_input)
        seven_day_input = get_forecast_input(six_day_input, six_day_forecast)
        seven_day_forecast = model.predict(seven_day_input)
    first_day_forecast = scaler.inverse_transform(first_day_forecast)
    second_day_forecast = scaler.inverse_transform(second_day_forecast)
    third_day_forecast = scaler.inverse_transform(third_day_forecast)
    fouth_day_forecast = scaler.inverse_transform(fouth_day_forecast)
    if type == 'month':
        five_day_forecast = scaler.inverse_transform(five_day_forecast)
        six_day_forecast = scaler.inverse_transform(six_day_forecast)
        seven_day_forecast = scaler.inverse_transform(seven_day_forecast)
    forecast_result.append(first_day_forecast)
    forecast_result.append(second_day_forecast)
    forecast_result.append(third_day_forecast)
    forecast_result.append(fouth_day_forecast)
    if type == 'month':
        forecast_result.append(five_day_forecast)
        forecast_result.append(six_day_forecast)
        forecast_result.append(seven_day_forecast)
    forecast_result = np.array(forecast_result)
    count = 4
    if type == 'month':
        count = 7
    forecast_result = np.reshape(forecast_result, count)
    return forecast_result

if __name__ == '__main__':
    factor = 'Cond'
    start = time.time()
    np.random.seed(0)
    dataframe = pd.read_csv('./Data/水质数据.csv', parse_dates=['date'], index_col='date')
    dataframe.replace('--', np.nan, inplace=True)
    dataframe.index = pd.to_datetime(dataframe.index, format='%m/%d/%Y %H:%M:%S')
    
    
    data = dataframe[factor]
    data = data['2024-04-11 0:7:12':'2024-05-11 23:52:48'].interpolate()
    
    # 调试信息
    print(f"Data shape: {data.shape}")
    
    result = forecast(data)
    
    # 将结果保存到 CSV 文件
    result_df = pd.DataFrame(result, columns=[factor])
    result_df.to_csv("forecast_result.csv", index=False)
    
    print("预测结果已保存到 forecast_result.csv 文件")
    
    end = time.time()
    time_consuming = end - start
    print('预测耗时: %.3f 秒' % time_consuming)
