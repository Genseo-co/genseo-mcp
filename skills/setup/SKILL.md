---
name: genseo-setup
description: Configure or troubleshoot the Genseo remote MCP connection. Use when Genseo tools are disconnected, authentication is missing, or the user asks how to connect Genseo.
---

# Set up Genseo

1. Create a project-bound API key in Genseo with only the scopes needed for the intended workflow.
2. Set `GENSEO_API_KEY` in the environment that launches the MCP client. Never paste the key into chat, source files, or version control.
3. Reload the plugin and verify the `genseo` MCP server connection.
4. Call `genseo_me` and confirm that it returns the expected project before using another Genseo tool.

The current developer package uses a Bearer API key for local testing. The public marketplace release will use Genseo OAuth 2.0 instead.

For setup details, use [the Genseo developer documentation](https://docs.genseo.co/developers/overview). Contact `support@genseo.co` if authentication fails after creating a new key.
