<template>
  <div class="content content--fit">
    <section class="sub sub--fit" v-if="detailData">
      <article class="sub__intro">
        <img :src="detailData.response.body.items.item[0].firstimage">
      </article>
      <div class="row">
        <!-- 상세 -->
        <div class="detail">
          <div class="detail__meta">
            <h2 class="detail__title">
              {{ detailData.response.body.items.item[0].title }}
            </h2>
            <div class="detail__address">
              {{ detailData.response.body.items.item[0].addr1 }}
            </div>
          </div>
	        <div class="detail__description">
            {{ detailData.response.body.items.item[0].overview }}
	        </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Repository from '../api/RepositoryFactory'

const PostRepository = Repository.get('posts')
export default {
  data() {
    return {
      detailData: null
    }
  },
	async created() {
		const res = await this.getDetail()
		this.detailData = res;
  },
	 mounted() {

	},
  methods: {
    toggleAge(age) {
      this.currentAge = age;
    },
    async getDetail() {
			try {
				const id = this.$route.params.id;
				const res = await PostRepository.getGameDetail(id)
				const {status, data} = res;
        console.log(data);
				return data;
			} catch(err) {
				console.log(err);
			}
    },
  }
}
</script>