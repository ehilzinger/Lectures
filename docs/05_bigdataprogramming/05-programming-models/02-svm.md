---
sidebar_position: 2
---

# Support Vector Machines (SVM): Your New Best Friend in Data Classification

Greetings, future data scientists and machine learning enthusiasts! Today, we're diving into one of the coolest tools in the world of machine learning: **Support Vector Machines** (SVM). Whether you’re a newbie to machine learning or you’ve already wrangled a few datasets, SVMs are one of those must-know techniques that you’ll want in your toolbox. So, buckle up, and let’s take this journey together!

---

### What is a Support Vector Machine?

At its core, **Support Vector Machine (SVM)** is a **supervised learning algorithm** used primarily for **classification**, although it can also handle **regression**. The main goal of an SVM is to find the **best boundary** (called a hyperplane) that separates the data into different classes. If you’ve ever been at a party and wished for a magic line that could separate the “cat people” from the “dog people” without overlap, that’s kind of what SVM does. 

Now, imagine this in a multi-dimensional space—SVM draws a hyperplane that can perfectly divide your data into classes.

---

### How Does SVM Work?

SVM works by finding the **hyperplane** (or decision boundary) that best separates the classes in your data. But there’s a twist: unlike some classification algorithms that only look for a good boundary, SVM tries to maximize the **margin** between this boundary and the closest data points from either class. These closest points are called **support vectors**.

Here's how it works in a few steps:

1. **Mapping the Data**: Your data is plotted in an n-dimensional space (where n is the number of features). For a 2D example, think of it as scattering points on a sheet of paper. Each point belongs to one of two classes (e.g., "cats" or "dogs").
   
2. **Finding the Hyperplane**: The SVM algorithm finds a line (or in higher dimensions, a hyperplane) that separates the data points into the two classes. The goal is to find the line that maximizes the margin (the distance between the line and the nearest data points from each class).

3. **Maximizing the Margin**: The larger the margin between the classes, the better. The support vectors (the data points closest to the boundary) are critical in defining this hyperplane.

4. **Handling Non-Linear Data**: Sometimes, data isn't perfectly separable by a straight line (think of data shaped like a spiral or donut). In such cases, SVM uses something called the **kernel trick** to map the data into a higher-dimensional space where it *is* linearly separable. This allows SVM to handle much more complex data.

---

### Real-World Example: Classifying Emails as Spam or Not Spam

Let’s say you want to build an email spam filter using SVM. Here’s how it would work:

1. **Input Data**: Each email is represented by a set of features (like the frequency of certain words). Each email is labeled either "spam" or "not spam."
   
2. **Training the SVM**: The SVM model analyzes the emails and finds the best hyperplane that separates spam from non-spam emails, maximizing the margin between the two classes.
   
3. **Classifying New Emails**: When a new email arrives, the SVM checks which side of the hyperplane it falls on. If it’s on the "spam" side, it gets flagged as spam. If it’s on the "not spam" side, it passes through safely.

---

### The Magic of Kernels

What happens if your data isn’t linearly separable (i.e., a straight line can’t divide it)? That’s where the **kernel trick** comes in. Kernels are mathematical functions that allow SVM to map data into higher dimensions, where it becomes easier to separate.

The most common kernels are:
- **Linear Kernel**: Used when the data is linearly separable.
- **Polynomial Kernel**: Used for more complex relationships.
- **Radial Basis Function (RBF) Kernel**: Handles data that forms circular or more complex boundaries. It’s often the go-to kernel for non-linear problems.

Think of kernels as a magical formula that transforms your data into a form where drawing a line (or hyperplane) between classes becomes possible.

---

### Why Use SVM?

SVM is powerful for several reasons:

#### **Advantages**:
1. **Effective in High-Dimensional Spaces**: SVM works well even when the number of features is greater than the number of data points. So, it's great for text classification or gene expression data.
2. **Works Well for Complex Data**: Thanks to the kernel trick, SVM can handle non-linear data by mapping it into higher dimensions.
3. **Robust to Overfitting**: SVM aims to find the maximum-margin hyperplane, which helps in generalizing well to new, unseen data (especially with the right choice of kernel).
4. **Flexibility**: You can tune the margin by using a **soft margin**, which allows for some misclassification in the training data to make the model more adaptable.

