# Architecture Rationale

I kept this project intentionally simple and split it into small files so each part has one job. The top-level structure uses pages for route-level screens, components for reusable UI pieces, a context file for shared state, and one custom hook for data loading. This keeps the app easy to read for a beginner and makes it clear where to add future features.

The component hierarchy starts in App with three routes: HomePage, BookDetailPage, and AddNotePage. A shared Layout component wraps these pages and contains the navigation. I used a Card component that accepts children so multiple pages can reuse the same wrapper pattern. This demonstrates composition through the children prop while avoiding duplicate markup.

For state management, I used local state where it belongs and context only where it helps. The NoteForm uses useState for controlled inputs and validation errors because that state is only needed in the form itself. Saved notes are stored in SavedNotesContext so HomePage and AddNotePage can both access the same data without prop drilling. I chose Context over lifting state through every route component because this app has shared data used by multiple views.

The custom hook useBooks encapsulates data fetching logic for books.json. It handles loading, success, and error states in one place so page components stay simple. It also uses cleanup with AbortController in useEffect to prevent state updates after unmount. Routing is handled with React Router and includes useParams in BookDetailPage for the dynamic book ID route.
