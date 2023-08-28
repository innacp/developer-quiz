import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questionIndex: 0,
    questions: [
      {
        id: 1,
        question: "How much do you value sleep?",
        answers: [
          {
            text: "I cannot function with less than 10 hours of sleep",
            resultCategory: "YOLO",
          },
          {
            text: "7 to 8 hours is totally acceptable",
            resultCategory: "acceptable programmer",
          },
          {
            text: "Up to 6 hours is fine",
            resultCategory: "efficient",
          },
          {
            text: "Sleep is for the weak",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 2,
        question: "How much do you value your personal time?",
        answers: [
          {
            text: "My personal time is precious, do not dare touch it",
            resultCategory: "YOLO",
          },
          {
            text: "There are a couple of things that I refuse to give up",
            resultCategory: "acceptable programmer",
          },
          {
            text: "There are a couple of things that I’d rather not give up but I will if I have to",
            resultCategory: "efficient",
          },
          {
            text: "What is this?",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 3,
        question: "How well can you tolerate pain?",
        answers: [
          {
            text: "Pain? Why pain? Oh God no!",
            resultCategory: "YOLO",
          },
          {
            text: "Everybody hurts sometimes",
            resultCategory: "acceptable programmer",
          },
          {
            text: "It doesn’t bother me until it does",
            resultCategory: "efficient",
          },
          {
            text: "I have no idea what you’re talking about",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 4,
        question: "What does it take to get you frustrated?",
        answers: [
          {
            text: "Are you talking to me? HUH?",
            resultCategory: "YOLO",
          },
          {
            text: "Just let me be",
            resultCategory: "acceptable programmer",
          },
          {
            text: "Now now, let’s just talk about this",
            resultCategory: "efficient",
          },
          {
            text: "Huh? You said something?",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 5,
        question: "How well do you handle criticism?",
        answers: [
          {
            text: "So, you’re saying I’m wrong? I shall have your head",
            resultCategory: "YOLO",
          },
          {
            text: "I am pretty sure I have the better idea but shoot",
            resultCategory: "acceptable programmer",
          },
          {
            text: "There is merit to both our approaches",
            resultCategory: "efficient",
          },
          {
            text: "Whatever man, as long as it works",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 6,
        question: "How much attention do you pay to details?",
        answers: [
          {
            text: "Oh well, at least it works",
            resultCategory: "YOLO",
          },
          {
            text: "Seems fine. If it fails I’ll take a closer look",
            resultCategory: "acceptable programmer",
          },
          {
            text: "Seems fine but I’d better fix this small thing. It may cause trouble later",
            resultCategory: "efficient",
          },
          {
            text: "I have to polish it and make it pretty. I SAID NO, IT’S NOT READY YET!",
            resultCategory: "coding freak",
          },
        ],
      },
      {
        id: 7,
        question: "What motivated you to become a developer?",
        answers: [
          {
            text: "Money, money, money… (Always sunny in the rich man’s world… lalala)",
            resultCategory: "YOLO",
          },
          {
            text: "It seems… challenging. Plus, I can make good money",
            resultCategory: "acceptable programmer",
          },
          {
            text: "I want to shape the future and maybe I’ll manage to get well paid",
            resultCategory: "efficient",
          },
          {
            text: "What do you mean? What else could I become? Code is love, code is life.",
            resultCategory: "coding freak",
          },
        ],
      },
    ],
  }),
});
