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
                    <form @submit.prevent="handleLogin">

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Username</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-mail"></i>
                                </span>
                                <input 
                                    class="uk-input" 
                                    type="text" 
                                    placeholder="username"
                                    v-model="user.username"
                                    name="username"
                                    :class="{ 'is-invalid': hasError.username }"
                                    required
                                    autocomplete
                                >
                            </div>

                        </div>

                        <div class="uk-form-group">
                            <label class="uk-form-label"> Password</label>

                            <div class="uk-position-relative w-100">
                                <span class="uk-form-icon">
                                    <i class="icon-feather-lock"></i>
                                </span>
                                <input class="uk-input" type="password" placeholder="password"
                                    v-model="user.password"
                                    name="password"
                                    required
                                    :class="{ 'is-invalid': hasError.password }"
                                >
                            </div>

                        </div>

                        <div class="mt-4 uk-flex-middle uk-grid-small uk-grid" >
                            <div class="uk-width-auto@s">
                               <button type="submit" class="btn btn-success" :disabled="loading">
                                   <span>{{loadingLabel}}</span>
                               </button>
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
	import User from '../../models/User'
    import Footer from '@/components/Footer'

	export default {
		name : 'Login',
        data() {
            return {
                user: new User(null, null),
                loading: false,
                loadingLabel: 'LOGIN',
                message: false,
                hasError: {
                    username: false,
                    password: false
                }
            }
        },
        components: {
            Footer
        },
        computed: {
            loggedIn() {
                return this.$store.getters.getStatusLogin
            }
        },
        created() {
            if(this.loggedIn) {
                this.$router.push('/kelas')
            }
        },
        methods: {
            handleLogin() {
                this.loading = 'disabled'
                this.loadingLabel = 'Loading...'

                if(this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user)
                    .then(() => {
                        this.loading = false
                        this.loadingLabel = 'LOGIN'
                        this.$swal('Selamat Datang di E-Learning', 'Belajar jadi mudah', 'success')

                        setTimeout(() => {
                            this.$swal.close()
                            this.$router.push('/kelas')
                        }, 1500)
                    })
                    .catch(e => {
                        this.loading = false
                        this.loadingLabel = 'LOGIN'
                        console.error(e)
                        this.$swal('Login gagal', '', 'error')
                        setTimeout(() => {
                            this.$swal.close()
                        }, 3000)
                        return false
                    })
                }
            }
        }
	}
</script>
<style type="text/css" scoped>
	#login-logo {
		background-image: url(./../../images/page.png);
	}
</style>