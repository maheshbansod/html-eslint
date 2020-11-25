const createRuleTester = require("../rule-tester");
const rule = require("../../lib/rules/element-newline");

const ruleTester = createRuleTester();

ruleTester.run("element-newline", rule, {
  valid: [
    {
      code: `
<html>
<body>
</body>
</html>
`,
      filename: "test.html",
    },
  ],
  invalid: [
    {
      code: `
<!DOCTYPE html><html></html>
`,
      output: `
<!DOCTYPE html>
<html></html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
      ],
    },
    {
      code: `
<!DOCTYPE html><!-- comment --><html></html>
`,
      output: `
<!DOCTYPE html>
<!-- comment -->
<html></html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
      ],
    },
    {
      code: `
<html><!-- comment --><div></div></html>
`,
      output: `
<html>
<!-- comment -->
<div></div>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><head><title>test</title></head></html>
`,
      output: `
<html>
<head>
<title>test</title>
</head>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><body>test</body></html>
`,
      output: `
<html>
<body>test</body>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><body></body></html>
`,
      output: `
<html>
<body></body>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><body><div></div><div></div></body></html>
`,
      output: `
<html>
<body>
<div></div>
<div></div>
</body>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><body><div></div><div></div><div></div></body></html>
`,
      output: `
<html>
<body>
<div></div>
<div></div>
<div></div>
</body>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
    {
      code: `
<html><body><div></div><div><a></a></div><div></div></body></html>
`,
      output: `
<html>
<body>
<div></div>
<div>
<a></a>
</div>
<div></div>
</body>
</html>
`,
      filename: "test.html",
      errors: [
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectAfter",
        },
        {
          messageId: "expectBefore",
        },
        {
          messageId: "expectBefore",
        },
        {
          messageId: "expectBefore",
        },
      ],
    },
  ],
});