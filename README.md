# votura-verifier

Independent verification service for elections run with
[votura](https://github.com/SE-UUlm/votura).

## Idea

Voters do not check their own vote. When casting, a voter receives a receipt for a
randomly chosen ballot of someone else. This is the floating receipt idea from Farnel
and from Rivest and Smith's Twin protocol.

Because the assignment is random, nobody knows which ballots are covered, so an operator
cannot drop the votes of people who are unlikely to check.

## What it checks

**Completeness.** Every collected receipt must appear unchanged in the published ballot
box. If k ballots are removed or replaced and the collected receipts cover a fraction f
of the box, the chance that nothing is noticed is about (1 - f)^k.

**Correctness.** The service recomputes the homomorphic product of the published
ciphertexts and verifies the decryption proofs against the announced result. This is
exact and needs no receipts at all.

Together they show that the announced result belongs to a complete and unmodified
ballot box.

## What it does not do

It does not protect ballot secrecy. votura stores the election private key and, in
non-private elections, the link between voter and vote. Collecting receipts does not
change that.

## Status

Structure only. votura publishes no ballot box, issues no receipts and has no verifiable
receipt assignment yet. This repository defines the input format it expects and runs
against fixtures until votura provides the real thing.

See docs/format.md and docs/threat-model.md.

## License

MIT
