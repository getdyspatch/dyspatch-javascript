/**
 * These are the custom tests added for this API client.
 *
 * DO NOT DELETE THIS FILE.
 */

const version = "application/vnd.dyspatch.2019.10+json";

describe("Integration", () => {
  let templates;
  let drafts;

  before(() => {
    const DyspatchClient = require("../../src");
    const defaultClient = DyspatchClient.ApiClient.instance;

    // Setup
    const Bearer = defaultClient.authentications["Bearer"];
    Bearer.apiKey = process.env.DYSPATCH_API_KEY;
    Bearer.apiKeyPrefix = "Bearer"

    templates = new DyspatchClient.TemplatesApi();
    drafts = new DyspatchClient.DraftsApi();
  });

  it("lists templates", done => {
    templates.getTemplates(version, {}, (error, data) => {
      if (error) {
        done(error);
        return;
      }

      const template = data.data[0];
      console.log(data);
      console.log(template);

      templates.getTemplateById(template.id, "", version, (error, data) => {
        if (error) {
          done(error);
          return;
        }
        console.log(data);
        done();
      });
    });
  });

  it("lists drafts", done => {
    drafts.getDrafts(version, {}, (error, data) => {
      if (error) {
        done(error);
        return;
      }

      const draft = data.data[0];
      console.log(data);
      console.log(draft);

      drafts.getDraftById(draft.id, "handlebars", version, (error, data) => {
        if (error) {
          done(error);
          return;
        }
        console.log(data);
        done();
      });
    });
  });
});
