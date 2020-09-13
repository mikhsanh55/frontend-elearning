<template>
	<section>
	
                
	<div class="uk-flex uk-flex-middle uk-height-viewport ">
        <div class="uk-width-2-3@m uk-width-1-2@s m-auto rounded">
            <div class="uk-child-width-1-2@m uk-grid-collapse  uk-grid" id="login-logo" >

                <!-- column one -->
                <div class="uk-margin-auto-vertical uk-text-center uk-animation-scale-up ">
                   
                </div>

                <!-- column two -->
                <div class="uk-card-default p-5 rounded">
                    <div class="mb-4 uk-text-center">
                        <h3 class="mb-0"> Selamat Datang </h3>
                        <p class="my-2">LMS SMAN 5 Bandung.</p>
                    </div>
                    <form>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Username</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input class="uk-input" type="email" placeholder="">
                            </div>

                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" placeholder="">
                            </div>

                        </div>

                        <div class="mt-4 uk-flex-middle uk-grid-small uk-grid" >
                            <div class="uk-width-auto@s">
                               <a href="home.html" class="btn btn-success">LOGIN</a>
                            </div>
                        </div>

                    </form>
                </div><!--  End column two -->

            </div>
        </div>
    </div>

	</section>
</template>


<script type="text/javascript">
	
	export default {
		name : 'Login'
	}
</script>


<style type="text/css" scoped>
	#login-logo {
		background-image: url(./../images/page.png);
	}
</style>