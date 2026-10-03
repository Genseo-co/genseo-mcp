# Genseo MCP

Connect Cursor, Claude, ChatGPT, Codex and other compatible MCP clients to Genseo. Inspect stored AI visibility, tracked prompts, cited sources, competitors, SEO audits, issues and posts. Authorized tools also support content and publishing workflows.

## Remote server and authentication

Endpoint: `https://api.genseo.co/mcp` (Streamable HTTP).

Public plugin configurations use browser-based OAuth, with no static authorization header or API-key environment variable. Enable the Genseo connection in your client and complete the Genseo sign-in/consent flow. Approve only expected client names and permissions.

OAuth access follows your account's project membership, scopes, role and Agent Autonomy settings. Call `genseo_me` and `genseo_projects_list`, then explicitly select one accessible project before project operations. API keys, when used separately, are project-bound. Billing, team management, credentials and project deletion are not exposed.

## Cursor

This repository uses the native Cursor Plugin format:

- `.cursor-plugin/plugin.json`: Cursor manifest and logo reference
- `mcp.json`: remote MCP connection, automatically discovered or referenced by the manifest
- `skills/`: workflow and setup instructions
- `assets/genseo-mark.png`: square logo with background

Install the plugin through Cursor's supported plugin installation flow, enable its MCP connection and authenticate through OAuth. Before marketplace submission, verify the real Cursor OAuth flow and the read-only scenarios below; package validation alone is not a client test.

Cursor submission documentation: https://cursor.com/docs/reference/plugins

## Other clients

- `.claude-plugin/plugin.json` and `.mcp.json`: Claude plugin configuration
- `.codex-plugin/plugin.json` and `.codex-mcp.json`: existing Codex compatibility configuration

For Claude Code local loading:

```bash
claude --plugin-dir .
```

Inspect the Genseo connection in the client's MCP settings. Do not assume successful connection in one client proves another client's behavior.

## No-cost read-only verification

Use existing stored data. Run each scenario in a fresh chat, list projects first and ask the user to select the intended project. Distinguish duplicate project names by ID.

1. List my accessible Genseo projects and ask which one to use. Do not change anything.
2. Show stored AI visibility for the last 30 days, competitors and cited sources. Do not start tracking or a recheck.
3. List existing active visibility prompts. Do not create, edit, archive or track anything.
4. Show existing audits and open SEO issues, prioritized by severity where available. Do not start an audit, crawl or recheck.
5. List existing posts with titles and statuses. Do not create, generate, edit, schedule or publish anything.

Responses must match the selected project's stored data. Clearly distinguish empty results from errors and label partial lists. These checks do not authorize paid provider jobs. Other tools can trigger billable actions or external writes; keep them outside this smoke test.

## Local package validation

```bash
node --test scripts/plugin.test.mjs
```

These tests validate manifests, file paths, OAuth defaults and absence of bundled credentials. Real Cursor authentication and tool execution are a separate release gate.

## Support

- Website: https://www.genseo.co
- Documentation: https://docs.genseo.co/developers/overview
- Support: support@genseo.co
- Privacy: https://www.genseo.co/legal/privacy-policy
- Terms: https://www.genseo.co/legal/terms

This repository contains the client plugin only, not Genseo's application/backend source or customer project data.
