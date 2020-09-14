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
	                                                <span class="mapel">{{materi.mapel}}</span>
	                                            </div>
	                                        </div>
	                                        <h4>{{materi.name}}</h4>
	                                        <span class="btn btn-primary btn-sm">Detail</span>
	                                        <span class="btn btn-danger btn-sm">PPT</span>
	                                        <span class="btn btn-success btn-sm">PDF</span>
	                                         <p class="text-secondary">{{materi.guru}}</p>
	                                        <div class="course-card-footer">
	                                            <h5> <i class="icon-feather-clock"></i> <span class="btn-small btn-success"> Aktif </span> {{materi.startDate + ' - ' + materi.endDate}} </h5>
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
	</section>
</template>
<script type="text/javascript">
	import Header from '@/components/Header'
	export default {
		name: 'Materi',
		data() {
			return {
				materis: [],
				kodeMapel: 0
			}
		},
		components: {
			Header
		},
		methods: {
			getListMateri() {
				this.kodeMapel = this.$route.params.kode_mapel
				this.materis = [
					{id: '192w21sk', id_mapel: 23, mapel: 'Biologi', name: 'Simbiosis Mutualisme', guru: 'Hendrawan S.Pd', startDate: '25-06-06', endDate: '27-06-06', img: 'p-1.png'},
					{id: '192w21sk', id_mapel: 23, mapel: 'Biologi', name: 'Simbiosis Parasitisme', guru: 'Hendrawan S.Pd', startDate: '28-06-06', endDate: '30-06-06', img: 'p-2.png'},
					{id: '192w21sk', id_mapel: 23, mapel: 'Biologi', name: 'Simbiosis Komensalisme', guru: 'Hendrawan S.Pd', startDate: '01-07-06', endDate: '03-07-06', img: 'p-3.png'},
					{id: '192w21sk', id_mapel: 23, mapel: 'Biologi', name: 'Simbiosis Parasitisme', guru: 'Hendrawan S.Pd', startDate: '28-06-06', endDate: '30-06-06', img: 'p-2.png'},
					{id: '192w21sk', id_mapel: 23, mapel: 'Biologi', name: 'Simbiosis Komensalisme', guru: 'Hendrawan S.Pd', startDate: '01-07-06', endDate: '03-07-06', img: 'p-3.png'}
				]
			},
			getPict(filePath) {
				return require('../../images/course/' + filePath)
			}
		},
		created() {
			this.getListMateri()
		}
	}
</script>