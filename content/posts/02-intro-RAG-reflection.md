---
title: "Retrieval-Augmented Generation (RAG)"
date: 2026-04-13
session: "2 (13/04)"
topic: "RAG"
tags: ["RAG", "LLM", "Chatbot", "intro"]
---

# Retrieval Augmented Generation (RAG)

Session: 2 (13/04)
Topic: RAG

As part of the course, we were introduced to Retrieval-Augmented Generation (RAG), which is a method used to improve the reliability and usefulness of Large Language Models (LLMs).

A main limitation of LLMs is that they generate responses based on patterns in training data, which means they can produce incorrect or outdated information. This behavior is commonly referred to as hallucination.

RAG addresses this problem by combining information retrieval with text generation. Instead of relying only on the model’s internal knowledge, relevant data is first retrieved from an external source, such as a database or document collection. This information is then provided to the model, which uses it to generate a more accurate and context-aware response.

In practice, this means that a system using RAG follows a pipeline where a user query is used to search for relevant documents, and those documents are then included in the prompt given to the LLM.

A common use case for this approach is chatbot systems. Instead of relying only on general knowledge, a chatbot can retrieve relevant information from a specific data source, such as documentation or course material, and generate responses based on that. This makes the system more reliable and better suited for real-world applications.

From a software perspective, this also separates the knowledge layer from the model, making the system more flexible and easier to maintain.

## References

- [Course RAG intro](https://aida.kursusmaterialer.dk/02-rag/)

- [Course lecture (Panopto)](https://cphbusiness.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=37d44668-5e7e-47a6-8a0e-b42b00b900bb)