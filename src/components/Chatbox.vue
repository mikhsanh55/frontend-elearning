<template>
	<section :class="bgColor" id="chat-container" class="d-flex justify-content-end">
		<div class="image-section p-2" :style="imgOrder">
			<img :src="getPict(img)" class="img-rounded" >
		</div>
		<div class="msg-section p-2">
			<p class="p-2" id="msg">{{msg}}</p>
		</div>
	</section>
</template>
<script type="text/javascript">
	export default {
		name: 'Chatbox',
		props: ['bgColor', 'msg', 'img', 'imgOrder'],
		methods: {
			getPict(imgPath) {
				return require('./../images/avatars/' +imgPath)
			}
		}
	}
</script>
<style type="text/css" scoped>
	#chat-container {
		border-radius: 5px;
		flex-flow: row wrap;
	}
	.img-rounded {
		border-radius:50%;
	}
	.image-section img {
		width: 50px;
		height:50px;
		flex-grow: 4;
	}
	#msg {
		font-size: 12px;
	}
	.bg-white {
		background-color: #fff;
	}
	.other-chat {
		order:4;
	}
	.my-chat {
		order:1;
	}
</style>