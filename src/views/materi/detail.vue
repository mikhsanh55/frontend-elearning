<template>
	<section>
		<Header />
		<br><br>		
		<div class="page-content">
	        <div class="container">
	            <div class="mt-lg-5">
	                <div class="card">
	                    <div class="section-header mb-lg-3 align-items-center card-header">
	                        <div class="section-header-left">
	                            <h1>Materi : {{data.name}}</h1>
	                            <p class="text-secondary mt-4 time-akses">
	                            	Estimasi waktu akses : <strong>{{data.startDate}} - {{data.endDate}}</strong>
	                            </p>
	                        </div>
	                    </div>
	                    <div class="card-body">
	                    	<section class="row">
	              				<div class="col-sm-12 col-md-8">
	              					<h6>Deskripsi :</h6>
	              					<p class="container materi-deskripsi">
	              						{{data.deskripsi}}
	              					</p>
	              				</div>
	              				<div class="col-sm-12 col-md-3 offset-md-1 text-center">
	              					<h6>Lampiran File</h6>
	              					<table class=" table table-borderless">
	              						<tr>
	              							<td>
	              								<a href="#" class="btn btn-block btn-secondary btn-sm" download>File PDF</a>	
	              							</td>
	              						</tr>
	              						<tr>
	              							<td>
	              								<a href="#" class="btn btn-block btn-secondary btn-sm" download>File PPT</a>	
	              							</td>
	              						</tr>
	              						<tr>
	              							<td>
	              								<button @click="viewVideo()" class="btn btn-block btn-primary btn-sm">View Video</button>	
	              							</td>
	              						</tr>
	              						<tr>
	              							<td>
	              								<router-link to="/materi/192j9s128us/diskusi/192j9s128us" class="btn btn-block btn-info btn-sm">Forum Chat</router-link>	
	              							</td>
	              						</tr>
	              					</table>
	              				</div>
	                    	</section>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>

	    <!-- Modal for Video -->
	    <b-modal title="Video" id="video-modal">
	    	<div class="embed-responsive embed-responsive-16by9 mb-3">
				<iframe class="mb-4" :src="data.video" style="position:absolute;top:0;left:0;width:100%;height:100%;" allowFullScreen></iframe>  
			</div>
			<div class="embed-responsive embed-responsive-16by9 mb-3">
				<iframe class="mb-4" :src="data.video" style="position:absolute;top:0;left:0;width:100%;height:100%;" allowFullScreen></iframe>  
			</div>
	    </b-modal>
	    <Footer />
	</section>
</template>
<script type="text/javascript">
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import {BModal, VBModal} from 'bootstrap-vue'

	export default {
		name: 'DetailMateri',
		data() {
			return {
				idMapel: null,
				data: {}
			}
		},
		components: {
			Header,
			Footer,
			'b-modal': BModal
		},
		methods: {
			viewVideo() {
				this.$bvModal.show('video-modal')
			},
			getDetail() {
				this.data = {
					id: this.idMapel,
					name: 'Materi Simbiosis Mutualisme',
					video: 'https://www.youtube.com/embed/_2_C9j-8CtM',
					pdf: '',
					ppt: '',
					deskripsi: `What is Lorem Ipsum?
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						Why do we use it?`,
					startDate: '2020-06-06 12:00:00',
					endDate: '2020-06-13 17:00:00'
				}
			}
		},
		created() {
			this.getDetail()
		}
	}
</script>