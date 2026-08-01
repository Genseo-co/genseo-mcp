---
name: genseo
description: Use Genseo through its remote MCP server to inspect a project, research and manage keywords, create or update SEO article drafts, generate content, check publishing integrations, publish approved posts, and manage webhooks.
---

# Genseo

Use the connected Genseo MCP tools instead of calling internal application routes or the database.

## Workflow

1. Call `genseo_me` before any other Genseo tool.
2. Use only the project returned by `genseo_me`; never guess or enumerate project IDs.
3. Read an existing post before updating it and send only intentional changes.
4. Prefer creating a draft before generating or publishing content.
5. Check `genseo_integrations_list` before publishing.
6. Ask for confirmation before `genseo_posts_publish` unless autonomous publishing was explicitly requested.

Treat authorization and project-boundary errors as final. Back off on rate limits, and treat `202 Accepted` as successful queueing.

For endpoint details and error codes, use [the Genseo developer documentation](https://docs.genseo.co/developers/overview).
