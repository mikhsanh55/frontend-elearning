<template>
	<section>
		<Header />
		<main>
		<!-- Profile -->
		<div class="course-details-wrapper topic-1 uk-light mt-4">
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
        <!-- List Calendar -->
        <div class="container">
            <div class="uk-grid-large mt-4 uk-grid" >
                <div class="uk-width-2-3@m">
                    <ul id="course-intro-tab" class="uk-switcher mt-4">
                    	<li></li>
                    	<li>
                    		<div class="section-header">
                                <div class="section-header-left">
                                    <h4> Semua Jadwal </h4>
                                </div>
                                <div class="section-header-right">
                                    <a href="#" class="see-all"> Lihat Semua</a>
                                </div>
                            </div>
                    		 <div class="uk-child-width-2-3@s">
                    		 	<!-- Render Calendar -->
                    		 	<button @click="toggleWeekends" class="btn btn-primary mb-2 mt-2">Toggle Weekends</button>
                    		 	<FullCalendar :options="calenderOptions" />
                             </div>
                    	</li>
                    </ul>
                </div>
            </div>
        </div>
        </main>
		<Footer />
	</section>	
</template>
<script type="text/javascript">
	import FullCalendar from '@fullcalendar/vue';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import interactionPlugin from '@fullcalendar/interaction';
	import Header from '@/components/Header';
	import Footer from '@/components/Footer';

	export default {
		name: 'Jadwal',
		components: {
			FullCalendar,
			Header,
			Footer
		},
		data() {
			return {
				calenderOptions: {
					plugins: [ dayGridPlugin, interactionPlugin ],
			        initialView: 'dayGridMonth',
			        weekends: false // initial value
				},
				siswa: {},
				menu: []
			}
		},
		methods: {
			getData() {
				this.siswa.name = "Ikhsan Hamidan";
				this.siswa.kelas = "XII MIPA 1";
				this.siswa.waliKelas = "Hamidan S.Kom, M.Kom";
			},
			getMenu() {
				this.menu = [
					{label: 'Kelas', "class": ''},
					{label: 'Jadwal', "class": 'uk-active'},
					{label: 'Ujian', "class": ''},
					{label: 'Nilai', "class": ''},
					{label: 'Penilaian Guru', "class": ''},
				];
			},
			toggleWeekends() {
				this.calenderOptions.weekends = !this.calenderOptions.weekends;
			}
		},
		created() {
			this.getData();
			this.getMenu();
		}
	}
</script>