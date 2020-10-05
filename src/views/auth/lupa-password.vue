<template>
	<section>
		                
	<div class="uk-flex uk-flex-middle uk-height-viewport bg-sman5">
        <div class="uk-width-2-3@m uk-width-1-2@s m-auto rounded">
            <div class="uk-child-width-1-2@m uk-grid-collapse  uk-grid" id="login-logo" >

                <!-- column one -->
                <div class="uk-margin-auto-vertical uk-text-center uk-animation-scale-up ">
                   
                </div>

                <!-- column two -->
                <div class="uk-card-default p-5 rounded">
                    <div class="mb-4 uk-text-center">
                        <h3 class="mb-0"> Lupa Password </h3>
                        <p class="my-2">LMS SMAN 5 Bandung.</p>
                    </div>
                    <form @submit.prevent="sendLinkReset">

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Email</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input 
                                    class="uk-input" 
                                    type="email" 
                                    placeholder="email"
                                    v-model="email"
                                    name="username"
                                    :class="{ 'is-invalid': hasError.email }"
                                    required
                                    autocomplete
                                >
                            </div>

                        </div>

                        <div class="form-group mt-4">
                            <div class="uk-width-auto@s">
                               <button type="submit" class="btn btn-primary btn-block" :disabled="loading">	
                                   <span>{{loadingLabel}}</span>
                               </button>
                               <router-link to="/login" class="btn btn-warning btn-block">
                               KEMBALI LOGIN
                               </router-link>
                            </div>
                        </div>
                        <div class="form-group">
                            <div v-if="message" class="alert alert-danger" role="alert">
                                {{message}}
                            </div>
                        </div>

                    </form>
                </div><!--  End column two -->

            </div>
        </div>
    </div>
    <Footer />
	</section>
</template>
<script type="text/javascript">
	export default {
		name: 'ForgotPassword',
		data() {
			return {
				loadingLabel: 'KIRIM PASSWORD',
				message: false,
				email: null,
				hasError: {
					email: null
				},
				loading: false
			}
		},
		methods: {
			sendLinkReset() {
				this.loading = 'disabled'
				this.loadingLabel = 'Loading...'
			}
		}
	}
</script>