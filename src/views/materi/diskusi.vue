<template>
	<section>
		<br><br><br>
		<Header />

		<div class="container diskusi-wrapper">
			<div class="row">
				<div class="col-md-2">
					<h2>Diskusi</h2>
				</div>
				<div class="col-md" style="background-color: #fff" id="chat-wrapper">
					<br>
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
					
					<br>
				</div>
			</div>
			<section>
						<input type="text" name="msg" placeholder="ketikan sesuatu..." class="form-control">
					</section>
			
		</div>

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
		}
		
	}
</script>
<style type="text/css" scoped>
	.diskusi-wrapper {
		height:500px;
		overflow-y: auto;
	}
	#chat-wrapper {
		height:500px;
		overflow-y: scroll;
	}
</style>