import { describe, it } from 'node:test';
import assert from 'node:assert';
import { NODES, EDGES, validateTopology, GROUPS, type SkillGroupId } from './topology.ts';

describe('topology', () => {
  it('has 15 nodes', () => {
    assert.strictEqual(NODES.length, 15);
  });

  it('has 11 edges', () => {
    assert.strictEqual(EDGES.length, 11);
  });

  it('has 4 groups', () => {
    assert.strictEqual(GROUPS.length, 4);
  });

  it('every node id is unique', () => {
    const ids = NODES.map((n) => n.id);
    assert.strictEqual(new Set(ids).size, ids.length);
  });

  it('every edge source and target exists in nodes', () => {
    assert.doesNotThrow(validateTopology);
  });

  it('every node group is a known group', () => {
    const groupIds = new Set(GROUPS.map((g) => g.id));
    for (const node of NODES) {
      assert.ok(groupIds.has(node.group as SkillGroupId), `unknown group "${node.group}" on node "${node.id}"`);
    }
  });

  it('exactly one dashed edge (typescript -> javascript)', () => {
    const dashed = EDGES.filter((e) => e.style === 'dashed');
    assert.strictEqual(dashed.length, 1);
    assert.strictEqual(dashed[0].source, 'typescript');
    assert.strictEqual(dashed[0].target, 'javascript');
  });

  it('nodes have required fields', () => {
    for (const node of NODES) {
      assert.ok(node.id, `node missing id`);
      assert.ok(node.displayName, `node ${node.id} missing displayName`);
      assert.ok(node.group, `node ${node.id} missing group`);
      assert.ok(node.shape, `node ${node.id} missing shape`);
      assert.ok(typeof node.x === 'number', `node ${node.id} missing x`);
      assert.ok(typeof node.y === 'number', `node ${node.id} missing y`);
      assert.ok(node.skillId, `node ${node.id} missing skillId`);
    }
  });
});
