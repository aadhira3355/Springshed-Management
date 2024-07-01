import pandas as pd
import numpy as np

# Set a random seed for reproducibility
np.random.seed(42)

# Number of samples in the dataset
num_samples = 1000

# Generate random values for features
elevation = np.random.uniform(low=500, high=2000, size=num_samples)
precipitation = np.random.uniform(low=0, high=1000, size=num_samples)
land_use = np.random.choice([1, 2, 3], size=num_samples)

# Generate random values for the target variable (0 or 1)
viable_springshed = np.random.choice([0, 1], size=num_samples)

# Create a DataFrame with the generated data
dummy_dataset = pd.DataFrame({
    'elevation': elevation,
    'precipitation': precipitation,
    'land_use': land_use,
    'viable_springshed': viable_springshed
})

# Display the first few rows of the dummy dataset
print(dummy_dataset.head())

# Save the dummy dataset to a CSV file
dummy_dataset.to_csv('dummy.csv', index=False)
