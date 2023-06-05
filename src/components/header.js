export default function Header() {
  return (
    <section >
        <header className="flex">
            <img
             class="logo" 
             src="logo/mainlogo.png" 
             alt="Kamident logo"/>
            <nav>
                <ul className="flex">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#services">Blog</a></li>
                    <li><a href="#contact">Write To Us</a></li>
                </ul>
            </nav>
        </header>
	</section>
  )
}
