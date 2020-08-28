<template>
	<v-main>
		<v-container fill-height id="loading" justify="center">
			<v-row justify="center" align-content-center>
				<v-progress-circular indeterminate size="64" color="pink"></v-progress-circular>
			</v-row>
			<v-row justify="center" align-content-center>
				<div>{{preLoaderText}}</div>
			</v-row>
		</v-container>
	</v-main>
</template>
<script>
//import { mapState } from "vuex";
export default {
	name: 'PreLoader',
	props: {
		preLoaderText: {
			type: String,
			default: "Please wait while we fiddle with the data to make it useful for you."
		}
	},
	methods: {},
	computed: {},
}
</script>
<style scoped>
*{
	margin: 0px;
	padding: 0px;
}
#loading{
	z-index: 99999 !important;
	margin-top: 5rem;
}
</style>