---
title: MNIST Digits Neural Network
summary: A neural network design from scratch to identify handwritten digits
order: 10
featured: true
date: 2025-07
tags:
  - Python
  - Machine Learning
  - NumPy
links:
  repo: https://github.com/MahtabKhangura/NeuralNetwrok
thumbnail: /projects/neural-netwrok/MNISTDigit.webp
images:
  - src: /projects/neural-netwrok/training.png
    alt: Neural network training
---

For my neural networks project I studied machine learning and neural networks, starting with the basics and progressing to the different types and applications of neural networks and how they can be optimized.

My challenge for this project was to develop a neural network from scratch using NumPy exclusively to gain a deep understanding of the math behind neural networks before exploring machine learning libraries like PyTorch. Through my learning, I developed a neural network that achieved up to 99% accuracy on the MNIST digits dataset.

To practice modular design, I split the different types of layers into classes. This allowed me to initialize the neural network as an array of layers, which could be iterated through for forward and backpropagation. I made a class for each layer type, such as a dense layer and the different activation layers. I decided to split my classes in this way as it made it easy to change the size and depth of my neural network by simply creating new instances of each layer class, and the functionality of each different type of layer was contained in its class.
