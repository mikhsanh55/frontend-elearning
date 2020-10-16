<template>
	<section>
		<Header />
		<main>
			<Headline />
	        <!-- List Mata Pelajaran -->
	        <div class="container">
	            <div class="uk-grid-large mt-4 uk-grid" >
	                <div class="uk-width-2-3@m">
	                    <ul id="course-intro-tab" class="uk-switcher mt-4">
	                    	<li>
	                    		<div class="section-header">
	                                <div class="section-header-left">
	                                    <h4> Semua Mata Pelajaran</h4>
	                                </div>
	                                <div class="section-header-right">
	                                    <a href="#" class="see-all"> Lihat Semua</a>
	                                </div>
	                            </div>
	                    		 <div class="uk-child-width-1-3@s" uk-grid>
	                    		 	<!-- Loop List Mata Pelajaran -->
	            	                   <div v-for="mapel in mapels">
	                                        <router-link :to="mapel.url">
	                                            <div class="course-card">
	                                                <div class="course-card-thumbnail ">
	                                                    <img :src="getPict(mapel.img)">
	                                                </div>
	                                                <div class="course-card-body">
	                                                    <div class="course-card-info">
	                                                        <div>
	                                                            <span class="catagroy">{{mapel.kelas}}</span>
	                                                        </div>
	                                                    </div>
	            	                                        <h4>{{mapel.nama_mapel}}</h4>
	                                                    <div class="course-card-footer">
	                                                        <h5> 
	                                                        	<i class="icon-feather-user"></i>
	                                                        	{{mapel.guru}}
	                                                        </h5>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </router-link>
	                                    </div>
	                             </div> 
	                    	</li>
	                    </ul>
	                </div>
	            </div>
            </div>
		</main>
		<Footer />
	</section>
</template>
<script type="text/javascript">
	import UserService from '@/services/user.service'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import Headline from '@/components/Headline'
	export default {
		name: 'Kelas',
		components: {
			Header,
			Headline,
			Footer
		},
		data() {
			return {
				mapels: [],
				kelas: 'XII MIPA 1'	
			}
		},
		methods: {
			getListMapel() {
				UserService.getMapel()
				.then(res => {
					res = JSON.parse(res)
					res.data.forEach((d, index) => {
						d.img = '6.png'
						d.url = `mapel/detail/${d.id_mapel}`
					})
					this.mapels = res.data
					console.log(this.mapels.length)

					return true
				})
				.catch(e => {
					this.$swal('Gagal saat mengambil data', '', 'error')
					console.error(e)
					return false
				}) 
			},
			getPict(imageName) {
				return require('./../../images/course/' + imageName)
			}
		},
		created() {
			this.getListMapel()
		}
	}
</script>