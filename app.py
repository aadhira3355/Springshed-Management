from flask import Flask, request, jsonify
from flask_cors import CORS,cross_origin
from tensorflow import keras 
from keras.models import load_model

import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load your water quality model
model = load_model('sih.h5')

@app.route('/predict', methods=['POST'])
@cross_origin(origin='*')
def predict():
    try:
        # Get user input data from the request
        input_data = request.get_json()

        # Convert input data to a NumPy array
        input_array = np.array([input_data[f'param{i+1}'] for i in range(16)])

        # Reshape the array to match the model's input shape
        input_array = input_array.reshape(1, -1)
        
        # Make predictions
        predictions = model.predict(input_array)

        # Assuming it's a binary classification model, you might want to threshold the predictions
        binary_predictions = (predictions > 0.5).astype('int32')

        # Make predictions using the loaded model
        predicted_output = model.predict(input_array)

        # Return the prediction as a float
        return jsonify({'predicted_output': binary_predictions.tolist()})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
