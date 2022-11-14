// export default {
//     cms_manual_init: true,
//     backend: {
//         name: 'github',
//         repo: 'AshotSimonyan/netlifycms-test',
//         branch: 'main',
//     },
//     media_folder: 'public/images',
//     public_folder: '/images',
//     collections: [
//         {
//             name: 'blog',
//             label: 'blog',
//             create: true,
//             slug: "{{title}}",
//             fields: [
//                 {label: "Author", name: "author", widget: "string"},
//                 {label: "Categories", name: "categories", widget: "list"},
//                 {label: "Publish Date", name: "date", widget: "datetime"}
//             ],
//             files: [
//                 {
//                     label: 'Blog',
//                     name: 'Blog',
//                     file: 'posts/article-post-16.md',
//                     fields: [
//                         {
//                             label: 'Hero Title',
//                             name: 'hero_title',
//                             widget: 'string',
//                         },
//                         {
//                             label: 'Hero Description',
//                             name: 'hero_description',
//                             widget: 'markdown',
//                         },
//                     ],
//                 },
//             ],
//         },
//     ],
// };

export default {
    backend: {
        name: 'github',
        repo: 'AshotSimonyan/netlifycms-test',
        branch: 'main',
    },
    load_config_file: false,
    media_folder: 'public/images',
    public_folder: '/images',
    collections: [
        {
            label: "Blog", name: "blog", folder: "_posts/blog", create: true, fields: [
                {label: "Author", name: "author", widget: "string"},
                {label: "Categories", name: "categories", widget: "list"},
                {label: "Publish Date", name: "date", widget: "datetime"},
                {label: "Description", name: "description", widget: "string"},
                {label: "Featured Image", name: "image", widget: "image"},
                {label: "Tags", name: "tags", widget: "list"},
                {label: "Title", name: "title", widget: "string"},
                {label: "Body", name: "body", widget: "markdown"},
                {label: "Draft post", name: "draft", widget: "boolean", hint: "Publish post to set to false", required: true, default: true}
            ]
        },
    ],
}

