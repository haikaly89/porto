const fetch = require('node-fetch'); // Ensure node-fetch is available or use native fetch in Node 18+

const query = `
  query GetRecentPosts {
    publication(host: "haikaly-0.hashnode.dev") {
      title
      posts(first: 20) {
        edges {
          node {
            title
            slug
            publishedAt
          }
        }
      }
    }
  }
`;

async function debugPosts() {
    console.log("Fetching posts from Hashnode...");
    try {
        const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": ... // Not strict for public posts usually
            },
            body: JSON.stringify({ query }),
        });

        const result = await response.json();

        if (result.errors) {
            console.error("GraphQL Errors:", JSON.stringify(result.errors, null, 2));
            return;
        }

        const pub = result.data?.publication;
        if (!pub) {
            console.error("Publication not found for host: haikaly-0.hashnode.dev");
            return;
        }

        const posts = pub.posts.edges.map(e => e.node);
        console.log(`\nFound ${posts.length} posts for publication "${pub.title}":`);
        posts.forEach((p, i) => {
            console.log(`${i + 1}. [${p.publishedAt.split('T')[0]}] ${p.title}`);
        });

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

debugPosts();
