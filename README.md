# Counterfactual Concept Explanations

This repo is a demo of a research prototype for making concept vectors visually inspectable.

Concept-based interpretability methods can show that a learned concept direction is correlated with a class prediction: if the model activation moves toward "smiling," the probability of a target class may rise. That still does **not** show what the concept vector actually means in image space.

I explored this by training a ResNet-50 face-attribute classifier on CelebA-HQ, extracting concept vectors from the classifier, inverting faces into e4e/StyleGAN latent space, and training a bridge network from classifier activations to editable GAN latents. The demo perturbs an image along a concept vector, maps the edited activation through the bridge, and renders the resulting counterfactual face sweep.

Related work: [TCAV](https://arxiv.org/abs/1711.11279), [ACE](https://papers.neurips.cc/paper/9126-towards-automatic-concept-based-explanations.pdf), [Concept Whitening](https://arxiv.org/abs/2002.01650), [Concept Activation Regions](https://arxiv.org/abs/2209.11222), [alpha-TCAV](https://arxiv.org/abs/2605.15688), and [e4e](https://arxiv.org/abs/2102.02766).
