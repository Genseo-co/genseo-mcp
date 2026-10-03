import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const read = p => JSON.parse(readFileSync(resolve(root,p),'utf8'));
test('manifest identity, version and actual repository are consistent', () => {
  for (const path of ['.cursor-plugin/plugin.json','.claude-plugin/plugin.json','.codex-plugin/plugin.json']) {
    const m = read(path);
    assert.equal(m.name,'genseo');
    assert.equal(m.version,'0.2.0');
    assert.equal(m.repository,'https://github.com/Genseo-co/genseo-mcp');
    for (const value of [m.skills,m.mcpServers,m.logo].filter(Boolean)) {
      assert(!value.startsWith('/') && !value.split('/').includes('..'));
      assert(existsSync(resolve(root,value)),value);
    }
  }
});
test('all installed client configs use OAuth without static credentials', () => {
  for (const p of ['mcp.json','.mcp.json','.codex-mcp.json']) {
    const m=read(p).mcpServers.genseo;
    assert.equal(m.url,'https://api.genseo.co/mcp');
    assert.equal(m.headers,undefined);
    assert.equal(m.bearer_token_env_var,undefined);
    assert(!JSON.stringify(m).includes('GENSEO_API_KEY'));
  }
});
test('optional developer configs remain separate and placeholders only', () => {
  assert.equal(read('examples/mcp-api-key.json').mcpServers.genseo.headers.Authorization,'Bearer ${GENSEO_API_KEY}');
  assert.equal(read('examples/codex-api-key.json').mcpServers.genseo.bearer_token_env_var,'GENSEO_API_KEY');
});
test('skills have frontmatter and require explicit project selection', () => {
  for(const s of ['genseo','setup']){
    const t=readFileSync(resolve(root,'skills',s,'SKILL.md'),'utf8');
    assert.match(t,/^---\nname: [a-z-]+\ndescription: .+\n---/);
    assert(t.includes('genseo_projects_list'));
    assert.match(t,/select/i);
  }
});
test('logo is a square PNG with background and sufficient dimensions', () => {
  const b=readFileSync(resolve(root,read('.cursor-plugin/plugin.json').logo));
  assert.equal(b.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  assert.equal(b.readUInt32BE(16),512);
  assert.equal(b.readUInt32BE(20),512);
  assert(b.length < 5*1024*1024);
});
test('package excludes app source, reviewer metadata and env files', () => {
  for(const p of ['web','node_modules','.env','plugin.json','.app.json']) assert(!existsSync(resolve(root,p)));
  const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)]);
  for(const f of walk(root)){
    if(f.endsWith('.png'))continue;
    const t=readFileSync(f,'utf8');
    assert(!/gs_live_[a-zA-Z0-9]{16,}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(t),f);
    assert(!/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(t),f);
  }
});
