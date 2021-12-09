const assert = require('chai').assert;
const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  // #1
  test("'Mangoes are my favorite fruit.' to British English", () => {
    assert.deepEqual(translator.toBritish("Mangoes are my favorite fruit."), {text: "Mangoes are my favorite fruit.", translation: "Mangoes are my <span class=\"highlight\">favourite</span> fruit."});
  });

  // #2
  test("'I ate yogurt for breakfast.' to British English", () => {
    assert.deepEqual(translator.toBritish("I ate yogurt for breakfast."), {text: "I ate yogurt for breakfast.", translation: "I ate <span class=\"highlight\">yoghurt</span> for breakfast."});
  });

  // #3
  test("'We had a party at my friend's condo.' to British English", () => {
    assert.deepEqual(translator.toBritish("We had a party at my friend's condo."), {text: "We had a party at my friend's condo.", translation: "We had a party at my friend's <span class=\"highlight\">flat</span>."});
  });

  // #4
  test("'Can you toss this in the trashcan for me?' to British English", () => {
    assert.deepEqual(translator.toBritish("Can you toss this in the trashcan for me?"), {text: "Can you toss this in the trashcan for me?", translation: "Can you toss this in the <span class=\"highlight\">bin</span> for me?"});
  });

  // #5
  test("'The parking lot was full.' to British English", () => {
    assert.deepEqual(translator.toBritish("The parking lot was full."), {text: "The parking lot was full.", translation: "The <span class=\"highlight\">car park</span> was full."});
  });

  // #6
  test("'Like a high tech Rube Goldberg machine.' to British English", () => {
    assert.deepEqual(translator.toBritish("Like a high tech Rube Goldberg machine."), {text: "Like a high tech Rube Goldberg machine.", translation: "Like a high tech <span class=\"highlight\">Heath Robinson device</span>."});
  });

  // #7
  test("'To play hooky means to skip class or work.' to British English", () => {
    assert.deepEqual(translator.toBritish("To play hooky means to skip class or work."), {text: "To play hooky means to skip class or work.", translation: "To <span class=\"highlight\">bunk off</span> means to skip class or work."});
  });

  // #8
  test("'No Mr. Bond, I expect you to die.' to British English", () => {
    assert.deepEqual(translator.toBritish("No Mr. Bond, I expect you to die."), {text: "No Mr. Bond, I expect you to die.", translation: "No <span class=\"highlight\">Mr</span> Bond, I expect you to die."});
  });

  // #9
  test("'Dr. Grosh will see you now.' to British English", () => {
    assert.deepEqual(translator.toBritish("Dr. Grosh will see you now."), {text: "Dr. Grosh will see you now.", translation: "<span class=\"highlight\">Dr</span> Grosh will see you now."});
  });

  // #10
  test("'Lunch is at 12:15 today.' to British English", () => {
    assert.deepEqual(translator.toBritish("Lunch is at 12:15 today."), {text: "Lunch is at 12:15 today.", translation: "Lunch is at <span class=\"highlight\">12.15</span> today."});
  });

  // #11
  test("'We watched the footie match for a while.' to American English", () => {
    assert.deepEqual(translator.toAmerican("We watched the footie match for a while."), {text: "We watched the footie match for a while.", translation: "We watched the <span class=\"highlight\">soccer</span> match for a while."});
  });

  // #12
  test("'Paracetamol takes up to an hour to work.' to American English", () => {
    assert.deepEqual(translator.toAmerican("Paracetamol takes up to an hour to work."), {text: "Paracetamol takes up to an hour to work.", translation: "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."});
  });

  // #13
  test("'First, caramelise the onions.' to American English", () => {
    assert.deepEqual(translator.toAmerican("First, caramelise the onions."), {text: "First, caramelise the onions.", translation: "First, <span class=\"highlight\">caramelize</span> the onions."});
  });

  // #14
  test("'I spent the bank holiday at the funfair.' to American English", () => {
    assert.deepEqual(translator.toAmerican("I spent the bank holiday at the funfair."), {text: "I spent the bank holiday at the funfair.", translation: "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>."});
  });

  // #15
  test("'I had a bicky then went to the chippy.' to American English", () => {
    assert.deepEqual(translator.toAmerican("I had a bicky then went to the chippy."), {text: "I had a bicky then went to the chippy.", translation: "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>."});
  });

  // #16
  test("'I've just got bits and bobs in my bum bag.' to American English", () => {
    assert.deepEqual(translator.toAmerican("I've just got bits and bobs in my bum bag."), {text: "I've just got bits and bobs in my bum bag.", translation: "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>."});
  });

  // #17
  test("'The car boot sale at Boxted Airfield was called off.' to American English", () => {
    assert.deepEqual(translator.toAmerican("The car boot sale at Boxted Airfield was called off."), {text: "The car boot sale at Boxted Airfield was called off.", translation: "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."});
  });

  // #18
  test("'Have you met Mrs Kalyani?' to American English", () => {
    assert.deepEqual(translator.toAmerican("Have you met Mrs Kalyani?"), {text: "Have you met Mrs Kalyani?", translation: "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?"});
  });

  // #19
  test("'Prof Joyner of King's College, London.' to American English", () => {
    assert.deepEqual(translator.toAmerican("Prof Joyner of King's College, London."), {text: "Prof Joyner of King's College, London.", translation: "<span class=\"highlight\">Prof.</span> Joyner of King's College, London."});
  });

  // #20
  test("'Tea time is usually around 4 or 4.30.' to American English", () => {
    assert.deepEqual(translator.toAmerican("Tea time is usually around 4 or 4.30."), {text: "Tea time is usually around 4 or 4.30.", translation: "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>."});
  });

  // #21
  test("'Mangoes are my favorite fruit.' to British English", () => {
    assert.deepEqual(translator.toBritish("Mangoes are my favorite fruit."), {text: "Mangoes are my favorite fruit.", translation: "Mangoes are my <span class=\"highlight\">favourite</span> fruit."});
  });

  // #22
  test("'I ate yogurt for breakfast.' to British English", () => {
    assert.deepEqual(translator.toBritish("I ate yogurt for breakfast."), {text: "I ate yogurt for breakfast.", translation: "I ate <span class=\"highlight\">yoghurt</span> for breakfast."});
  });

  // #23
  test("'We watched the footie match for a while.' to American English", () => {
    assert.deepEqual(translator.toAmerican("We watched the footie match for a while."), {text: "We watched the footie match for a while.", translation: "We watched the <span class=\"highlight\">soccer</span> match for a while."});
  });

  // #24
  test("'Paracetamol takes up to an hour to work.' to American English", () => {
    assert.deepEqual(translator.toAmerican("Paracetamol takes up to an hour to work."), {text: "Paracetamol takes up to an hour to work.", translation: "<span class=\"highlight\">Tylenol</span> takes up to an hour to work."});
  });
});
