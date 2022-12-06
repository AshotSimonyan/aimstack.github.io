import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Text, Container } from 'styles/Foundations';
import { Icon } from 'components/UIkit';

import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';

export default function PostPage({ post }) {
  const date = new Date(post.date);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          url: 'https:officialrajdeepsingh.dev',
          title: post.title,
          description: post.description,
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: ['https://officialrajdeepsingh.dev/pages/about'],
            tags: post.tags,
          },
          images: [
            {
              url: post.image,
              width: 1224,
              height: 724,
              alt: post.title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Rajdeep Singh',
        }}
      />
      <Container>
        <div>
          <Text size={1}>
            <Icon name="folder" size={14} />
            <Link href={`/category/${post.categories[0]}`}>
              {post.categories[0]}
            </Link>
          </Text>
          {/*TODO change array to string*/}
          <Text>
            <Icon name="clock" size={14} />
            {`${
              date.getMonth() + 1
            } - ${date.getDate()} - ${date.getFullYear()}`}{' '}
          </Text>
          <Text as="h1" size={7} className="title" css={{ my: '$10' }}>
            {post.title}
          </Text>
          {/*<ImageWrapper>*/}
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.image}
              className="card-img-top"
              alt={post.title}
              title=""
              // layout='fill'
              height={1000}
              width={1000}
              objectFit="contain"
            />
          </Link>
          {/*</ImageWrapper>*/}

          <div
            className="post-body p-5 m-auto"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  //  filter the post and get the publish post.
  const posts = allPosts.filter((post, i) => {
    console.log(post.draft);
    return !!post.draft === false;
  });

  // get all the post slug
  const publish = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths: publish,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // fetch a single post by slug

  const post = allPosts.find((post) => {
    return post.slug === slug;
  });

  return { props: { post } };
}
