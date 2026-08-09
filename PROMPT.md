# Generate `content.js` study data

Convert the raw study material below into **only valid JavaScript**, with no Markdown fences, comments, or explanation. Return exactly one assignment in this shape:

```text
window.studyContent = { units: { ... } };
```

Input:
- Raw study material: [paste here]
- Unit names (any number): [list here]

Rules:
- Create every requested unit and as many relevant topics as the material supports.
- Each topic must contain only a `cards` array.
- `cards` must contain exactly four ordered `[question, answer]` pairs.
- Answers should be concise, exam-oriented, and faithful to the source.
- Use explicit lines beginning with `-`, `*`, or `•` when an answer is naturally a list.
- Escape quotes, backslashes, line breaks, and other characters so the result is valid JavaScript string syntax.
- Do not add unsupported fields, imports, functions, HTML, or Markdown.
