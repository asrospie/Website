<script lang='ts'>
    import { 
        Collapse, Nav, NavbarBrand, NavbarToggler,
        NavItem, NavLink, Navbar,
    } from 'sveltestrap/src';

    let isOpen = false;

    function handleUpdate(event: any) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar expand='md' dark color='dark' sticky='top'>
    <NavbarBrand href='/'>Alec Rospierski</NavbarBrand>
    <NavbarToggler on:click={() => isOpen = !isOpen} />
    <Collapse {isOpen} navbar expand='md' on:update={handleUpdate}>
        <Nav class='ml-auto' navbar>
            <NavItem>
                <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/dndtools'>D&D Tools</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='/livelyrics'>Lyrics</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href='https://github.com/asrospie/'>GitHub</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
    
    <!-- For the sapper compiler to see visible links to create routes -->
    <div style="visibility: hidden; position: absolute">
        <a href="/">home</a>
        <a href="/dndtools">d&d tools</a>
        <a href="/livelyrics">lyrics</a>
        <a href="https://github.com/asrospie">github</a>
    </div>
</Navbar>

<style></style>