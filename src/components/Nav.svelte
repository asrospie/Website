<script lang='ts'>
    import { 
        Collapse, Nav, NavbarBrand, NavbarToggler,
        NavItem, NavLink, Navbar,
    } from 'sveltestrap/src';

    const style: string = 'color: white;';
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
                <!-- <NavLink href='/'>Home</NavLink> -->
                <a class='nav-link' href='/'>Home</a>
            </NavItem>
            <NavItem>
                <!-- <NavLink href='/dndtools'>D&D Tools</NavLink> -->
                <a class='nav-link' href='/dndtools'>D&D Tools</a>
            </NavItem>
            <NavItem>
                <!-- <NavLink href='https://github.com/asrospie/'>GitHub</NavLink> -->
                <a class='nav-link' href='https://github.com/asrospie/'>GitHub</a>
            </NavItem>
        </Nav>
    </Collapse>
    <div style="visibility: hidden; position: absolute">
        <a href="/">home</a>
        <a href="/dndtools">d&d tools</a>
        <a href="https://github.com/asrospie">github</a>
    </div>
</Navbar>

<style></style>