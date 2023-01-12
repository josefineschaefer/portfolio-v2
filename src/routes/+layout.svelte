<script>
	import Header from '../components/Header.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';
</script>

<Header />
<Sidebar />
<slot />
<Footer />
