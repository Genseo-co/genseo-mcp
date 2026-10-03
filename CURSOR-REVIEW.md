# Cursor submission and acceptance checks

## Public form values

| Field | Value |
| --- | --- |
| Organization name | Genseo |
| Organization handle | genseo |
| Contact email | support@genseo.co |
| GitHub repository | https://github.com/Genseo-co/genseo-mcp |
| Website URL | https://www.genseo.co |
| Logotype URL | https://raw.githubusercontent.com/Genseo-co/genseo-mcp/main/assets/genseo-mark.png |

Description:

> Connect Genseo to Cursor to inspect AI visibility, tracked prompts, competitors, cited sources, SEO audits, issues, and existing content. Access project data through an OAuth-authenticated MCP server with project permissions and role-based controls.

Use the owner identity belonging to the submitting Cursor account. Do not publish reviewer credentials or customer data in this repository.

## Compatibility boundary

This package uses Cursor's native `.cursor-plugin/plugin.json` and `mcp.json` configuration. It connects to the same remote Streamable HTTP endpoint used by ChatGPT, with browser OAuth and no static Authorization header. The server, SQL, JWT settings and permissions are not changed by installing this package.

ChatGPT success is not proof of Cursor success. Local package tests validate configuration only. Cursor authentication, discovery and read-only tool results must also be checked in the real client before claiming end-to-end compatibility.

## Acceptance procedure

1. Install the plugin through the supported Cursor plugin workflow described at https://cursor.com/docs/plugins. Enable Genseo and complete the browser OAuth flow yourself, checking the client identity and requested permissions.
2. Verify that Genseo tools appear in Cursor. Record the Cursor version, plugin version and any sanitized error. Never record tokens, authorization codes, states or credentials.
3. In a fresh chat, use each prompt below independently. After the project list, explicitly choose an accessible project by its returned ID. Do not reuse a private reviewer project ID from a different account.
4. Compare results with the selected project's dashboard at the same time and with the same filters. Store any private evidence outside this public repository.

| Scenario | Prompt | Expected behavior |
| --- | --- | --- |
| Projects | List my accessible Genseo projects and ask which one to use. Do not change anything. | Only accessible projects are returned; no project is silently selected. |
| Visibility | First list my Genseo projects and ask which one to use. After I select one, show stored AI visibility for the last 30 days, competitors and cited sources. Do not start tracking or a recheck. | Data matches that project's stored values and time window; empty data is stated clearly. |
| Prompts | First list my Genseo projects and ask which one to use. After I select one, list existing active visibility prompts. Do not create, edit, archive or track anything. | Existing active prompts only; partial pages are labeled and totals are not inferred from page length. |
| Audits | First list my Genseo projects and ask which one to use. After I select one, show existing audits and open SEO issues, prioritized by severity. Do not start an audit, crawl or recheck. | Stored audits/issues only; no stored audit is a valid empty result, not proof of a healthy site. |
| Posts | First list my Genseo projects and ask which one to use. After I select one, list existing posts with titles and statuses. Do not create, generate, edit, schedule or publish anything. | Titles/statuses match returned records; a scheduled date must not be presented as proof of publication. |

Acceptance depends on tool results, not identical response wording or fixed counts that can change. An authorization error or failed request must never be presented as an empty dataset.

Do not run tracking, generation, crawl, audit jobs, publishing or external writes during these checks. Cursor itself may charge for model usage depending on the account; only run agent prompts within an explicitly approved allowance.

## Current verification status

- Package configuration: checked by `node --test scripts/plugin.test.mjs`.
- ChatGPT reference `.mcp.json`: matches the public package's endpoint and OAuth defaults.
- Real Cursor OAuth, discovery and read-only scenarios: pending. Automated Cursor UI access was not approved in the preparation environment.
- Marketplace approval: not guaranteed and not implied by passing package tests.
