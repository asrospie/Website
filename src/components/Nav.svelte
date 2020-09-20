<style>
</style>

<script>
    import {
        Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
        NavItem, NavLink,
    } from 'sveltestrap'; 
    import Icon from 'svelte-awesome';
    import { home, code } from 'svelte-awesome/icons';

    const style = "color: white;";
    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

</script>

<Navbar expand="md" dark color="dark" sticky="top">
    <NavbarBrand href="/">Alec Rospierski</NavbarBrand>
    <NavbarToggler on:click={() => {isOpen = !isOpen}} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
                <!-- <a class="nav-link" href="/"><Icon data={home} {style}/>Home</a> -->
            </NavItem>
            <!-- TODO -->
            <!-- <NavItem>
                <NavLink href=".">Blog</NavLink>
            </NavItem> -->
            <NavItem>
				<NavLink href="#/dndtools">D&D Tools</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/asrospie/">GitHub</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>