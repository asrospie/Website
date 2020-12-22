<script lang='ts'>
    import { experience } from '../services/experience';

    const src: string = "./avatar.jpeg";
    const alt: string = "Profile Image";
    const resume: string = "https://github.com/asrospie/website/raw/master/public/assets/Alec%20Rospierski%20Resume%202020.pdf";
</script>

<svelte:head>
    <title>Alec Rospierski</title>
</svelte:head>

<main>
	<div class="jumbotron">
		<div class="row">
			<div class="col">
				<img id="prof-img" {src} {alt} />
			</div>
			<div class="col">
				<h1 class="display-3">Hi! I'm Alec</h1>
				<p class="lead">
					Current Senior at Michigan Technological University studying Software Engineering interested in Front End Development
				</p>
			</div>
		</div>
		<hr class="my-4" />
		<p class="display-4">My Experience</p>
		<br />

		{#each experience as item, i}
			<div id="exp" class="row">
				<div class="col-sm">
					<img class="logo" src={item.src} alt="company logo" />
				</div>
				<div class="col">
					<p class="lead">
						{item.headline}
					</p>
					<p>
						{item.message}
					</p>
				</div>
			</div>
			<br /><div class="vline"></div><br />
		{/each}
        <a class="btn btn-primary btn-circle" href={resume} title="Download" >Download Resume</a>
	</div>
</main>

<style>
	main {
		text-align: center;
		background-color: grey;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#prof-img {
		max-width: 14rem;
		max-height: 14rem;
		border-radius: 50%;
	}
	.col {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.row {
		padding: 0 45px;
		max-width: 56rem;
	}
	.vline {
		border-left: 2px solid rgb(199, 202, 206);
		height: 6rem;
	}
	.logo {
		max-width: 10rem;
		max-height: 10rem;
		border-radius: 50%;
	}
	.jumbotron {
		margin: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.btn-circle {
		height: 12rem;
		width: 12rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>