import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Text, Container, Flex, InnerHTML } from 'styles/foundations';
import {
  BlogSingleStyle,
  ImageWrapper,
  PostNavigation,
  Prev,
  Next,
} from 'styles/pages/Blog.style';
import { formattedDate } from 'utils';

import { Icon } from 'components/UIkit';
import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';

export default function PostPage({ post, posts }) {
  const index = posts.findIndex((object) => {
    return object.slug === post.slug;
  });
  return (
    <BlogSingleStyle>
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
          site_name: 'Aimstack',
        }}
      />
      <Container>
        <Link href="/blog">
          <Flex align="center" css={{ marginTop: '$10' }}>
            <Icon name="back" size={20} />
            <Text size={3} css={{ fontWeight: '$3' }}>
              Go Back
            </Text>
          </Flex>
        </Link>
      </Container>
      <Container css={{ maxWidth: '848px' }}>
        <Flex
          gap={5}
          justify={'between'}
          css={{
            color: '$darkGrey',
            marginTop: '$6',
            '.icon': { fill: '$darkGrey' },
          }}
        >
          <Flex gap={2} align="center">
            <Icon name="folder" size={14} />
            <Text size={1}>
              <Link href={`/category/${post.categories[0].toLowerCase()}`}>
                {post.categories[0]}
                {/*TODO change array to string*/}
              </Link>
            </Text>
          </Flex>
          <Flex gap={2} align="center">
            <Icon name="clock" size={14} />
            <Text size={1}>{formattedDate(post.date)}</Text>
          </Flex>
        </Flex>

        <Text as="h1" size={7} className="title" css={{ my: '$6' }}>
          {post.title}
        </Text>
      </Container>
      <Container>
        <ImageWrapper>
          <Image
            src={post.image}
            className="card-img-top"
            alt={post.title}
            title={post.title}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
      </Container>
      <Container css={{ maxWidth: '848px' }}>
        <InnerHTML dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </Container>

      <PostNavigation>
        <Container css={{ maxWidth: '848px' }}>
          <Flex direction={{ '@bp2': 'column' }} gap={{ '@bp2': 10 }}>
            <Prev>
              {!!index && (
                <Link href={`/blog/${posts[index - 1]?.slug}`}>
                  <Flex align="center">
                    <Icon name="chevron-left" />
                    <Text
                      className="chevron-text"
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      PREVIOUS POST
                    </Text>
                  </Flex>
                  <Text className="text" size={1} css={{ marginTop: '$3' }}>
                    {posts[index - 1]?.title}
                  </Text>
                </Link>
              )}
            </Prev>
            <Next>
              {index < posts.length - 1 && (
                <Link href={`/blog/${posts[index + 1]?.slug}`}>
                  <Flex
                    align="center"
                    justify={{ '@initial': 'end', '@bp2': 'start' }}
                  >
                    <Text
                      className="chevron-text"
                      size={1}
                      css={{ fontWeight: '$3' }}
                    >
                      NEXT POST
                    </Text>
                    <Icon name="chevron-right" />
                  </Flex>
                  <Text className="text" size={1} css={{ marginTop: '$3' }}>
                    {posts[index + 1]?.title}
                  </Text>
                </Link>
              )}
            </Next>
          </Flex>
        </Container>
      </PostNavigation>
    </BlogSingleStyle>
  );
}

export async function getStaticPaths() {
  //  filter the post and get the publish post.
  const posts = allPosts.filter((post, i) => {
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

  const posts = allPosts.filter((post, i) => {
    return !!post.draft === false;
  });

  const post = allPosts.find((post) => {
    return post.slug === slug;
  });

  return { props: { post, posts } };
}
