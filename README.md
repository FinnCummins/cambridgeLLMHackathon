![hack the law](https://github.com/user-attachments/assets/2e0f3b3e-6969-4bcd-b6d3-60b687acd708)

# Hack the law - University of Cambridge

This was the prototype we built for the [LLM x Law Hackathon](https://hackthelaw-cambridge.com/) in the University of Cambridge on the 23rd June 2024.

We built a simple web app that allows lawyers to upload a contract and select the key variables and clauses of the contract they want to summarise.

It then provides lawyers with a summarised cover sheet of their contract and indicates whether the contract has favourable terms for the lawyer's client.

We built the frontend using Next.js, the backend with Google Cloud functions and initially built out/tested the logic of the prompts with a jupyter notebook.

# Prompt Engineering

All of the prompt engineering logic for the project can be found in the notebook called hackathon_gemini_prompts_and_answers.ipynb. This notebook generated the Cover Letter as our final output: https://github.com/FinnCummins/cambridgeLLMHackathon/blob/main/hackathon_gemini_prompts_and_answers.ipynb
