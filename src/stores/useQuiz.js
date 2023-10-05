import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questionIndex: 0,
    questionArray: [
      {
        questionId: 1,
        questionText: "How much do you value sleep?",
        answers: [
          {
            answerText: "I cannot function with less than 10 hours of sleep",
            resultCategory: "YOLO",
          },
          {
            answerText: "7 to 8 hours is totally acceptable",
            resultCategory: "acceptable programmer",
          },
          {
            answerText: "Up to 6 hours is fine",
            resultCategory: "efficient",
          },
          {
            answerText: "Sleep is for the weak",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 2,
        questionText: "How much do you value your personal time?",
        answers: [
          {
            answerText: "My personal time is precious, do not dare touch it",
            resultCategory: "YOLO",
          },
          {
            answerText: "There are a couple of things that I refuse to give up",
            resultCategory: "acceptable programmer",
          },
          {
            answerText:
              "There are a couple of things that I’d rather not give up but I will if I have to",
            resultCategory: "efficient",
          },
          {
            answerText: "What is this?",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 3,
        questionText: "How well can you tolerate pain?",
        answers: [
          {
            answerText: "Pain? Why pain? Oh God no!",
            resultCategory: "YOLO",
          },
          {
            answerText: "Everybody hurts sometimes",
            resultCategory: "acceptable programmer",
          },
          {
            answerText: "It doesn’t bother me until it does",
            resultCategory: "efficient",
          },
          {
            answerText: "I have no idea what you’re talking about",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 4,
        questionText: "What does it take to get you frustrated?",
        answers: [
          {
            answerText: "Are you talking to me? HUH?",
            resultCategory: "YOLO",
          },
          {
            answerText: "Just let me be",
            resultCategory: "acceptable programmer",
          },
          {
            answerText: "Now now, let’s just talk about this",
            resultCategory: "efficient",
          },
          {
            answerText: "Huh? You said something?",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 5,
        questionText: "How well do you handle criticism?",
        answers: [
          {
            answerText: "So, you’re saying I’m wrong? I shall have your head",
            resultCategory: "YOLO",
          },
          {
            answerText: "I am pretty sure I have the better idea but shoot",
            resultCategory: "acceptable programmer",
          },
          {
            answerText: "There is merit to both our approaches",
            resultCategory: "efficient",
          },
          {
            answerText: "Whatever man, as long as it works",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 6,
        questionText: "How much attention do you pay to details?",
        answers: [
          {
            answerText: "Oh well, at least it works",
            resultCategory: "YOLO",
          },
          {
            answerText: "Seems fine. If it fails I’ll take a closer look",
            resultCategory: "acceptable programmer",
          },
          {
            answerText:
              "Seems fine but I’d better fix this small thing. It may cause trouble later",
            resultCategory: "efficient",
          },
          {
            answerText:
              "I have to polish it and make it pretty. I SAID NO, IT’S NOT READY YET!",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        questionId: 7,
        questionText: "What motivated you to become a developer?",
        answers: [
          {
            answerText:
              "Money, money, money… (Always sunny in the rich man’s world… lalala)",
            resultCategory: "YOLO",
          },
          {
            answerText: "It seems… challenging. Plus, I can make good money",
            resultCategory: "acceptable programmer",
          },
          {
            answerText:
              "I want to shape the future and maybe I’ll manage to get well paid",
            resultCategory: "efficient",
          },
          {
            answerText:
              "What do you mean? What else could I become? Code is love, code is life.",
            resultCategory: "coding freak",
          },
        ],
      },
    ],
  }),
});
