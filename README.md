This repository demonstrates a subtle bug in Next.js 15's app directory routing when dealing with nested dynamic segments.  The issue arises when attempting to access a file or directory within a dynamic route that isn't explicitly defined as part of that route's pattern. This leads to an unexpected 404 error. The solution involves restructuring the file system to match the expected route patterns or using a more robust error handling mechanism to gracefully manage undefined routes. The example showcases both the problem and a potential solution using a custom error page to manage 404s in these cases.