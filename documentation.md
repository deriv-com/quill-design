### QUILL TOKENS

A repository that holds design tokens derived from Figma. It is consumed by Quill Design,<br>
and any modifications to it can lead to significant changes in Quill Design and other repositories dependent on it.

##### Docs

- Workflow designed to automate pull requests for every designer's update in the Token Studios within Figma.
- Snapshot tests created to capture significant changes in the tokens that could potentially disrupt the UI.

---

### QUILL DESIGN

A repository that houses the Quill Components, utilized in Deriv-com V2 for maintaining the Hong Kong website <br> and, in the future, several other static Deriv homepages, including the new deriv.com.

##### Docs

- Workflow for version releases.
- Workflow for chromatic deployments.
- Guidelines for standard conventions to follow when building components.
- Documentation for consumption of Quill Tokens to work in the Tailwind framework.
- Documentation for the transformation of Tokens to fit FE requirements.
- Documentation for creating new `components`, `hooks`, `providers` using `NX`.

---

### QUILL ICONS

A repository for SVG icons that can be used throughout our web codebases. Linked to Figma, <br>allowing designers to independently add new icons. However, re-deployment is still triggered manually.

##### Docs

- Documentation for fetching new icons.
- Documentation for adding new icon categories.
- Workflow to trigger deployment for `Quill Icons Park`.

---

### DERIV-COM-V2

A repository to host static pages such as HK, GOLD, EU, and ROW. This is fully utilizing `Quill Components`.

##### Docs

- Documentation for building new `blocks` and `components` using `NX`.
- Guidelines for standard conventions.
- Documentation for image optimization.
- Documentation to export packages, ready to be consumed by other Deriv Web Platforms.

---
