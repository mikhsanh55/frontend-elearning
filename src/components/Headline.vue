<template>
	<section>
		<!-- Profile -->
		<div class="course-details-wrapper topic-1 uk-light mt-4 bg-sman5">
			<br>
            <div class="container p-sm-0">
                <div uk-grid>
                    <div class="uk-width-2-3@m">
                        <div class="course-details">
                            <h1>LMS  SMAN 5 Bandung</h1>
                            <p>
                                Nama    : {{siswa.name}} <br>
                                Kelas   : {{siswa.kelas}}
                            </p>
                            <div class="course-details-info">
                                <ul>
                                    <li> Wali Kelas <a href="#"> {{siswa.waliKelas}}  </a> </li>
                                </ul>
                            </div>
                        </div>
                        <nav class="responsive-tab style-5">
                        	<!-- List Menu -->
                            <ul
                                uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                                <li v-for="m in menu" :class="m.class">
                                	<router-link :to="'#' + m.label"> {{m.label}} </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>
<script type="text/javascript">
	export default {
		name: 'Headline',
		data() {
			return {
				siswa: {},
				menu: []
			}
		},
		computed: {
			getMenu() {
				return this.$store.getters.getNavMenu
			}
		},
		created() {
			this.siswa.name = "Ikhsan Hamidan"
			this.siswa.kelas = "XII MIPA 1"
			this.siswa.waliKelas = "Hamidan S.Kom, M.Kom"

			this.menu = [
				{label: 'Kelas', "class": ''},
				{label: 'Jadwal', "class": ''},
				{label: 'Ujian', "class": ''},
				{label: 'Nilai', "class": ''},
				{label: 'Penilaian Guru', "class": ''},
			]
		}
	}
</script>