/** Grammar path for Amalia (A2.2). */
window.GRAMMAR_DATA = [
  {
    "id": "auxiliary-verbs",
    "order": 1,
    "title": "Auxiliary verbs in questions",
    "level": "A2.2",
    "status": "published",
    "page": "grammar-topic.html?id=auxiliary-verbs",
    "passed": false,
    "attempts": 0,
    "passScore": 100,
    "overview": {
      "lead": "Auxiliary verbs help us build questions and negatives. The auxiliary depends on the tense and the main verb.",
      "keyRule": "Use do/does/did with most main verbs; use be and have directly when they are already the auxiliary.",
      "example": "Where do you work? · Are you studying? · Have you studied here before?",
      "subjects": [
        "I",
        "you",
        "he / she / it",
        "we",
        "they"
      ]
    },
    "uses": [
      {
        "icon": "?",
        "title": "Present simple questions",
        "text": "Use do or does before the subject with most main verbs.",
        "example": "What do you do? / Where does she work?"
      },
      {
        "icon": "↻",
        "title": "Continuous questions",
        "text": "Put the correct form of be before the subject.",
        "example": "Why are you learning English?"
      },
      {
        "icon": "✓",
        "title": "Perfect questions",
        "text": "Put have or has before the subject.",
        "example": "Have you studied here before?"
      },
      {
        "icon": "→",
        "title": "Plans with going to",
        "text": "Use am/is/are before the subject, then going to + verb.",
        "example": "What are you going to do after class?"
      }
    ],
    "forms": [
      {
        "label": "Affirmative",
        "formula": "Subject + verb / auxiliary + verb",
        "example": "You work here. / You are studying English."
      },
      {
        "label": "Negative",
        "formula": "Subject + auxiliary + not + verb",
        "example": "I do not work here. / She is not studying."
      },
      {
        "label": "Question",
        "formula": "Question word + auxiliary + subject + verb?",
        "example": "Where do you work? / Why are you learning English?"
      },
      {
        "label": "Short answer",
        "formula": "Yes/No + subject + auxiliary",
        "example": "Do you work here? — Yes, I do. / Have you studied here? — No, I haven’t."
      }
    ],
    "contrast": {
      "title": "Subject questions are different",
      "leftTitle": "Object / information question",
      "leftText": "Use an auxiliary: Where does Katie speak Italian?",
      "rightTitle": "Subject question",
      "rightText": "Do not add do/does/did: Who in the class speaks Italian?"
    },
    "questionBuilder": {
      "title": "Build a question",
      "pattern": [
        "question word",
        "auxiliary",
        "subject",
        "main verb",
        "rest of question"
      ]
    },
    "memoryRule": {
      "title": "Choose the auxiliary",
      "steps": [
        "Find the tense or structure.",
        "If the verb is be, move be before the subject.",
        "For present/past simple with another verb, use do/does/did.",
        "For perfect forms, move have/has before the subject."
      ]
    },
    "commonMistakes": [
      {
        "wrong": "Where you work?",
        "right": "Where do you work?",
        "reason": "Present simple questions with a main verb need do/does."
      },
      {
        "wrong": "Why do you learning English?",
        "right": "Why are you learning English?",
        "reason": "Present continuous uses be + -ing."
      },
      {
        "wrong": "Have you study here before?",
        "right": "Have you studied here before?",
        "reason": "Present perfect uses have/has + past participle."
      },
      {
        "wrong": "Who does speak Italian?",
        "right": "Who speaks Italian?",
        "reason": "A subject question does not use do/does/did."
      }
    ],
    "quizExercises": [
      {
        "title": "Choose the auxiliary",
        "instructions": "Choose the correct option.",
        "items": [
          {
            "type": "single",
            "prompt": "___ you work in an office?",
            "options": [
              "Do",
              "Are",
              "Have"
            ],
            "answer": 0,
            "difficulty": "Easy",
            "skill": "basic rule"
          },
          {
            "type": "single",
            "prompt": "Why ___ you learning English?",
            "options": [
              "do",
              "are",
              "have"
            ],
            "answer": 1,
            "difficulty": "Easy",
            "skill": "basic rule"
          },
          {
            "type": "single",
            "prompt": "___ you studied here before?",
            "options": [
              "Do",
              "Are",
              "Have"
            ],
            "answer": 2,
            "difficulty": "Easy",
            "skill": "basic rule"
          },
          {
            "type": "single",
            "prompt": "Where ___ she come from?",
            "options": [
              "does",
              "is",
              "has"
            ],
            "answer": 0,
            "difficulty": "Easy",
            "skill": "basic rule"
          }
        ]
      },
      {
        "title": "Complete the questions",
        "instructions": "Write the missing auxiliary.",
        "items": [
          {
            "type": "text",
            "prompt": "What ___ you do when you’re not working?",
            "answer": "do",
            "difficulty": "Medium",
            "skill": "apply the rule"
          },
          {
            "type": "text",
            "prompt": "How long ___ you studied English?",
            "answer": "have",
            "difficulty": "Medium",
            "skill": "apply the rule"
          },
          {
            "type": "text",
            "prompt": "What ___ you going to do after class?",
            "answer": "are",
            "difficulty": "Medium",
            "skill": "apply the rule"
          },
          {
            "type": "text",
            "prompt": "How much ___ the course cost?",
            "answer": "does",
            "difficulty": "Medium",
            "skill": "apply the rule"
          }
        ]
      },
      {
        "title": "Choose the correct question",
        "instructions": "Choose the grammatically correct question.",
        "items": [
          {
            "type": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "Where do you work?",
              "Where are you work?"
            ],
            "answer": 0,
            "difficulty": "Harder",
            "skill": "contrast"
          },
          {
            "type": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "Why are you studying English?",
              "Why do you studying English?"
            ],
            "answer": 0,
            "difficulty": "Harder",
            "skill": "contrast"
          },
          {
            "type": "single",
            "prompt": "Choose the correct subject question.",
            "options": [
              "Who speaks Italian?",
              "Who does speak Italian?"
            ],
            "answer": 0,
            "difficulty": "Harder",
            "skill": "subject question"
          },
          {
            "type": "single",
            "prompt": "Choose the correct question.",
            "options": [
              "Have you met the teacher yet?",
              "Do you met the teacher yet?"
            ],
            "answer": 0,
            "difficulty": "Harder",
            "skill": "perfect"
          }
        ]
      },
      {
        "title": "Build the question",
        "instructions": "Write the complete question.",
        "items": [
          {
            "type": "reorder",
            "prompt": "where / your family / come from",
            "tokens": [
              "where",
              "your family",
              "come from"
            ],
            "answer": "Where does your family come from?",
            "acceptedAnswers": [
              "Where does your family come from",
              "Where does your family come from?"
            ],
            "difficulty": "Challenge",
            "skill": "build a question"
          },
          {
            "type": "reorder",
            "prompt": "how long / each class / last",
            "tokens": [
              "how long",
              "each class",
              "last"
            ],
            "answer": "How long does each class last?",
            "acceptedAnswers": [
              "How long does each class last",
              "How long does each class last?"
            ],
            "difficulty": "Challenge",
            "skill": "build a question"
          },
          {
            "type": "reorder",
            "prompt": "what / you / think of the test",
            "tokens": [
              "what",
              "you",
              "think of the test"
            ],
            "answer": "What do you think of the test?",
            "acceptedAnswers": [
              "What do you think of the test",
              "What do you think of the test?"
            ],
            "difficulty": "Challenge",
            "skill": "build a question"
          },
          {
            "type": "reorder",
            "prompt": "what / you / going to do after class",
            "tokens": [
              "what",
              "you",
              "going to do after class"
            ],
            "answer": "What are you going to do after class?",
            "acceptedAnswers": [
              "What are you going to do after class",
              "What are you going to do after class?"
            ],
            "difficulty": "Challenge",
            "skill": "build a question"
          }
        ]
      }
    ]
  }
];