#### **Disadvantages**:
1. **Slower with Large Datasets**: Training an SVM can be computationally expensive for very large datasets, especially if the number of samples is high.
2. **Not Ideal for Noisy Data**: If your dataset has a lot of overlap between classes (e.g., cats and dogs that look very similar), SVM may struggle to find a clear margin.
3. **Choosing the Right Kernel**: Selecting the right kernel and parameters can require some trial and error, and it may take time to fine-tune the model.

---

### SVM vs Other Algorithms

Let’s see how SVM stacks up against other machine learning algorithms:

- **Logistic Regression**: Logistic regression works well for binary classification but struggles with non-linearly separable data, where SVM shines.
- **Decision Trees**: Decision trees are easier to interpret and handle categorical data well, but they’re prone to overfitting. SVM, especially with kernels, can manage complex, high-dimensional data better.
- **k-Nearest Neighbors (k-NN)**: k-NN is easy to implement but computationally expensive as it has to compare each new data point with all training data. SVM, once trained, is faster for classification tasks.

---

### When Should You Use SVM?

SVM is an excellent choice for tasks where:
- Your data has a **clear margin** between classes.
- You’re working with **high-dimensional** data (such as text, image recognition, or bioinformatics).
- You need a model that can handle **non-linear boundaries** (with the right kernel).

It’s less ideal if:
- You have **large datasets** that require fast training times.
- Your data is **noisy** and there isn’t a clear margin between classes.

---

### Challenge Time! Let's Get Hands-On

Here are a few exercises to help you master SVM:

#### Challenge 1: **Linearly Separable Data**
- **Description**: You have a dataset of 2D points (x, y) that are clearly separated into two classes (e.g., above and below the x-axis). Implement a linear SVM to classify these points.
- **Hint 1**: Use a linear kernel to keep things simple.
- **Hint 2**: Plot the decision boundary to visualize how well the SVM separates the points.

<details>
  <summary>Solution</summary>

  ### Walkthrough: Implementing a Linear SVM for Linearly Separable 2D Data

This task involves using a linear Support Vector Machine (SVM) to classify 2D points into two classes. SVMs work well for linearly separable data because they find the hyperplane (in 2D, this is a line) that best separates the classes by maximizing the margin between them.

Let's walk through this task step by step in Python, using the `scikit-learn` library to implement the linear SVM and `matplotlib` to plot the data and decision boundary.

---

### Step 1: Installing Required Libraries

If you haven't already installed `scikit-learn` and `matplotlib`, you can install them using pip:
```bash
pip install scikit-learn matplotlib
```

### Step 2: Creating the Dataset

We need to generate or define a set of 2D points. For simplicity, we'll create two clusters of points that are linearly separable: one above the x-axis and one below the x-axis. We'll label these points as class 1 (above the x-axis) and class -1 (below the x-axis).

```python
import numpy as np
import matplotlib.pyplot as plt

# Generating linearly separable 2D data
np.random.seed(42)
n_points = 50

# Class 1: Points above the x-axis
X1 = np.random.randn(n_points, 2) + np.array([2, 2])
y1 = np.ones(n_points)

# Class -1: Points below the x-axis
X2 = np.random.randn(n_points, 2) + np.array([-2, -2])
y2 = -np.ones(n_points)

# Combine the data
X = np.vstack((X1, X2))
y = np.hstack((y1, y2))
```

### Explanation:
- **`np.random.randn(n_points, 2)`** generates random points from a normal distribution for both classes.
- **`np.vstack`** vertically stacks the two class data, while **`np.hstack`** stacks the labels (1 and -1).

### Step 3: Implementing a Linear SVM

We'll use `scikit-learn`'s `SVC` class to create and train a linear SVM. By default, SVC uses a radial basis function (RBF) kernel, but we can specify the `kernel='linear'` parameter to use a linear kernel.

```python
from sklearn.svm import SVC

# Create a linear SVM classifier
svm = SVC(kernel='linear')

# Train the SVM using the dataset
svm.fit(X, y)
```

### Explanation:
- **`SVC`** is the class for support vector classification in `scikit-learn`.
- The `fit()` method trains the SVM on the provided data (`X` for features, `y` for labels).

### Step 4: Visualizing the Decision Boundary

To understand how well the SVM separates the data, we'll visualize the decision boundary. The decision boundary is the line that separates the two classes, and the support vectors are the points that lie closest to this line.

