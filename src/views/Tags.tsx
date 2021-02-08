import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <ol>
        {tags.map(t =>
          <li key = {t}>{t}</li>
        )}
      </ol>
    </Layout>

  );
}

export default Tags;