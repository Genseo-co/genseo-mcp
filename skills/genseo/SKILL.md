---
name: genseo
description: Use Genseo through its remote MCP server to inspect AI visibility, tracked prompts, cited sources, competitors, projects, keywords, SEO drafts, audits, issues and publishing integrations.
---

# Genseo

Use the connected MCP tools, not internal routes or direct database access.

1. Call `genseo_me` and `genseo_projects_list` before project operations.
2. Ask the user to select one accessible project unless the selection is already explicit. Never guess project IDs. Distinguish same-name projects by ID.
3. Include the selected `project_id` with every project operation.
4. For visibility questions start with `genseo_visibility_overview`; use prompt tools for requested prompt-level evidence.
5. Default to stored reads. A request to inspect data does not authorize tracking, generation, crawls, audits or publishing.
6. Read a post before modifying it; send only intentional changes. Check integrations before publishing and obtain confirmation unless autonomous publishing was explicitly authorized.
7. Match answers to returned fields. Label pagination and partial lists. Do not invent missing measurements or treat API errors as empty results.

Authorization and project-boundary restrictions are authoritative. OAuth does not expose billing, team management, credentials or project deletion. Writes require the relevant role, scopes and Agent Autonomy. Respect rate limits. `202 Accepted` means queued, not completed.

General educational questions and unsupported billing or ad-budget requests do not require Genseo calls. Explain unsupported operations without attempting them.

Documentation: https://docs.genseo.co/developers/overview
