<template>
  <div class="question-container">
    <div class="question-box" v-for="question in questions" :key="question.id">
      <div class="question">
        {{ questions.question }}
      </div>
      <div class="answer" v-for="answer in questions.answer" :key="answer.text">
        {{ answer.text }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "../stores/useQuiz";

export default {
  name: "QuestionScreen",
  computed: {
    ...mapState(useQuizStore, ["questions", "questionIndex"]),
  },
};
</script>

<style lang="scss" scoped>
</style>