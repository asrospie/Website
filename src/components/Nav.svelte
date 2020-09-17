<script>
    import {
        Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
        NavItem, NavLink,
	} from 'sveltestrap'; 
	export let segment;
    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <NavbarBrand href="/">Alec R.</NavbarBrand>
    <NavbarToggler on:click={() => {isOpen = !isOpen}} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href=".">Blog</NavLink>
            </NavItem>
            <NavItem>
				<NavLink href="#/dndtools">D&D Tools</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/asrospie/">GitHub</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</nav>

<style>
    .navbar {
        height: 9%;
    }
</style>