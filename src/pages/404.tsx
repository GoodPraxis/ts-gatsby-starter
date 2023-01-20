import React from 'react';
import type { HeadFC } from 'gatsby';

function NotFoundPage() {
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}

export default NotFoundPage;

export const Head: HeadFC = function HeadComponent() {
  return <title>404</title>;
};
