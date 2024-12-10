// bugSolution.js
// Solution: Use a custom error page to handle unexpected routes gracefully.

// pages/not-found.js
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

// app/blog/[slug]/comments/page.js  (This will still 404 unless you define a route for it)
export default function CommentsPage() {
    return <div>Comments</div>;
}

// app/blog/[slug]/comments/something.js (Example of file outside a defined route segment)
// This should ideally NOT exist in this location in order to prevent 404 errors.  Instead, it should only exist if there's a defined route segment for it i.e., if this file is for a route like `/blog/[slug]/comments/[something]`
export default function SomethingPage() {
    return <div>Something</div>
}

// or if you must put it there, you can handle it with the /not-found.js and this file will never be reached:
// app/blog/[slug]/comments/page.js
export default function CommentsPage({ params }) {
  const { slug } = params;
  if (slug === 'something'){ //Check if this is something you want to route to.
    return <div>Something</div>;
  } else {
     return <div>Comments</div>
  }
} 