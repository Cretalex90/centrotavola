import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/italian/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Post Type",
            options: ["regular", "featured"],
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "image",
            name: "images",
            label: "Featured Images",
            list: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "meta_tags",
            label: "Meta Tags",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Pages",
        path: "content/italian",
        match: {
          include: "*",
          exclude: "post/**"
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string", 
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "config/_default",
        match: {
          include: "params",
        },
        format: "toml",
        fields: [
          {
            type: "image",
            name: "logo",
            label: "Site Logo",
          },
          {
            type: "image",
            name: "favicon",
            label: "Favicon",
          },
          {
            type: "string",
            name: "logo_width",
            label: "Logo Width",
            description: "Use 'px' or 'x', example: '100px'",
          },
          {
            type: "string",
            name: "logo_text",
            label: "Logo Text Fallback",
            description: "Shows when logo image is missing",
          },
          {
            type: "string",
            name: "copyright",
            label: "Copyright Text",
          },
          {
            type: "object",
            name: "contact_info",
            label: "Contact Information",
            fields: [
              {
                type: "string",
                name: "address",
                label: "Address",
              },
              {
                type: "string",
                name: "mobile",
                label: "Phone Number",
              },
              {
                type: "string",
                name: "email",
                label: "Email",
              },
            ],
          },
          {
            type: "object",
            name: "promotion",
            label: "Sidebar Promotion",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Sidebar Promotion",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "content",
                label: "Content",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "button_label",
                label: "Button Label",
              },
              {
                type: "string",
                name: "button_link",
                label: "Button Link",
              },
            ],
          },
          {
            type: "object",
            name: "top_promotion",
            label: "Top Banner Promotion",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Top Banner",
              },
              {
                type: "image",
                name: "image",
                label: "Banner Image",
              },
              {
                type: "string",
                name: "link",
                label: "Banner Link",
              },
            ],
          },
          {
            type: "object",
            name: "metadata",
            label: "SEO Metadata",
            fields: [
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
                list: true,
                ui: {
                  component: "tags",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Default Meta Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "author",
                label: "Default Meta Author",
              },
              {
                type: "image",
                name: "image",
                label: "Default Social Share Image",
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social Media Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Platform Name",
              },
              {
                type: "string",
                name: "icon",
                label: "FontAwesome Icon Class",
                description: "Example: fab fa-facebook",
              },
              {
                type: "string",
                name: "link",
                label: "Profile URL",
              },
            ],
          },
          {
            type: "object",
            name: "cookies",
            label: "Cookie Consent",
            fields: [
              {
                type: "boolean",
                name: "enable",
                label: "Enable Cookie Notice",
              },
              {
                type: "number",
                name: "expire_days",
                label: "Expire After Days",
              },
              {
                type: "string",
                name: "content",
                label: "Notice Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "button",
                label: "Accept Button Text",
              },
            ],
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
