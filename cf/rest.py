from flask import Flask, jsonify
from flask import request
from sklearn.externals import joblib
import pandas as pd
import os
from flask_cors import CORS
port = int(os.getenv('PORT', 8000))
app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    json_ = [request.json]
    query = pd.DataFrame.from_dict(json_, orient='columns')
    prediction = clf.predict(query)
    value = list(prediction)[0]
    value = str(value)
    print (type(str(value)))
    return jsonify({'prediction': value})
if __name__ == '__main__':
     clf = joblib.load('model.pkl')
     app.run(host='0.0.0.0', port=port)