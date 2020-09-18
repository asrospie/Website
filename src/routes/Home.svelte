<svelte:head>
	<title>Alec Rospierski</title>
</svelte:head>

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

<script>
	import Nav from '../components/Nav.svelte';

	const src = "assets/avatar.jpeg";
	const alt = "Profile Image";

	const resume = "/assets/Alec Rospierski Resume 2020.pdf";
	const newName = "Alec Rospierski Resume"

	let experience = [
		{
			"src": "assets/fca.png",
			"headline": "FCA June 20-August 20",
			"message": "All Data Application Intern responsible for Front End Development using ReactJS for a Vehicle Health Dashboard"
		},
		{
			"src": "assets/mtu.jpg",
			"headline": "Michigan Tech Sep 19-May 20",
			"message": "Mentored students in Programming at the HW/SW Interface, Data Structures, Discrete Structures, and the introduction to programming classes"
		},
		{
			"src": "assets/ctt.jpeg",
			"headline": "CTT Nov 18-Sep 19",
			"message": "Software Engineering Intern responsible for front end and server feature requests for MERL and Roadsoft using AngularJS and C#"
		},
		{
			"src": "assets/huskygd.png",
			"headline": "Husky Game Dev Sep 18-May 19",
			"message": "Developer for Cyberfunk, a Rogue-Lite video game for the PC using the Unity Game Engine and C# scripting"
		}
	];
</script>

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
        <a class="btn btn-primary btn-circle" href={resume} title="Download" download={newName}>Download Resume</a>
	</div>
</main>
