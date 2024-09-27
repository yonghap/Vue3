<template>
	<div>
		<ul>
<!--        <li v-for="index in 15" :key="item">-->
<!--          <img :src="photos.products[index].thumbnail" @load="loadImage(index)">-->
<!--        </li>-->
		</ul>
<!--    <div class="loading" v-if="isLoading"></div>-->
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
	data() {
		return {
      isLoading : true,
			currentAge : '',
      photos : null,
      imgLoaded : 0
		}
	},
	computed: {
		...mapGetters(['getTest'])
	},
	created() {
    this.test();
		// this.currentAge = (this.getTest.id === 'test') ? this.getTest.name : '';
	},
	methods : {
		toggleAge(age) {
			this.currentAge = age;
		},
		async test() {
      const t = await this.$store.dispatch('get_games');
      console.log(t);
		},
    loadImage(idx) {
      this.imgLoaded++;
      if (this.imgLoaded === 15) {
        this.isLoading = false;
      }
    }
	},
}

</script>

<style>
.loading {
  position:fixed;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background:rgba(0,0,0,0.5);
  z-index:100;
}
</style>