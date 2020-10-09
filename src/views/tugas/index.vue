<template>
	<section>
		<br><br><br>
		<lms-header />
		<div class="container card">
			<table class="table table-borderless">
				<thead>
					<tr>
						<tr>#</tr>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(t, index) in tugas" :key="index">
						<td>
							{{index+1}}
						</td>
						<td class="font-weight-bold">
							<router-link :to="'/tugas/detail/' + t.id" class="text-color link-tugas">
								{{t.name}}
							</router-link>
						</td>
						<td class="font-weight-bold text-secondary">
							{{t.endDate}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<lms-footer />
	</section>
</template>
<script type="text/javascript">
	// View Tugas untuk siswa
	import Header from '@/components/Header'
	import Footer from '@/components/Footer'
	export default {
		name: 'Tugas',
		data() {
			return {
				tugas: []
			}
		},
		components: {
			'lms-header': Header,
			'lms-footer': Footer
		},
		methods: {
			getTugas() {
				this.tugas = [
					{id: 'diwaduwd8uwd8wu8', name: 'Tugas Fisika pra ujian 1', endDate: '24 Jun 2020'},
					{id: 'diwaduwd8uwd8wu8', name: 'Tugas B.Indonesia pra ujian 1', endDate: '09 Mar 2020'},
					{id: 'diwaduwd8uwd8wu8', name: 'Tugas MTK pra ujian 1', endDate: '24 Jun 2020'},
					{id: 'diwaduwd8uwd8wu8', name: 'Tugas Bikin Mie Instan', endDate: '12 Agu 2020'},
				]
			}
		},
		created() {
			this.getTugas()
		}
	}
</script>
<style type="text/css" scoped>
	.link-tugas:hover {
		color: #333 !important;
	}
</style>