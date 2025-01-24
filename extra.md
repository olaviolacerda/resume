## How to add Open Source section

1. Add this lines to the `index.html`

```html
<section>
  <h2>Open Source Contributions</h2>
  <div id="opensource">
    <!-- Open Source Contributions will be dynamically loaded -->
  </div>
</section>
```

2. Populate `data.json` with the following config:

```json
  "opensource": [
    {
      "project": "Deno - Standard Library",
      "description": "Fixed an example in the JSDocs for the Expect.ObjectContaining in the testing module.",
      "link": "https://github.com/denoland/std/pull/6357"
    }
  ]
```

---
