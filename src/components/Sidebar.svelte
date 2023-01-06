<ul
	class="fixed flex flex-col bottom-0 left-4 z-10 bg-[#e8e6df] space-y-20 align-items items-center"
>
	<li>
		<a href="https://twitter.com/JsfnSchfr"><img src="icons/Twitter.png" alt="Twitter Logo" /></a>
	</li>
	<li>
		<a href="https://github.com/josefineschaefer"
			><img src="icons/Github.png" alt="Github Logo" /></a
		>
	</li>
	<li>
		<a href="https://dev.to/josefine"><img src="icons/Dev.png" alt="Dev.to logo" /></a>
	</li>
	<li>
		<a href="https://www.linkedin.com/in/j-schaefer/"
			><img src="icons/LinkedIN.png" alt="LinkedIn Logo" /></a
		>
	</li>
</ul>

position: absolute; left: 25%; right: 25%; bottom: 0; border: 1px solid black;

<style lang="postcss">
	img {
		@apply max-h-[28px] w-auto;
	}
	li a:hover::after {
		@apply block content-[''] absolute w-7 h-[1.5px] bg-[#1b1819] mt-2 my-0 mx-auto left-0 right-0;
	}
	li:last-child::after {
		@apply block content-[''] w-[1.5px] h-14 bg-[#1b1819] ml-auto mr-auto mt-6;
	}
</style>
