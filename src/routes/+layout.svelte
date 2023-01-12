<script>
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;

	import '../app.css';
</script>

<Header header={data.header} />
<Sidebar />
<slot />
<Footer />
