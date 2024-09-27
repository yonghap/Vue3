<template>
	<div class="content">
		<section class="main">
			<div class="row">
        <div class="category">
          <button type="button" class="category__button category__button--active">인기순</button>
          <button type="button" class="category__button">내근처</button>
          <button type="button" class="category__button">최근 업데이트</button>
        </div>
				<article class="main__article">
					<ul class="list" v-if="list">
						<li v-for="item in list">
							<router-link :to="`/game/${item.contentid}`">
								<figure class="list__thumbnail" :style="{
									'background-image' : `url(${item.firstimage})`
								}">
								</figure>
								<span class="list__title">
                  {{ item.title }}
		            </span>
							</router-link>
						</li>
					</ul>
				</article>
			</div>
		</section>
	</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
	data() {
		return {
			list: {}
		}
	},
	created() {
		// this.test();
	},
	methods: {
		toggleAge(age) {
			this.currentAge = age;
		},
		async test() {
			const result = await this.$store.dispatch('get_games');
      console.log(result.response.body);
      if (result.response.header.resultMsg === 'OK') {
        this.list = result.response.body.items.item;
      }
		},
	}
}
</script>