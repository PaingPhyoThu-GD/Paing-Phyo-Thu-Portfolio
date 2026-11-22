

function Navbar() {

    const nav_bar_list = ["Home", "Aboout me", "Projects", "Tech Stack", "ContentInfo"]
    const formated_navlist = nav_bar_list.map((element) => <ul><a href="#">{element}</a></ul>)
    return (
        <>
            <nav>
                {formated_navlist}
            </nav>
        </>
    )
}

export default Navbar