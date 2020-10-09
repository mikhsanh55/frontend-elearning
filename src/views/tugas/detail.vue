<template>
	<section>
		<br><br><br>
		<lms-header />
		<div class="container">
			<div class="row p-4" style="background-color: #fff;">
				<div class="col-sm-12">
					<h2>{{tugas.name}}</h2>
					<div class="date-section mt-4 mb-4" style="border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;">
						<table class="table table-borderless">
							<tr>
								<td>Tanggal Tugas <strong>{{ getFullDate }}</strong></td>
								<th v-html="tugas.status">
								</th>
							</tr>
						</table>
					</div>
					<div class="ket-section mt-2">
						<h2><i class="mr-2 icon-line-awesome-warning"></i> Keterangan</h2>
						<p>{{tugas.keterangan}}</p>
					</div>
					<br>
					<div class="task-section mt-2">
						<form @submit.prevent="postData">
							<div class="form-group">
								<textarea class="form-control" rows="6" cols="30"></textarea>	
							</div>
							<div class="form-group">
								<a href="#" class="btn btn-dark" @click.prevent="attachFile" id="attach-file-tugas">Pilih File</a>
								<span id="file-name" v-if="fileName != null" v-html="fileName"></span>
								<input type="file" ref="input-file" name="attach-file-tugas-hidden" @change="setFileName" class="d-none">
							</div>
							<button class="btn btn-primary btn-block" type="submit" style="cursor: pointer;" :disabled="sendLoading">
								Upload
							</button>
						</form>
					</div>
				</div>		
			</div>
		</div>
		<lms-footer />
	</section>
</template>
<script type="text/javascript">
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'

	export default {
		name: 'DetailTugas',
		components: {
			'lms-header': Header,
			'lms-footer': Footer
		},
		data() {
			return {
				tugas: {},
				sendLoading: false, // for disaled button when post data
				fileName: null, // label for file
			}
		},
		computed: {
			getFullDate() {
				return `${this.tugas.startDate} - ${this.tugas.endDate}`
			}
		},
		methods: {
			attachFile() {
				this.$refs['input-file'].click();
			},
			setFileName() {
				this.fileName = `<span class="text-dark">${this.$refs['input-file'].files[0]['name']}</span>`
			},
			getDetailTugas() {
				this.tugas.name = 'Tugas Fisika Pra Ujian'
				this.tugas.id = 'ddwa9d9awid0'
				this.tugas.endDate = '10 Jul 2020'
				this.tugas.startDate = '13 Jul 2020'
				this.tugas.keterangan = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
				this.tugas.status = 1 ? '<span>Tugas </span><span class="text-color bg-submitted">Sudah Mengerjakan</span>' : '<span>Tugas </span><span class="text-danger bg-submitted">Belum Mengerjakan</span>'
			},
			postData() {
				this.sendLoading = true
				setTimeout(() => this.sendLoading = false, 1500)
			}
		},
		created() {
			this.getDetailTugas()
		}
	}
</script>