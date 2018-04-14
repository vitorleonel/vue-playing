<template>
  <div class="swipe">
      <div class="swipe-area">
          <div class="swipe-item background--red">asas</div>

          <div class="swipe-item background--green">
              <router-view></router-view>
          </div>

          <div class="swipe-item background--blue">asas</div>
      </div>
  </div>
</template>

<script>
import Swipe from 'swipe-js-iso'

export default {
    data() {
        return {
            swipe: undefined,
            options: {
                startSlide: 1,
                speed: 300,
                auto: false,
                continuous: false,
                disableScroll: false,
                stopPropagation: true,
                callback: function (index, slide) {},
                transitionEnd: (index, slide) => {
                    this.goToRoute(index)
                }
            }
        }
    },

    mounted() {
        this.swipe = new Swipe(this.$el, this.options)
        this.verifyRoute(this.$route.path)
    },

    methods: {
        verifyRoute(path) {
            switch(path) {
                case '/menu': this.swipe.slide(0); break;
                case '/tasks': this.swipe.slide(2); break;
                default: this.swipe.slide(1); break;
            }
        },

        goToRoute(index) {
            let path;

            if(index == 1) {
                if(this.$route.path.startsWith('/home/')) {
                    path = this.$route.path
                } else {
                    path = '/home'
                }
            } else {
                switch(index) {
                    case 0: path = '/menu'; break;
                    case 2: path = '/tasks'; break;
                }
            }

            this.$router.push(path)
        }
    },

    watch: {
        '$route' (to, from) {
            this.verifyRoute(to.path)
        }
    }
}
</script>


<style lang="scss">
.swipe-item {
    height: 100vh;
    padding: 1rem;
    float: left;
    box-sizing: border-box;
    position: relative;
    color: white;
}

.background {
    &--green {
        background-color: green;
    }

    &--red {
        background-color: red;
    }

    &--blue {
        background-color: blue;
    }
}
</style>

