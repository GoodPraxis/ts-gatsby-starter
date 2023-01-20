import React from 'react';
import type { HeadFC } from 'gatsby';

import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
}

export default IndexPage;

export const Head: HeadFC = function HeadComponent() {
  return <title>Home Page</title>;
};