We'll use a grid of points to evaluate the SVM's decision function and plot the decision boundary where the decision function value is zero.

```python
# Create a grid to plot the decision boundary
xx, yy = np.meshgrid(np.linspace(-5, 5, 500), np.linspace(-5, 5, 500))
xy = np.vstack([xx.ravel(), yy.ravel()]).T
Z = svm.decision_function(xy).reshape(xx.shape)

# Plot the data points and decision boundary
plt.scatter(X1[:, 0], X1[:, 1], color='blue', label='Class 1')
plt.scatter(X2[:, 0], X2[:, 1], color='red', label='Class -1')

# Plot decision boundary and margins
plt.contour(xx, yy, Z, levels=[-1, 0, 1], linestyles=['--', '-', '--'], colors='k')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('Linear SVM Decision Boundary')
plt.show()
```

### Explanation:
- **`np.meshgrid()`** creates a grid of points across the plot space.
- **`svm.decision_function()`** evaluates the SVM's decision function on this grid.
- The decision boundary is drawn where the decision function equals 0, and the margins are at `-1` and `1`.
- The `contour()` function is used to plot the boundary and margins.

### Step 5: Interpreting the Results

- The **solid line** in the plot represents the decision boundary where the SVM classifies the points into different classes.
- The **dashed lines** represent the margins where the support vectors lie. The SVM tries to maximize the distance between these dashed lines.
- The **blue** points represent Class 1 (above the x-axis), and the **red** points represent Class -1 (below the x-axis).

### Full Code

Here's the complete code for the task:

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.svm import SVC

# Step 1: Generate the linearly separable data
np.random.seed(42)
n_points = 50
X1 = np.random.randn(n_points, 2) + np.array([2, 2])
y1 = np.ones(n_points)
X2 = np.random.randn(n_points, 2) + np.array([-2, -2])
y2 = -np.ones(n_points)
X = np.vstack((X1, X2))
y = np.hstack((y1, y2))

# Step 2: Train the linear SVM
svm = SVC(kernel='linear')
svm.fit(X, y)

# Step 3: Visualize the decision boundary
xx, yy = np.meshgrid(np.linspace(-5, 5, 500), np.linspace(-5, 5, 500))
xy = np.vstack([xx.ravel(), yy.ravel()]).T
Z = svm.decision_function(xy).reshape(xx.shape)

plt.scatter(X1[:, 0], X1[:, 1], color='blue', label='Class 1')
plt.scatter(X2[:, 0], X2[:, 1], color='red', label='Class -1')
plt.contour(xx, yy, Z, levels=[-1, 0, 1], linestyles=['--', '-', '--'], colors='k')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('Linear SVM Decision Boundary')
plt.show()
```

### Final Thoughts:
This walkthrough demonstrates how to generate linearly separable data, train an SVM with a linear kernel, and visualize the decision boundary. The SVM finds the optimal line that separates the two classes by maximizing the margin between them.

If you have any questions or need further clarification, feel free to ask!
</details>

#### Challenge 2: **Non-Linearly Separable Data**
- **Description**: This time, your data forms a circular pattern, with one class in the center and the other forming a ring around it. Use SVM with an RBF kernel to classify the points.
- **Hint 1**: Use the RBF kernel to handle the circular boundary.
- **Hint 2**: Tune the kernel parameters (like gamma) to improve performance.

<details>
  <summary>Solution</summary>

    ### Walkthrough: Implementing an SVM with an RBF Kernel for Non-Linearly Separable Data

In this task, we need to classify non-linearly separable 2D points. The data forms a circular pattern: one class occupies the center, while the other forms a ring around it. A linear kernel won't work here because the decision boundary is non-linear. To handle this, we'll use an **RBF (Radial Basis Function)** kernel, which is effective for non-linear boundaries.

We'll walk through this step by step in Python using `scikit-learn` and `matplotlib` as in the previous task.

---

### Step 1: Installing Required Libraries

If you haven't already installed `scikit-learn` and `matplotlib`, you can do so by running:
```bash
pip install scikit-learn matplotlib
```

### Step 2: Creating the Circular Dataset

To create the circular dataset, we can generate points that form a circular pattern. We'll use the `make_circles` function from `scikit-learn` to create this dataset.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_circles

# Generating circular data with noise
X, y = make_circles(n_samples=500, factor=0.3, noise=0.1)

# Visualize the data
plt.scatter(X[y == 0][:, 0], X[y == 0][:, 1], color='red', label='Class 0 (Center)')
plt.scatter(X[y == 1][:, 0], X[y == 1][:, 1], color='blue', label='Class 1 (Ring)')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('Circular Data')
plt.show()
```

