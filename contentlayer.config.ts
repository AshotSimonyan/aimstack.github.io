import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files';

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    title: { type: 'string' },
  },
}));

const Categories = defineNestedType(() => ({
  name: 'Categories',
  fields: {
    title: { type: 'string' },
  },
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },

    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
    },
    id: {
      type: 'number',
      required: false,
    },
    image: {
      type: 'string',
    },
    draft: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: Tag,
    },
    categories: {
      type: 'list',
      of: Categories,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}));

const Package = defineDocumentType(() => ({
  name: 'Package',
  filePathPattern: `**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    author: {
      type: 'string',
      required: true,
    },
    logo: {
      type: 'string',
      required: true,
    },
    org_name: {
      type: 'string',
      required: true,
    },
    org_link: {
      type: 'string',
      required: true,
    },
    repo_name: {
      type: 'string',
      required: true,
    },
    repo_link: {
      type: 'string',
      required: true,
    },
    installation: {
      type: 'string',
      required: true,
    },
    about: {
      type: 'string',
      required: true,
    },
  },
}));

export const postSource = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});

export const packageSource = makeSource({
  contentDirPath: 'packages',
  documentTypes: [Package],
});

export default makeSource({
  documentTypes: [Post, Package],
  contentDirPath: 'posts',
});
