<template>
  <div class="question-container">
    {{ "hahahah" }}
    <div
      class="question-box"
      v-for="questionItem in questionArray"
      :key="questionItem.questionText"
    >
      <div class="question">
        {{ questionItem.questionText }}
      </div>
      <div
        class="answer"
        v-for="answerItem in questionItem.answers"
        :key="answerItem.answerId"
      >
        {{ answerItem.answerText }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useQuizStore } from "../stores/useQuiz";

export default {
  name: "QuestionScreen",
  computed: {
    ...mapState(useQuizStore, ["questionArray", "questionIndex"]),
  },
};
</script>

<style lang="scss" scoped>
</style>