### Explanation:
- **`make_circles()`** generates two sets of points, one forming a circle at the center, and the other forming a ring around it. The `factor` controls the size of the inner circle, while `noise` adds slight randomness to the points.
- The red points represent the inner class (Class 0), and the blue points form the ring (Class 1).

### Step 3: Implementing the SVM with RBF Kernel

We'll now implement the SVM with an RBF kernel. The RBF kernel is ideal for non-linearly separable data because it transforms the input space into a higher-dimensional space, where a linear boundary can be drawn.

```python
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV

# Create an SVM classifier with RBF kernel
svm = SVC(kernel='rbf')

# Train the SVM using the dataset
svm.fit(X, y)
```

### Explanation:
- **`kernel='rbf'`** specifies that we are using an RBF kernel.
- The `fit()` method trains the SVM on the circular dataset.

### Step 4: Tuning the RBF Kernel Parameters

The RBF kernel has two important parameters:
- **`C`**: Regularization parameter, controlling the trade-off between maximizing the margin and minimizing classification errors.
- **`gamma`**: Controls the influence of a single training example. Low `gamma` values mean a point has a far-reaching influence, while high `gamma` values mean each point's influence is localized.

We'll use `GridSearchCV` to find the optimal values for `C` and `gamma`.

```python
# Define the parameter grid
param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [0.1, 1, 10, 100]}

# Use GridSearchCV to find the best parameters
grid_search = GridSearchCV(SVC(kernel='rbf'), param_grid, cv=5)
grid_search.fit(X, y)

# Best parameters found by GridSearchCV
print(f"Best parameters: {grid_search.best_params_}")
```

### Explanation:
- **`GridSearchCV`** performs an exhaustive search over specified parameter values (in this case, different values for `C` and `gamma`).
- The `best_params_` attribute provides the optimal `C` and `gamma` values.

### Step 5: Visualizing the Decision Boundary

After training the SVM, we will visualize how well it separates the circular data. Similar to the linear case, we'll plot the decision boundary and the margins.

```python
# Create a grid to plot the decision boundary
xx, yy = np.meshgrid(np.linspace(-1.5, 1.5, 500), np.linspace(-1.5, 1.5, 500))
xy = np.vstack([xx.ravel(), yy.ravel()]).T
Z = svm.decision_function(xy).reshape(xx.shape)

# Plot the data points and decision boundary
plt.scatter(X[y == 0][:, 0], X[y == 0][:, 1], color='red', label='Class 0 (Center)')
plt.scatter(X[y == 1][:, 0], X[y == 1][:, 1], color='blue', label='Class 1 (Ring)')

# Plot decision boundary and margins
plt.contour(xx, yy, Z, levels=[-1, 0, 1], linestyles=['--', '-', '--'], colors='k')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('SVM with RBF Kernel Decision Boundary')
plt.show()
```

### Explanation:
- Similar to the linear case, **`np.meshgrid()`** creates a grid of points for plotting, and **`svm.decision_function()`** evaluates the decision function for each point on the grid.
- **`contour()`** draws the decision boundary (where the decision function equals 0) and the margins (where the decision function equals -1 and 1).

### Full Code

Here’s the complete Python code for solving the task:

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_circles
from sklearn.svm import SVC
from sklearn.model_selection import GridSearchCV

# Step 1: Generate the circular data
X, y = make_circles(n_samples=500, factor=0.3, noise=0.1)

# Visualize the data
plt.scatter(X[y == 0][:, 0], X[y == 0][:, 1], color='red', label='Class 0 (Center)')
plt.scatter(X[y == 1][:, 0], X[y == 1][:, 1], color='blue', label='Class 1 (Ring)')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('Circular Data')
plt.show()

# Step 2: Train the SVM with RBF kernel
svm = SVC(kernel='rbf')
svm.fit(X, y)

