export default {
    cms_manual_init: true,
    backend: {
        name: 'github',
        repo: 'AshotSimonyan/netlifycms-test',
        branch: 'main',
    },
    media_folder: 'public/images',
    public_folder: '/images',
    collections: [
        {
            name: 'blog',
            label: 'blog',
            files: [
                {
                    label: 'Blog',
                    name: 'Blog',
                    file: 'posts/article-post-16.md',
                    fields: [
                        {
                            label: 'Hero Title',
                            name: 'hero_title',
                            widget: 'string',
                        },
                        {
                            label: 'Hero Description',
                            name: 'hero_description',
                            widget: 'markdown',
                        },
                    ],
                },
            ],
        },
    ],
};
