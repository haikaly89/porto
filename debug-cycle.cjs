const fetch = require('node-fetch');

async function debugCycle() {
    console.log("1. Fetching LIST of posts...");
    const listQuery = `
      query GetRecentPosts {
        publication(host: "haikaly-0.hashnode.dev") {
          posts(first: 5) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      }
    `;

    try {
        const listResp = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: listQuery }),
        });
        const listData = await listResp.json();
        const posts = listData.data?.publication?.posts?.edges?.map(e => e.node) || [];

        if (posts.length === 0) {
            console.error("No posts found in list!");
            return;
        }

        console.log(`Found ${posts.length} posts.`);
        const targetSlug = posts[0].slug;
        console.log(`Targeting First Slug: "${targetSlug}"`);

        console.log("\n2. Fetching DETAIL for that slug...");
        const detailQuery = `
          query GetPost($slug: String!) {
            publication(host: "haikaly-0.hashnode.dev") {
              post(slug: $slug) {
                title
                slug
              }
            }
          }
        `;

        const detailResp = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: detailQuery,
                variables: { slug: targetSlug }
            }),
        });

        const detailData = await detailResp.json();
        const post = detailData.data?.publication?.post;

        if (post) {
            console.log("SUCCESS! Detail fetch worked.");
            console.log("Title:", post.title);
        } else {
            console.error("FAILURE! Detail fetch returned null for slug:", targetSlug);
            console.error("Response:", JSON.stringify(detailData, null, 2));
        }

    } catch (e) {
        console.error("Error:", e);
    }
}

debugCycle();
