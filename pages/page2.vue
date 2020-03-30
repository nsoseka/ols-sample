<template>
  <div class="column box ribbnHead p-t-xl p-l-xl p-b-xl p-r-xl is-white is-rounded hero">
    <nav class="pagination is-dark">
      <nuxt-link to="/" class="pagination-previous has-text-info">Previous</nuxt-link>
      <nuxt-link to="page3" class="pagination-next has-text-info">Next page</nuxt-link>
    </nav>
    <h1 class="title has-text-centered has-text-whit is-size-2">Practice</h1>
    <h2 class="sub-title is-size-4 m-t-md m-b-md has-text-info">Respect or disrespect?</h2>
    <p class="m-b-md">
      Now that you’ve seen examples of the ways people show one another respect and disrespect, see if you can classify the following words and actions. Read each item and decide whether it shows respect or disrespect.
    </p>
    <div class="column is-vcentered has-text-centered">
      <div class="box is-vcentered has-text-centered">
          <p class="m-b-md is-size-5 has-text-weight-bold has-text-info">{{ currentQuestion.question }}</p>
        <button class="button is-info" @click.prevent="checkResponse('A', currentQuestion.number)">RESPECT</button>
        <button class="button is-link" @click.prevent="checkResponse('B', currentQuestion.number)">DISRESPECT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'swiper-nuxt',
    data () {
      return {
        revealAnswer: false,
        questions: [ { 
          number: "1", answered: "N", status: "U", question: "Janelle is excitedly telling her friend Reina how her job interview went. Reina keeps texting her boyfriend.", answer: "B" },
          { number: "2", answered: "N", status: "U", question: "I can see your point about the cost of the streetlights, but what about the nighttime safety of the people who live in the neighborhood?", answer: "A"} ,
          { number: "3", answered: "N", status: "U", question: "All of Ron’s friends keep asking him to go camping with them next month, but he doesn’t enjoy the outdoors. His friends won’t stop nagging him.", answer: "B"} ,
          { number: "4", answered: "N", status: "U", question: "Because our cousin LeVar has asthma, we always dust and vacuum before he spends the night at our house.", answer: "A"},
          { number: "5", answered: "N", status: "U", question: "Stacy, who is frightened of dogs, meets Jarrod and his dog Thor out on a walk. Jarrod says 'Don’t be scared, Stacy. Thor is really gentle. Just try rubbing his ears.'", answer: "B" },
          { number: "6", answered: "N", status: "U", question: "I love oyster-flavored Jiffy Snax! Doesn’t everybody?", answer: "B" }
        ]
      }
    },
    computed: {
      currentQuestion: function() {
        let unanswered = this.questions.filter(obj => obj.answered !== "Y")
        if(unanswered.length === 0) {
          unanswered = this.questions.map(function(obj) {
            obj.answered = 'N' 
            obj.status = 'U'
            return obj
          })
        
        }

        return unanswered.sort(function (a, b) {
            return a.number - b.number;
          })[0];
      }
    },
    mounted() {

    },
    methods: {
      checkResponse(response, number) {
        if(response === this.currentQuestion.answer) {
          this.$confetti.start({
            particles: 5,
            defaultDropRate: 20,
            particlesPerFrame: 1,
          });
          this.$swal({
            position: 'top-end',
            icon: 'success',
            title: 'Good Job!',
            showConfirmButton: false,
            timer: 2000
          }).then((result) => {
            this.$confetti.stop();
          });
        } else {
          this.$swal({
            position: 'top-end',
            icon: 'error',
            title: 'Take another look at the examples in this lesson',
            showConfirmButton: false,
            timer: 2000
          });
        }

        let index = this.questions.findIndex(question => question.number === number)
        this.questions[index].status = response === this.currentQuestion.answer ? "C" : "W"
        this.questions[index].answered = 'Y'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
