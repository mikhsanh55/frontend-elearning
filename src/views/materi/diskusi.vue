<template>
	<section>
		<br><br><br>
		<Header />

		<div class="container ">
			<div class="row">
				<!-- Column info diskusi -->
			</div>
			<div class="row diskusi-wrapper">
				<div class="col-md-3 mr-4">
					<h2 class="p-2">Diskusi</h2>
					<table class="table table-borderless p-0">
						<tr>
							<th>Mata Pelajaran:</th>
							<td>Matematika</td>
						</tr>
						<tr>
							<th>Materi:</th>
							<td>Membumikan Matematika</td>
						</tr>
					</table>
				</div>
				<div class="col-md" style="background-color: #fff;border:1px solid #ddd;">
					<br>
					<!-- Chat Wrapper -->
					<section id="chat-wrapper">
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Assalamualaikum." :img="'avatar-4.jpg'" imgOrder="order: 1">
							</chat>
						</div>
						<div class="d-flex justify-content-start container mb-4">
							<chat class="text-left text-light" bgColor="bg-sman5 justify-content-start" msg="Waalaiumsallam, maaf untuk sekarang diskusinya belum mulai jadi meding gak usah chat yah" :img="'avatar-1.jpg'" imgOrder="order: 0" >
							</chat>
						</div>
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Waalaikumsallam, naon eta jol jol kitu ?!." :img="'avatar-2.jpg'" imgOrder="order: 1">
							</chat>
						</div>		
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Assalamualaikum." :img="'avatar-4.jpg'" imgOrder="order: 1">
							</chat>
						</div>
						<div class="d-flex justify-content-start container mb-4">
							<chat class="text-left text-light" bgColor="bg-sman5 justify-content-start" msg="Waalaiumsallam, maaf untuk sekarang diskusinya belum mulai jadi meding gak usah chat yah" :img="'avatar-1.jpg'" imgOrder="order: 0" >
							</chat>
						</div>
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Waalaikumsallam, naon eta jol jol kitu ?!." :img="'avatar-2.jpg'" imgOrder="order: 1">
							</chat>
						</div>		
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Assalamualaikum." :img="'avatar-4.jpg'" imgOrder="order: 1">
							</chat>
						</div>
						<div class="d-flex justify-content-start container mb-4">
							<chat class="text-left text-light" bgColor="bg-sman5 justify-content-start" msg="Waalaiumsallam, maaf untuk sekarang diskusinya belum mulai jadi meding gak usah chat yah" :img="'avatar-1.jpg'" imgOrder="order: 0" >
							</chat>
						</div>
						<div class="d-flex justify-content-end container mb-4">
							<chat class="text-left" bgColor="bg-light justify-content-end" msg="Waalaikumsallam, naon eta jol jol kitu ?!." :img="'avatar-2.jpg'" imgOrder="order: 1">
							</chat>
						</div>		
					</section>
					<br>

					<!-- Chat input section -->
					<form id="chat-form" @submit.prevent="sendMsg">
					<section class="chat-section row align-items-center pb-4 pt-4 bg-secondary" style="border:1px solid #ddd;">
						<div class="col-1 file-section">
							<a href="#" class="attach-file text-secondary" @click.prevent="attachFile" >
								<i :class="fileIcon"></i>
							</a>
							<input type="file" @change="checkFile" name="attach-file" class="d-none attach-file-input" ref="attach-file-input">
						</div>
						<div class="col-10 msg-section">
							<input type="text" name="msg" class="form-control m-0 text-msg" placeholder="Ketikan sesuatu...">
							<a href="#" @click.prevent="attachFile" class="attach-file text-secondary attach-file-mobile">
								<i :class="fileIcon"></i>
							</a>
						</div>
						<div class="col-1 send-msg-section">
							<button class="btn btn-primary btn-sm" type="submit" style="cursor: pointer;" :disabled="loadingSend">
								<i class="icon-line-awesome-paper-plane" style="font-size:170%"></i>
							</button>
						</div>
					</section>
					</form>
				</div>
			</div> 
			<!-- End row -->
			
		</div>
		<br><br><br><br>
		<Footer />
	</section>
</template>
<script type="text/javascript">
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	import Chatbox from '@/components/Chatbox'

	export default {
		name: 'DiskusiMateri',
		components: {
			Header,
			Footer,
			chat: Chatbox
		},
		data() {
			return {
				fileIcon: 'uil-paperclip',
				loadingSend: false
			}
		},
		methods: {
			attachFile() {
				this.$refs['attach-file-input']	.click();
			},
			checkFile() {
				this.fileIcon = 'icon-feather-check text-primary'
			},
			sendMsg() {
				// Add attr disabled button
				this.loadingSend = true
				setTimeout(() => this.loadingSend = false, 1000)
			}
		}
	}
</script>
<style type="text/css" scoped>
	.diskusi-wrapper {
		height:500px;
	}
	#chat-wrapper {
		height:500px;
		overflow-y: scroll;
	}
	.attach-file {
		font-size: 180%;
		padding: 5px;
		border-radius: 50%;
	}
	.text-msg:focus {
		box-shadow: 0 0 5px 1px #1e824c;
	}
	
	/*Medium devices (tablets, 768px and up)*/
	@media (min-width: 580px) {
		.attach-file-mobile {
			display: none;
		}
	}

	@media (max-width: 576px) { 
		.file-section {
			display: none;
		}
		.send-msg-section {
			padding-left: 0;
		}
		.msg-section {
			position: relative;
		}
		.attach-file-mobile {
			font-size: 130%;
			position: absolute;
			right: 20px;
			top:2px;
		}
	}
</style>