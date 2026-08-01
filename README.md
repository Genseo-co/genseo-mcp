# Genseo MCP

Connect Claude, ChatGPT, Codex, and other MCP clients to Genseo for SEO keyword research, article drafting, content generation, publishing integrations, and approved publishing workflows.

## Remote MCP server

```text
https://api.genseo.co/mcp
```

The server uses Streamable HTTP. Each connection is bound to one Genseo project and only receives the permissions granted during authentication.

## Plugin contents

- `.claude-plugin/plugin.json` — Claude plugin metadata
- `.codex-plugin/plugin.json` — ChatGPT and Codex plugin metadata
- `.mcp.json` — Claude MCP configuration
- `.codex-mcp.json` — Codex MCP configuration
- `skills/genseo/SKILL.md` — shared Genseo workflow instructions
- `skills/setup/SKILL.md` — connection troubleshooting instructions

## Developer authentication

Until the public OAuth flow is deployed, local development uses a project-bound Genseo API key.

```bash
export GENSEO_API_KEY="gs_live_..."
```

Never commit API keys or paste them into chat. Create keys with only the scopes required for the intended workflow.

## Claude Code development

Load the plugin directly from this repository:

```bash
claude --plugin-dir .
```

Then open `/mcp`, verify the `genseo` connection, and call `genseo_me` before using another tool.

## Documentation and support

- Documentation: https://docs.genseo.co/developers/overview
- Privacy policy: https://www.genseo.co/legal/privacy-policy
- Support: support@genseo.co
