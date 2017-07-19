<template>
	<div>
		<navbar></navbar>
		<nuxt/>
		<footer-view></footer-view>
	</div>
</template>

<script>
import Navbar from '~components/navbar.vue';
import FooterView from '~components/footer-view.vue';

export default {
	name: 'layout',
	components: {Navbar, FooterView}
}
</script>
