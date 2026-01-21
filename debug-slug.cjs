const fetch = require('node-fetch');

const slug = "hands-on-exploration-of-amazon-ec2";

const query = `
  query GetPost($slug: String!) {
    publication(host: "haikaly-0.hashnode.dev") {
      post(slug: $slug) {
        title
        slug
        content { html }
        publishedAt
        coverImage { url }
      }
    }
  }
`;

async function debugSlug() {
  console.log(`Fetching slug: "${slug}" from Hashnode...`);
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { slug }
      }),
    });

    const result = await response.json();
    console.log("Raw Response:", JSON.stringify(result, null, 2));

    if (result.data?.publication?.post) {
      console.log("\nSUCCESS! Post found.");
      console.log("Title:", result.data.publication.post.title);
    } else {
      console.error("\nFAILURE! Post is null.");
      console.error("Possible reasons: Slug mismatch, unpublished post, or API issue.");
    }

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

debugSlug();
