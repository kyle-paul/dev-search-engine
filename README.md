# Developer Search Engine

This project was developed for the Round 3 interview of Google Developer Student Clubs (GDSC-HCMUS). The selected tech stack is React & Next.js, as specified in the project requirements. Released on October 28, with a submission deadline of November 1, this project aims to deliver a local AI-powered search engine.

## Getting Started

### Environment Setup
Since our project hosts LLM models locally and makes requests through a REST API, we do not deploy it on Vercel. To set up a local environment with all necessary tools for development and deployment, we recommend using the following Docker image:

```bash
docker pull kylepaul/deeplearning:deployment
```

Compose the Docker container by referring to the `compose.yml` file in this repository for detailed setup instructions.

Next, ensure that Node.js is up to date by following this [installation guide](https://nodejs.org/en/download/package-manager). Once installed, set the `NODE_OPTIONS` environment variable:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

### Deploying the AI Server
For local AI hosting, we use the `Qwen2.5-Coder-1.5B-Instruct-GPTQ-Int8` model, a robust yet efficient model for our needs. You can deploy it with [Triton Inference Server](https://github.com/triton-inference-server/backend) or via the [Qwen framework](https://qwen.readthedocs.io/en/latest/getting_started/quickstart.html) for seamless integration.

### Launching the Website
To start the website, run the following command:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to view the application.