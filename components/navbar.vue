<template>
	<nav class="navbar navbar-inverse bg-inverse navbar-toggleable-md">
		<div class="container mx-md-auto mx-0">
			<button class="navbar-toggler navbar-toggler right">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-header">
				<a href="/" class="navbar-brand">Lemonce</a>
			</div>
			<div id="nav-content" class="collapse navbar-collapse">
				<ul class="navbar-nav">
					<li class="nav-item"
						v-for="(item, index) in items"
						:key="index">
						<a :href="item.href" class="nav-link">
							{{item.title}}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'navbar',
	data() {
		return {
			items: [
				{
					href: '/',
					title: 'home'
				}
			]
		};
	}
}
</script>
