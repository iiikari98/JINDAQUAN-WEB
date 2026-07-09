# AI Image Editing Setup

This project can use GPT Image for higher-quality photo retouching when an OpenAI API key is configured locally.

## One-time setup

1. Open https://platform.openai.com/api-keys
2. Create or copy an API key.
3. Double-click `scripts/configure-openai-image-key.cmd`.
4. Paste the key into that local window only.
5. Double-click `scripts/test-openai-image-key.cmd` to verify it works.

Do not paste the API key into chat or commit it to GitHub.

## Current local photo workflow

- Original phone photos remain in `C:\Users\a\Pictures\领英素材库`.
- Deterministic web-optimized versions are generated in `public/assets/factory-processed`.
- GPT Image edited versions should be saved as sibling files with `ai-` or `-ai` in the filename so the source remains traceable.