# Step 3: Tune the hyperparameters using GridSearchCV
param_grid = {'C': [0.1, 1, 10, 100], 'gamma': [0.1, 1, 10, 100]}
grid_search = GridSearchCV(SVC(kernel='rbf'), param_grid, cv=5)
grid_search.fit(X, y)
print(f"Best parameters: {grid_search.best_params_}")

# Step 4: Visualize the decision boundary
xx, yy = np.meshgrid(np.linspace(-1.5, 1.5, 500), np.linspace(-1.5, 1.5, 500))
xy = np.vstack([xx.ravel(), yy.ravel()]).T
Z = svm.decision_function(xy).reshape(xx.shape)

plt.scatter(X[y == 0][:, 0], X[y == 0][:, 1], color='red', label='Class 0 (Center)')
plt.scatter(X[y == 1][:, 0], X[y == 1][:, 1], color='blue', label='Class 1 (Ring)')
plt.contour(xx, yy, Z, levels=[-1, 0, 1], linestyles=['--', '-', '--'], colors='k')
plt.legend()
plt.xlabel('x1')
plt.ylabel('x2')
plt.title('SVM with RBF Kernel Decision Boundary')
plt.show()
```

### Final Thoughts:
This walkthrough demonstrates how to use an SVM with an RBF kernel to classify non-linearly separable data. By tuning parameters like `C` and `gamma`, you can improve the model's performance and effectively handle more complex patterns.

Let me know if you have any questions or need further clarifications!

</details>

#### Challenge 3: **Text Classification**
- **Description**: Use SVM to classify movie reviews as either positive or negative. Each review is represented by a set of features (like word frequencies).
- **Hint 1**: Use an SVM with a linear kernel, as text data is often linearly separable in high-dimensional spaces.
- **Hint 2**: Preprocess the text by tokenizing and removing stop words to improve accuracy.

<details>
  <summary>Solution</summary>

  ### Walkthrough: Implementing an SVM for Text Classification

In this task, we'll use Support Vector Machines (SVM) with a **linear kernel** to classify movie reviews as either positive or negative. Each review is represented by a set of features, such as word frequencies. Text data is often linearly separable in high-dimensional spaces, which is why the linear kernel works well.

To accomplish this, we'll preprocess the text (tokenize, remove stop words), convert the text into numerical features (like term frequencies), and then train a linear SVM on this data.

---

### Step 1: Installing Required Libraries

First, install the necessary libraries. We'll use `scikit-learn` for the SVM and `nltk` for text preprocessing.

```bash
pip install scikit-learn nltk
```

### Step 2: Loading and Preparing the Dataset

We'll use the **IMDB movie reviews** dataset for this task. This dataset is available in `scikit-learn`. Alternatively, you can use any dataset with labeled text reviews.

```python
from sklearn.datasets import load_files

# Load movie reviews dataset (positive and negative reviews)
reviews = load_files('txt_sentoken', categories=['pos', 'neg'])
X, y = reviews.data, reviews.target

# Check the data size and first review
print(f"Number of reviews: {len(X)}")
print(f"First review:\n{X[0]}")
```

### Explanation:
- **`load_files`** loads text data from files. The dataset has two categories: "pos" for positive and "neg" for negative reviews.
- **`X`** contains the text reviews, and **`y`** contains the labels (0 for negative, 1 for positive).

### Step 3: Preprocessing the Text Data

Text preprocessing is essential to remove unnecessary words (like stop words) and prepare the data for classification. We'll use:
- **Tokenization**: Split the text into individual words.
- **Removing stop words**: Remove common words like "the" and "is" that don't add value.
- **TF-IDF Vectorization**: Convert the text into numerical features based on word frequencies and their importance in the document (Term Frequency-Inverse Document Frequency).

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from nltk.corpus import stopwords
import nltk

# Download stopwords
nltk.download('stopwords')
stop_words = stopwords.words('english')

# Convert the text data into TF-IDF features
vectorizer = TfidfVectorizer(stop_words=stop_words, max_df=0.8, min_df=5)

# Transform the text data into TF-IDF feature vectors
X_tfidf = vectorizer.fit_transform(X)
print(f"TF-IDF matrix shape: {X_tfidf.shape}")
```

