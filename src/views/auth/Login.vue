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
                        <img src="../../images/logo/SMAN_5_Bandung.png" width="70" height="70" class="mb-4">
                        <h3 class="mb-0"> Selamat Datang </h3>
                        <p class="my-2">LMS SMAN 5 BANDUNG</p>
                    </div>
                    <form @submit.prevent="handleLogin">
                        <div class="form-group">
                            <div v-if="message" class="alert alert-danger" role="alert">
                                {{message}}
                            </div>
                        </div>    
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
                                    v-model="user.email"
                                    name="username"
                                    :class="{ 'is-invalid': hasError.email }"
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

                        <div class="mt-4 form-group" >
                            <div class="uk-width-auto@s">
                               <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                                   <span>{{loadingLabel}}</span>
                               </button>
                               <router-link to="/forgot-password" class="btn btn-warning btn-block">
                                   LUPA PASSWORD
                               </router-link>
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
	import User from '@/models/user'
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
                    email: false,
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
            },
            getUserInfo() {
                return this.$store.getters.getUserInfo
            }
        },
        created() {
            if(this.loggedIn) {
                this.$router.push('/kelas')
            }
        },
        methods: {
            errorLogin(e) {
                this.loading = false
                this.loadingLabel = 'LOGIN'
                if(e.response) {
                    console.error(e.response);
                    for(var key in e.response.data) {
                        this.message += '' + e.response.data[key]
                    }

                    this.$swal(this.message, '', 'warn')
                    setTimeout(() => {
                        this.$swal.close()
                        this.message = ''
                    }, 1500)
                    return false
                }
                else {
                    this.$swal('Login gagal', '', 'error')
                    console.error(e)
                    setTimeout(() => {
                        this.$swal.close()
                    }, 3000)

                    return false
                }
            },
            passedLogin(res) {
                this.loading = false
                this.loadingLabel = 'LOGIN'
                this.$swal('Selamat Datang di E-Learning', 'Belajar jadi mudah', 'success')

                setTimeout(() => {
                    this.$swal.close()
                    this.$router.push('/kelas')
                }, 1500)
                return true
            },
            handleLogin() {
                this.loading = 'disabled'
                this.loadingLabel = 'Loading...'

                if(this.user.email && this.user.password) {
                    this.$store.dispatch('auth/login', this.user)
                    .then(res => this.passedLogin(res))
                    .catch(e => this.errorLogin(e))
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