<script>
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';
	export let data;
	import '../app.css';
</script>

<Header header_menu={data.header_menu} header_logo={data.header_logo} />
<Sidebar />
<slot />
<Footer />
