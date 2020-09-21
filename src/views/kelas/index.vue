<template>
	<section>
		<Header />
		<main>

			<!-- Profile -->
			<div class="course-details-wrapper topic-1 uk-light mt-4">
				<br>
	            <div class="container p-sm-0">
	                <div uk-grid>
	                    <div class="uk-width-2-3@m">
	                        <div class="course-details">
	                            <h1>LMS  SMAN 5 Bandung</h1>
	                            <p>
	                                Nama    : {{siswa.name}} <br>
	                                Kelas   : {{siswa.kelas}}
	                            </p>
	                            <div class="course-details-info">
	                                <ul>
	                                    <li> Wali Kelas <a href="#"> {{siswa.waliKelas}}  </a> </li>
	                                </ul>
	                            </div>
	                        </div>
	                        <nav class="responsive-tab style-5">
	                        	<!-- List Menu -->
	                            <ul
	                                uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
	                                <li v-for="m in menu">
	                                	<router-link :to="'#' + m"> {{m}} </router-link>
	                                </li>
	                            </ul>
	                        </nav>
	                    </div>
	                </div>
	            </div>
	        </div>

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
	                                                            <span class="catagroy">{{siswa.kelas}}</span>
	                                                        </div>
	                                                    </div>
	            	                                        <h4>{{mapel.name}}</h4>
	            	                                        <p>{{mapel.keterangan}}</p>
	                                                    <div class="course-card-footer">
	                                                        <h5> 
	                                                        	<i class="icon-feather-clock"></i>
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
	export default {
		name: 'Kelas',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				siswa: {},
				menu: [],
				mapels: []	
			}
		},
		methods: {
			getData() {
				this.siswa.name = "Ikhsan Hamidan"
				this.siswa.kelas = "XII MIPA 1"
				this.siswa.waliKelas = "Hamidan S.Kom, M.Kom"
			},
			getMenu() {
				this.menu = ['Kelas', 'Jadwal', 'Tugas', 'Ujian', 'Nilai', 'Penilaian Guru']
			},
			getListMapel() {
				this.mapels = [
					{url: '/materi/192j9s128us', img: '1.png', name: 'Pendidikan Islam', keterangan: ''},
					{url: '/materi/192j9s128us', img: '2.png', name: 'Bahasa Indonesia', keterangan: ''},
					{url: '/materi/192j9s128us', img: '3.png', name: 'Bahasa Inggris', keterangan: ''},
					{url: '/materi/192j9s128us', img: '4.png', name: 'Matematika', keterangan: ''},
					{url: '/materi/192j9s128us', img: '5.png', name: 'Fisika', keterangan: ''},
					{url: '/materi/192j9s128us', img: '6.png', name: 'Kimia', keterangan: ''},
					{url: '/materi/192j9s128us', img: '7.png', name: 'Biologi', keterangan: ''},
					{url: '/materi/192j9s128us', img: '8.png', name: 'Seni Budaya', keterangan: ''},
				]
			},
			getPict(imageName) {
				return require('./../../images/course/' + imageName)
			}
		},
		created() {
			this.getData()
			this.getMenu()
			this.getListMapel()
			console.warn(localStorage.getItem('user'))
		}
	}
</script>