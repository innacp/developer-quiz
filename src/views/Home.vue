<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="home px-4 flex flex-col justify-center items-center gap-y-6 h-3/4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg max-w-sm"
    >
      <h1 class="uppercase text-3xl">Quiz</h1>
      <h2 class="text-3xl text-center">What type of developer are you?</h2>
      <button
        class="w-32 h-7 border border-solid border-black rounded-xl"
        @click="goToQuestion()"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useQuizStore } from "../stores/useQuiz";

export default {
  name: "Home",
  computed: {
    ...mapState(useQuizStore, ["questionArray", "questionIndex"]),
  },

  methods: {
    goToQuestion() {
      this.$router.push("/questionscreen");
    },
  },
};
</script>

<style>
h2 {
  font-family: "Montserrat", sans-serif;
}
</style>
 

