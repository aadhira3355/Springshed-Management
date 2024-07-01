from flask import Flask, request, jsonify
import pandas as pd
from sklearn.externals import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

app = Flask(__name__)

# Load the trained model
model = joblib.load('magnesium.py')  # Replace with the actual path to your trained model

# Endpoint to handle predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the request
        data = request.get_json()

        # Prepare data for prediction
        new_springshed_data = pd.DataFrame(data, index=[0])

        # Make predictions
        prediction = model.predict(new_springshed_data)

        # Return the prediction as JSON
        return jsonify({'predicted_viability': int(prediction[0])})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
#http://127.0.0.1:5000/