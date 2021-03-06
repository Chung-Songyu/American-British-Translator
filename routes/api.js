'use strict';
const Translator = require('../components/translator.js');

module.exports = app => {
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if(req.body.text == "" && req.body.locale) {
        return res.json({error: 'No text to translate'});
      }
      if(!req.body.text || !req.body.locale) {
        return res.json({error: 'Required field(s) missing'});
      }
      if(req.body.locale !== "american-to-british" && req.body.locale !== "british-to-american") {
        return res.json({error: 'Invalid value for locale field'});
      }
      if(req.body.locale == "american-to-british") {
        return res.json(translator.toBritish(req.body.text));
      }
      if(req.body.locale == "british-to-american") {
        return res.json(translator.toAmerican(req.body.text));
      }
    });
};