### Explanation:
- **`TfidfVectorizer`** converts the text into a matrix of TF-IDF features. We set `stop_words` to the list of common stop words in English and limit the maximum and minimum document frequencies (`max_df` and `min_df`) to filter out unimportant words.
- **`X_tfidf`** is the TF-IDF matrix where each row represents a review and each column represents a term.

### Step 4: Implementing the Linear SVM

We'll now train a linear SVM on the preprocessed data. Text data is high-dimensional, so using a linear kernel is generally effective.

```python
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, y, test_size=0.2, random_state=42)

# Train the SVM with a linear kernel
svm = SVC(kernel='linear')
svm.fit(X_train, y_train)

# Predict the labels for the test set
y_pred = svm.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy * 100:.2f}%")
```

### Explanation:
- **`train_test_split()`** splits the dataset into training (80%) and testing (20%) sets.
- **`SVC(kernel='linear')`** creates an SVM with a linear kernel, which is well-suited for text classification.
- We use the `fit()` method to train the SVM on the training data and the `predict()` method to classify the test reviews.
- **`accuracy_score()`** calculates the accuracy of the classifier on the test set.

### Step 5: Tuning the SVM

You can further improve the performance by tuning hyperparameters like **C** (the regularization parameter). We'll use **GridSearchCV** to find the optimal value for `C`.

```python
from sklearn.model_selection import GridSearchCV

# Define the parameter grid
param_grid = {'C': [0.1, 1, 10, 100]}

# Use GridSearchCV to find the best parameters
grid_search = GridSearchCV(SVC(kernel='linear'), param_grid, cv=5)
grid_search.fit(X_train, y_train)

# Best parameters found by GridSearchCV
print(f"Best parameters: {grid_search.best_params_}")

# Use the best model to predict the test set
best_svm = grid_search.best_estimator_
y_pred_best = best_svm.predict(X_test)

# Calculate accuracy with the best model
accuracy_best = accuracy_score(y_test, y_pred_best)
print(f"Best model accuracy: {accuracy_best * 100:.2f}%")
```

### Explanation:
- **`GridSearchCV`** performs a cross-validated search over different values of the `C` parameter.
- The best model is used to predict the labels of the test set, and the accuracy is reported.

### Full Code

Here’s the complete Python code for solving the text classification task:

```python
import numpy as np
from sklearn.datasets import load_files
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score
import nltk
from nltk.corpus import stopwords

# Load movie reviews dataset
reviews = load_files('txt_sentoken', categories=['pos', 'neg'])
X, y = reviews.data, reviews.target

# Download stopwords
nltk.download('stopwords')
stop_words = stopwords.words('english')

# Preprocess the text data using TF-IDF
vectorizer = TfidfVectorizer(stop_words=stop_words, max_df=0.8, min_df=5)
X_tfidf = vectorizer.fit_transform(X)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_tfidf, y, test_size=0.2, random_state=42)

# Train the SVM with a linear kernel
svm = SVC(kernel='linear')
svm.fit(X_train, y_train)

# Predict and evaluate
y_pred = svm.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy * 100:.2f}%")

# Hyperparameter tuning with GridSearchCV
param_grid = {'C': [0.1, 1, 10, 100]}
grid_search = GridSearchCV(SVC(kernel='linear'), param_grid, cv=5)
grid_search.fit(X_train, y_train)
print(f"Best parameters: {grid_search.best_params_}")

# Use the best model
best_svm = grid_search.best_estimator_
y_pred_best = best_svm.predict(X_test)
accuracy_best = accuracy_score(y_test, y_pred_best)
print(f"Best model accuracy: {accuracy_best * 100:.2f}%")
```

### Final Thoughts:
This walkthrough demonstrates how to preprocess text data, use a linear SVM to classify it, and tune the hyperparameters to improve performance. By representing the reviews as TF-IDF features and using a linear kernel, we can effectively classify movie reviews as positive or negative.

Let me know if you need further assistance!

</details>

---

### Wrapping It All Up

Support Vector Machines may sound like something straight out of a sci-fi movie, but they’re one of the most powerful and versatile tools in machine learning. Whether you’re classifying spam, predicting diseases, or sorting your favorite cat memes, SVM is there to save the day by finding that perfect boundary between your data points. While it can be a bit computationally heavy for large datasets, the precision and flexibility it offers make it an essential algorithm in the machine learning toolkit.

So, ready to master the art of finding the perfect hyperplane? It’s time to start vectoring your support like a pro!