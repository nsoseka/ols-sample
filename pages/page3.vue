<template>
  <div class="column box ribbonHed p-t-xl p-b-xl p-l-xl p-r-xl is-white is-rounded hero">
    <nav class="pagination is-dark">
      <nuxt-link to="page2" class="pagination-previous has-text-info">Previous</nuxt-link>
    </nav>
    <h1 class="title has-text-centered has-text-whit is-size-2">Words to Know</h1>
    <h2 class="sub-title is-size-4 m-t-md m-b-md  has-text-info">What words should you know to appreciate the rest of Part I of the novel?</h2>
    <p class="m-b-md">
      Although Miyax has finally made friends with Amaroq and the other wolves in his pack, she is still struggling to survive. Getting Jello to share some meat from his "belly basket" had been a desperate and dangerous move on her part, and she can't rely on this method forever. The next time she tries, he might attack her instead of giving in to his "babysitting" instincts. 
    </p>
    <p class="m-b-lg">Throughout the rest of Part I of <span class="is-italic has-text-info has-text-weight-bold">Julie of the Wolves</span>, the protagonist continues her quest to stay alive in spite of the harshness of the elements, a shortage of food, and her loneliness. Some of the words below may be unfamiliar to you, and yet they will be helpful in understanding Miyax's difficult situation even after winning Amaroq's trust. 
    </p>
    
    <table class="table box is-hoverabl is-fullwidth">
      <thead>
        <tr>
        </tr>
      </thead>
      <tfoot>
        <tr>
        </tr>
      </tfoot>
      <tbody>
        <tr class="columns">
          <td class="column is-8 is-marginless">
            <aside class="media-left">
              <img src="~/assets/images/page3.jpg" width="100%">
            </aside>
          </td>

          <td class="column has-text-rigt">
            <div class="bo content">
              <ul>
                <li class="m-b-md has-text-weight-bold">Forage</li>
                <li class="m-b-md has-text-weight-bold">Improvisation</li>
                <li class="m-b-md has-text-weight-bold">Undulate</li>
                <li class="m-b-md has-text-weight-bold">Eerie</li>
                <li class="m-b-md has-text-weight-bold">Writhed</li>
                <li class="m-b-md has-text-weight-bold">Tribute</li>
                <li class="m-b-md has-text-weight-bold">Menacingly</li>
                <li class="m-b-md has-text-weight-bold">Morsel</li>
              </ul>
            </div> 
          </td>
        </tr>
      </tbody>
    </table>
    <p class="m-b-lg m-t-lg is-size-6 has-text-weight-bold has-text-info is-italic">See if you can figure out what each word might mean when used to describe someone's attempt to survive alone in the Alaskan tundra. Then click the word to see its definition as it will appear in the novel.</p>
    <table class="table box is-bordered is-hoverable is-fullwidth">
        <thead>
          <th>Word</th>
          <th class="has-text-right">Definition as it will appear in the novel</th>
        </thead>
        <tfoot>
          <th>Word</th>
          <th class="has-text-right">Definition as it will appear in the novel</th>
        </tfoot>
        <tbody>
          <tr v-for="word in words" :key="word.number">
              <td class="is-narrow content p-t-lg p-b-lg has-text-weight-bold has-text-info">
                <a href="#" @click.prevent="word.reveal = !word.reveal">{{ word.word }}</a>
              </td>
              <td class="has-text-right">
                <span v-show="word.reveal">{{ word.meaning }}</span>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name: 'page3',
    data () {
      return {
        revealAnswer: false,
        words: [
          {number: 1, word: "forage", meaning: "search far and wide for food", reveal: false},
          {number: 2, word: "improvisation",  meaning: "creating spontaneously, using whatever is available", reveal: false},
          {number: 3, word: "undulating", meaning: "moving with a wave-like motion", reveal: false},
          {number: 4, word: "eerie", meaning: "spooky, unsettling", reveal: false},
          {number: 5, word: "writhed", meaning: "wisted or squirmed, usually in pain", reveal: false},
          {number: 6, word: "tribute", meaning: "an act or gesture of respect and gratitude", reveal: false},
          {number: 7, word: "menacingly", meaning: "in a threatening, aggressive way", reveal: false},
          {number: 8, word: "morsel", meaning: "a very small bite of something", reveal: false},
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  
</style>
