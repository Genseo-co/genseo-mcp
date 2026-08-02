# Security

## Report a vulnerability

Email security reports to `support@genseo.co`. Do not include API keys, OAuth tokens, customer content, or other secrets in a public GitHub issue.

Include a concise description, affected component, reproduction steps, and potential impact. Genseo will acknowledge valid reports and coordinate remediation and disclosure.

## Exposed credentials

If a Genseo API key may have been exposed:

1. Revoke the key in Genseo immediately.
2. Create a replacement with only the required scopes.
3. Update the client or secret manager.
4. Verify the replacement with `genseo_me`.

Never place credentials in MCP URLs, Git repositories, screenshots, logs, or chat messages.
