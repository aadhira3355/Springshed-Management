import tensorflow as tf
import numpy as np

# Load the saved model
model = tf.keras.models.load_model(r'C:\Users\magnesium 4\magnesium\backend\sih.h5')


# Assuming you have new data for prediction
    
new_data = np.array([])  # Replace with your actual input data

for _ in range(15):
    user_input = float(input("Enter a value: "))
    new_data = np.append(new_data, user_input)

# Reshape the array to ensure it has the correct shape for prediction
new_data = new_data.reshape(1, -1)

# Make predictions
predictions = model.predict(new_data)

# Assuming it's a binary classification model, you might want to threshold the predictions
binary_predictions = (predictions > 0.5).astype('int32')

print("Raw predictions:")
print(predictions)

print("\nBinary predictions:")
print(binary_predictions)
