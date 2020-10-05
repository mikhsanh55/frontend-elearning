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
	                                                            <span class="catagroy">{{kelas}}</span>
	                                                        </div>
	                                                    </div>
	            	                                        <h4>{{mapel.name}}</h4>
	            	                                        <p>{{mapel.keterangan}}</p>
	                                                    <div class="course-card-footer">
	                                                        <h5> 
	                                                        	<i class="icon-feather-user"></i>
	                                                        	{{mapel.nama_guru}}
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
				this.mapels = [
					{url: '/materi/192j9s128us', img: '1.png', name: 'Pendidikan Islam', keterangan: '', nama_guru: 'Heri Suherman S.Pd'},
					{url: '/materi/192j9s128us', img: '2.png', name: 'Bahasa Indonesia', keterangan: '', nama_guru: 'Adil Teguh S.Pd'},
					{url: '/materi/192j9s128us', img: '3.png', name: 'Bahasa Inggris', keterangan: '', nama_guru: 'Adil Teguh S.Pd'},
					{url: '/materi/192j9s128us', img: '4.png', name: 'Matematika', keterangan: '', nama_guru: 'Heri Suherman S.Pd'},
					{url: '/materi/192j9s128us', img: '5.png', name: 'Fisika', keterangan: '', nama_guru: 'Adil Teguh S.Pd'},
					{url: '/materi/192j9s128us', img: '6.png', name: 'Kimia', keterangan: '', nama_guru: 'Heri Suherman S.Pd'},
					{url: '/materi/192j9s128us', img: '7.png', name: 'Biologi', keterangan: '', nama_guru: 'Adil Teguh S.Pd'},
					{url: '/materi/192j9s128us', img: '8.png', name: 'Seni Budaya', keterangan: '', nama_guru: 'Heri Suherman S.Pd'},
				]
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