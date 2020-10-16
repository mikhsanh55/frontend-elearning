<template>
	<section>
		<Header />
		<div class="page-content">
			<br><br>
	        <div class="container">
	            <div class="mt-lg-5">
	                <div class="uk-width-expand@m">
	                    <div class="section-header mb-lg-3 align-items-center">
	                        <div class="section-header-left">
	                            <h4>Semua Materi</h4>
	                        </div>

	                        <div class="section-header-right">
	                            <select class="selectpicker ml-3">
	                                <option value="latest"> Terbaru </option>
	                                <option value="oldest">Terlama </option>
	                            </select>
	                        </div>
	                    </div>
	                    <div class="uk-child-width-1-4@m uk-child-width-1-2@s" uk-grid>
	                    	<!-- Card of Materi -->
	                         <div v-for="materi in materis">
	                         	<router-link :to="'/materi/' + kodeMapel + '/detail/' + materi.id">
	                                <div class="course-card">
	                                    <div class="course-card-thumbnail ">
	                                        <img :src="getPict(materi.img)">
	                                    </div>
	                                    <div class="course-card-body">
	                                        <div class="course-card-info">
	                                            <div>
	                                                <span class="mapel">{{materi.nama_mapel}}</span>
	                                            </div>
	                                        </div>
	                                        <h4>{{materi.title}}</h4>
	                                        <button to="/" class="btn btn-primary btn-sm">Detail</button>
	                                        <button @click.prevent="showFiles(materi.id, 'pdf')" class="btn btn-danger btn-sm">PPT</button>
	                                        <button @click.prevent="showFiles(materi.id, 'ppt')" class="btn btn-success btn-sm">PDF</button>
	                                        <div class="course-card-footer">
	                                            <!-- <h5> <i class="icon-feather-clock"></i> <span class="btn-small btn-success"> Aktif </span> {{materi.startDate + ' - ' + materi.endDate}} </h5> -->
	                                        </div>
	                                    </div>

	                                </div>
	                            </router-link>
	                        </div>
	                        <!-- End of Card Materi -->
	                    </div>

	                    <!-- Pagination -->
	                    <ul class="uk-pagination my-5 uk-flex-center" uk-margin>
	                          <li><a href="#"><i class="fas fa-check"></i></a></li>
	                        <li class="uk-active"><span>1</span></li>
	                        <li><a href="#">2</a></li>
	                        <li><a href="#">3</a></li>
	                        <li class="uk-disabled"><span>...</span></li>
	                        <li><a href="#"><span></span></a></li>
	                    </ul>
	                    <!-- End of pagination -->

	                </div>

	            </div>

	        </div>

	    </div>
	    <Footer />
	    <!-- Modal for Video -->
	    <b-modal title="Files" id="files-modal" hide-footer>
	    	<div v-html="filesModalContent"></div>
	    </b-modal>
	</section>
</template>
<script type="text/javascript">
	import Materi from '@/models/materi'
	import UserService from '@/services/user.service'
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import {BModal, VBModal} from 'bootstrap-vue'

	export default {
		name: 'Materi',
		data() {
			return {
				materis: [],
				kodeMapel: 0,
				filesModalContent: `<a class="text-primary" href="https://sites.google.com/site/kkgmgmpmatematika/1-SoalCeritaPenjumlahan.pdf" download>
					<i class="icon-line-awesome-file-pdf-o text-danger mr-2"></i><span>File Materi.pdf</span>
				</a>`
			}
		},
		components: {
			Header,
			Footer,
			'b-modal': BModal
		},
		methods: {
			getListMateri() {
				this.kodeMapel = this.$route.params.kode_mapel
				UserService.getMateriByMapel(this.kodeMapel)
				.then(res => {
					res = JSON.parse(res)
					this.materis = res.data
					this.materis.forEach((data, index) => {
						data.img = '7.png'
					})
				})
				.catch(e => {
					this.$swal('Gagal saat mengambil data', 'Hubungi tim support LMS', 'error')
					console.error(e)
					return false
				})
			},
			getPict(filePath) {
				return require('../../images/course/' + filePath)
			},
			showFiles(idMateri, type = 'pdf') {
				// Materi.getListFiles(idMateri, type)
				// .then(res => {
				// 	res.data.forEach((d, index) => {
				// 		this.filesModalContent += `<a href="#" download class="m-3 text-primary">
				// 			<i class="fas fa-pdf-o mr-2"></i><span>${d.file}</span>
				// 		</a>`
				// 	})
					
				// })
				// .catch(e => {
				// 	this.$swal('Tidak dapat mengunduh file', e.msg, 'error')
				// 	console.error(e)
				// 	return false
				// })

				this.$bvModal.show('files-modal')
			}
		},
		created() {
			this.getListMateri()
		}
	}
</script>