export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614917e891ac4600b0d13e14",
                  title: "Sanity Studio",
                  name: "deeply-nourished-studio",
                  apiId: "4532d940-fa8f-4818-8fda-4d5c801de102",
                },
                {
                  buildHookId: "614917e84b3ef100dcb1c7de",
                  title: "Blog Website",
                  name: "deeply-nourished",
                  apiId: "92316f82-3044-4ab6-82b5-b05091133ac0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/deeply-nourished",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://deeply-nourished.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
