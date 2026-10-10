# Generate MindCards Study Data

Use the prompt below to generate study data for any subject in **English** or **Hinglish** (or any other language).

---

### Prompt for LLMs (ChatGPT / Claude / Gemini)

```text
Convert the study material below into ONLY valid JavaScript, with no Markdown fences, comments, or explanation.

Target shape:

window.studyData = window.studyData || {};
window.studyData.<language> = window.studyData.<language> || {};
window.studyData.<language>.subjects = window.studyData.<language>.subjects || {};

window.studyData.<language>.subjects["<Subject Name>"] = {
  "units": {
    "Unit 1: <Unit Name>": {
      "topics": {
        "<Topic Name>": {
          "cards": [
            [
              "1. <Question 1>?",
              "<Direct answer summary>.\n- <Key point or bullet>\n- <Key point or bullet>"
            ],
            [
              "2. <Question 2>?",
              "<Answer>..."
            ],
            [
              "3. <Question 3>?",
              "<Answer>..."
            ],
            [
              "4. <Question 4>?",
              "<Answer>..."
            ]
          ]
        }
      }
    }
  }
};

Input:
- Subject Name: [e.g. Operating Systems, Computer Networks, Design Thinking]
- Language: [english or hinglish]
- Raw study material: [paste syllabus, notes, or textbook text here]
- Unit names: [optional list of units]

Rules:
1. Return valid JavaScript code only.
2. Group content hierarchically: Subject -> Units -> Topics -> Cards.
3. Each topic must contain a `cards` array with 4 ordered [question, answer] pairs.
4. Answers should be exam-oriented, concise, and structured with bullet points starting with `-`.
5. For Hinglish, use natural Romanized Hindi mixed with technical English terms (e.g. "Process synchronization kya hoti hai...").
6. Escape quotes, backslashes, and line breaks properly.
```

---

### Adding Multiple Subjects to MindCards

You can add as many subjects as you want:

1. **Option A (In `content.js` / `content_hing.js`)**:
   Add new subjects under `window.studyData.english.subjects["Your Subject"] = { ... }` in `content.js` and `window.studyData.hinglish.subjects["Your Subject"] = { ... }` in `content_hing.js`.

2. **Option B (Separate files per subject)**:
   Create a new file such as `subject_os.js`, assign `window.studyData.english.subjects["Operating Systems"] = { units: { ... } };`, and include it in `index.html`:
   ```html
   <script src="subject_os.js"></script>
   ```

MindCards will automatically detect all subjects, show a Subject selection screen on startup, and allow instant switching between subjects from the menu or the toolbar.
