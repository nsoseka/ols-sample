<template>
  <client-only>
    <div class="container swiper-example">
      <div class="column box container is-fullwidth p-t-xl p-l-xl p-r-xl is-white is-rounded hero">
        <nav class="pagination is-dark">
          <nuxt-link to="/" class=""></nuxt-link>
          <nuxt-link to="/page2" class="pagination-next has-text-info">Page 2</nuxt-link>
        </nav>
        <h1 class="title has-text-centered is-size-2 has-text-whit">By Association</h1>
        <h2 class="sub-title is-size-4 has-text-left m-t-md m-b-md has-text-link">How does an individual become part of a group? </h2>
        <p class="m-b-md has-text-left">
          Just as there are an infinite number of personal interests and beliefs that can be seen among Americans collectively, there are thousands and thousands of organizations and groups to which citizens can belong. The terms group and organization are very loose and can be interpreted very broadly. Some groups are very general and open to all without question while others may have specific goals or very selective membership. They can be economically motivated, socially focused, or even one-issue organizations. However, we can break them down into political organizations, interest groups, voluntary and civic associations, unions, and religious groups. View the slideshow below to learn more.
        </p>
        <div class="box boss is-fullwidth columns is-marginless is-paddingless">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <client-only>
                <swiper
                  ref="carousel"
                  class="swiper"
                  :options="swiperOptions"
                  @ready="onSwiperRedied"
                  @clickSlide="onSwiperClickSlide"
                  @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
                >
                  <swiper-slide class="swiper-slide">
                    <div class="columns">
                      <div class="column is-7">
                        <img src="~/assets/images/slide1.jpg" alt="">
                      </div>
                      <div class="column is-5">
                        <h3 class="sub-title is-size-4 has-text-info has-text-left">Political organizations</h3>
                        <p class="m-b-md p-r-md is-size-6 has-text-left">
                          Just as there are an infinite number of personal interests and beliefs that can be seen among Americans collectively, there are thousands and thousands of organizations and groups to which citizens can belong. The terms group and organization are very loose and can be interpreted very broadly. Some groups are very general and open to all without question while others may have specific goals or very selective membership. They can be economically motivated, socially focused, or even one-issue organizations. However, we can break them down into political organizations, interest groups, voluntary and civic associations, unions, and religious groups. View the slideshow below to learn more.
                        </p>
                      </div>
                    </div>
                </swiper-slide>
                  <swiper-slide>
                    <div class="columns">
                      <div class="column is-7">
                        <img src="~/assets/images/slide2.jpg" alt="">
                      </div>
                      <div class="column is-5">
                        <h3 class="sub-title is-size-4 has-text-info has-text-left">Interest Groups</h3>
                        <p class="m-b-md p-r-md is-size-6 has-text-left">
                            Interest groups tend to be centered on a common goal or idea. These groups run the table in terms of interests and concerns, including the National Organization for Women, La Raza, National Right to Life, and the National Rifle Association. Many could be considered political as they have aims to influence leadership. However, membership tends to be less restrictive as many look for volunteers to help spread their messages and ideas.
                        </p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="columns">
                      <div class="column is-7">
                        <img src="~/assets/images/slide3.jpg" alt="">
                      </div>
                      <div class="column is-5">
                        <h3 class="sub-title is-size-4 has-text-info has-text-left"> Voluntary and Civic Associations</h3>
                        <p class="m-b-md p-r-md is-size-6 has-text-left">
                          Volunteering and civic participation tends to be the most local level of group membership. Often parts of larger organizations, these groups are often charitable, and work for general causes, or serve as a means of fraternal support. Such groups differ widely, with some very open to anyone interested, such as the Red Cross or United Way, and others with very selective membership procedures, such as the Elks or Freemasons.
                        </p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="columns">
                      <div class="column is-7">
                        <img src="~/assets/images/slide4.jpg" alt="">
                      </div>
                      <div class="column is-5">
                        <h3 class="sub-title is-size-4 has-text-info has-text-left">Unions</h3>
                        <p class="m-b-md p-r-md is-size-6 has-text-left">
                          Unions were created to support the needs of workers in various fields of industry and service and are responsible for helping to promote safe workplaces and fair labor practices. Over the years, unions have often increased their activities to include charitable works and political involvement to support candidates and ideas that serve to aid their general membership. Unions include the AFL-CIO and the NEA. Union membership is selective in that one must usually be employed in a particular field to join;however, in some places union membership is actually mandatory by state law if employed in certain jobs.
                        </p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="columns">
                      <div class="column is-7">
                        <img src="~/assets/images/slide5.jpg" alt="">
                      </div>
                      <div class="column is-5">
                        <h3 class="sub-title is-size-4 has-text-info has-text-left">Religious Groups</h3>
                        <p class="m-b-md p-r-md is-size-6 has-text-left">
                          Religious groups is a very broad category as it can refer to specific religious denominations or sects, or it can refer to organizations and societies that support the views of particular religions and belief systems. For example, entire denominations have lobbying organizations to petition on their behalf. Other organizations exist to promote the ideas of a religious group, such as the Anti-Defamation League, which exists to prevent persecution of Jewish citizens, and the Knights of Columbus, an association of Catholic men. Generally, membership in groups requires adherence to the beliefs of the sect or denomination, but some have more stringent requirements for participation.
                        </p>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </client-only>
              <!-- directive: render origin html on server & render Swiper on browser -->
              <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>
        </div>
        <p class="m-b-lg m-t-lg is-size-5 has-text-weight-bold has-text-link">Do some organizations and groups overlap categories? </p>
        <div class="buttons">
        <button class="button is-info is" @click.prevent="revealAnswer = !revealAnswer">REVEAL ANSWER</button>
      </div>
        <p v-show="revealAnswer" class="m-b-lg is-size-5 has-text-info is-italic">Yes. Many organizations could fall under the idea of political organizations or
            interest groups since they tend to aim for political influence and focus on areas of common interest.
            However, some are more explicitly political, while others have politics as a goal among many.</p>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
    name: 'swiper-nuxt',
    data () {
      return {
        revealAnswer: false,
        swiperOptions: {
          loop: true,
          // slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          autoplay: true,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-example {
    // height: auto;
    .box.boss {
      width: 100%;
    }

    .swiper-container {
      max-width: 900px;
      width: 100%;
      // width: auto;
      min-height: 500px;
      height: auto;
    }
    .swiper {
      // height: 300px;
      .swiper-slide {
        width: 100%;
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-pagination {
        > .swiper-pagination-bullet {
          background-color: red;
        }
      }
    }
  }
</style>
