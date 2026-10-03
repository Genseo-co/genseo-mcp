---
name: genseo-setup
description: Configure or troubleshoot the Genseo remote MCP connection for Cursor, Claude, ChatGPT, Codex or other compatible clients when tools are disconnected or authentication is missing.
---

# Set up Genseo

1. Connect the remote MCP server at `https://api.genseo.co/mcp`.
2. Use the client's browser-based OAuth flow. Approve only the expected client and permissions.
3. Return to the client and inspect the Genseo connection in its MCP settings.
4. Call `genseo_me` and `genseo_projects_list`, then explicitly select an accessible project before project operations.

Default plugin files contain no API key or static Authorization header. Never paste credentials into chat, public files or URLs.

For authentication errors, reconnect through the client. Report discovery or authorization errors rather than inventing success or changing SQL/JWT settings. Use only free reads for diagnosis.

Documentation: https://docs.genseo.co/developers/overview
Support: support@genseo.co
