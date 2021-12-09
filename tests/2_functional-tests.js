const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  // #1
  test('Text and locale fields', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-british"
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.text, "Mangoes are my favorite fruit.");
      assert.equal(res.body.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
      done();
    });
  });

  // #2
  test('Text and invalid locale field', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "Mangoes are my favorite fruit.",
      locale: "american-to-french"
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.error, "Invalid value for locale field");
      done();
    });
  });

  // #3
  test('Missing text field', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      locale: "american-to-british"
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
  });

  // #4
  test('Missing locale field', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "Mangoes are my favorite fruit.",
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.error, "Required field(s) missing");
      done();
    });
  });

  // #5
  test('Empty text', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "",
      locale: "american-to-british"
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.error, "No text to translate");
      done();
    });
  });

  // #6
  test('Text that needs no translation', (done) => {
    chai
    .request(server)
    .post("/api/translate")
    .send({
      text: "Mangoes are my favourite fruit.",
      locale: "american-to-british"
    })
    .end((err, res) => {
      assert.equal(res.status, 200);
      assert.equal(res.type, "application/json");
      assert.equal(res.body.text, "Mangoes are my favourite fruit.");
      assert.equal(res.body.translation, "Everything looks good to me!");
      done();
    });
  });
});
