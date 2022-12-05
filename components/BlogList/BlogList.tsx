import React from 'react';
import { BlogListStyle, BlogItem } from './BlogList.style';
import Card from 'components/Card/Card';
import { Text } from 'styles/Foundations';
import Image from 'next/image';
import { Icon } from 'components/UIkit';
import Link from 'next/link';


const BlogList = ({ blog }) => {
  // console.log(blog);
  return (
    <BlogListStyle>
      {
        blog.map((blog) => {
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
