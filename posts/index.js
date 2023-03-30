export const getPostsData = () => {
    return [
        {
            "id": "ssg-ssr",
            "title": "When to Use Static Generation v.s. Server-side Rendering",
            "date": "2020-01-02"
        },
        {
            "id": "pre-rendering",
            "title": "Two Forms of Pre-rendering",
            "date": "2020-01-01"
        }
    ]
};

export const getPostById = (id) => {
    if (id === 'ssg-ssr') {
        return {
            "id": "ssg-ssr",
            "contentHtml": "<p>We recommend using <strong>Static Generation</strong> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.</p>\n<p>You can use Static Generation for many types of pages, including:</p>\n<ul>\n<li>Marketing pages</li>\n<li>Blog posts</li>\n<li>E-commerce product listings</li>\n<li>Help and documentation</li>\n</ul>\n<p>You should ask yourself: \"Can I pre-render this page <strong>ahead</strong> of a user's request?\" If the answer is yes, then you should choose Static Generation.</p>\n<p>On the other hand, Static Generation is <strong>not</strong> a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.</p>\n<p>In that case, you can use <strong>Server-Side Rendering</strong>. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.</p>\n",
            "title": "When to Use Static Generation v.s. Server-side Rendering",
            "date": "2020-01-02"
        }
    }
    if (id === 'pre-rendering') {
        return {
            "id": "pre-rendering",
            "contentHtml": "<p>Next.js has two forms of pre-rendering: <strong>Static Generation</strong> and <strong>Server-side Rendering</strong>. The difference is in <strong>when</strong> it generates the HTML for a page.</p>\n<ul>\n<li><strong>Static Generation</strong> is the pre-rendering method that generates the HTML at <strong>build time</strong>. The pre-rendered HTML is then <em>reused</em> on each request.</li>\n<li><strong>Server-side Rendering</strong> is the pre-rendering method that generates the HTML on <strong>each request</strong>.</li>\n</ul>\n<p>Importantly, Next.js lets you <strong>choose</strong> which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.</p>\n",
            "title": "Two Forms of Pre-rendering",
            "date": "2020-01-01"
        }
    }
}

