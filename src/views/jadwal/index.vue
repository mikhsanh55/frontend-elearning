<template>
	<section>
		<Header />
		<main>
		<Headline />
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
                    		 <div class="uk-child-width-2-3@s m-4">
                    		 	<!-- Render Calendar -->
                    		 	<button @click="toggleWeekends" class="btn btn-primary mb-2 mt-2">Toggle Weekends</button>
                    		 	<div class="p-4" style="background-color: #fff;">
                    		 		<FullCalendar :options="calenderOptions" />
                    		 	</div>
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
	import Headline from '@/components/Headline';
	import Footer from '@/components/Footer';

	export default {
		name: 'Jadwal',
		components: {
			FullCalendar,
			Headline,
			Header,
			Footer
		},
		data() {
			return {
				calenderOptions: {
					plugins: [ dayGridPlugin, interactionPlugin ],
			        initialView: 'dayGridMonth',
			        weekends: false // initial value
				}
			}
		},
		methods: {
			toggleWeekends() {
				this.calenderOptions.weekends = !this.calenderOptions.weekends;
			}
		}
	}
</script>