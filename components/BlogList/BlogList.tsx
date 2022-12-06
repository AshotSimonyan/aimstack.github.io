import React from 'react';
import { BlogListStyle, BlogItem } from './BlogList.style';
import Card from 'components/Card/Card';


const BlogList = ({ blogList }) => {
  return (
    <BlogListStyle>
      {
        blogList.map((blog) => {
          return (
            <BlogItem key={blog.slug}>
              <Card key={blog.slug} {...blog} />
            </BlogItem>
          );
        })
      }
    </BlogListStyle>
  );
};

export default BlogList;
