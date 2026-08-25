import { describe, expect, it } from 'vitest';
import fixture from '../../../public/api/verificationReports/fsrInformatik2026.json';
import { verificationReportObject } from '../../../src/verification/objects/verificationReport.ts';

describe('verificationReportObject', () => {
  it('parses the published fixture', () => {
    const parsed = verificationReportObject.safeParse(fixture);

    expect(parsed.success).toBe(true);
  });

  it('accepts a check that has no coverage, so the view cannot assume one', () => {
    const withExactCheck = {
      ...fixture,
      checks: [...fixture.checks, { kind: 'correctness', nature: 'exact', status: 'passed' }],
    };

    const parsed = verificationReportObject.parse(withExactCheck);
    const correctness = parsed.checks.find((check) => check.kind === 'correctness');

    expect(correctness).toBeDefined();
    expect(correctness?.coverage).toBeUndefined();
  });

  it('rejects a coverage fraction outside zero to one', () => {
    const broken = { ...fixture, verdict: { ...fixture.verdict, coverageFraction: 2 } };

    expect(verificationReportObject.safeParse(broken).success).toBe(false);
  });

  it('rejects a report without any check', () => {
    const broken = { ...fixture, checks: [] };

    expect(verificationReportObject.safeParse(broken).success).toBe(false);
  });
});
