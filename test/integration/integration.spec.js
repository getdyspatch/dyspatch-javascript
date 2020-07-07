/**
 * These are the custom tests added for this API client.
 *
 * DO NOT DELETE THIS FILE.
 */

const version = "application/vnd.dyspatch.2020.04+json";

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
    templates.getTemplates(version, {}).then((data, error) => {
      if (error) {
        done(error);
        return;
      }
      console.log(data);
      done();
    });
  });

  it("gets a single template", done => {
    const id = "tem_01de5teh6k59kya8q92mb01qzq"
    templates.getTemplateById(id, "handlebars", version).then((data, error) => {
      if (error) {
        done(error);
        return;
      }
      console.log(data);
      done();
    });
  });

  it("lists drafts", done => {
    drafts.getDrafts(version, {}).then((data, error) => {
      if (error) {
        done(error);
        return;
      }
      console.log(data);
      done();
    });
  });

  it("gets a single draft", done => {
    const id = "tdft_01dxkwr0nevs5h2baa3n3dgktp"
    drafts.getDraftById(id, "handlebars", version).then((data, error) => {
      if (error) {
        done(error);
        return;
      }
      console.log(data);
      done();
    });
  });
});
