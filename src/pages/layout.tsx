import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Zap } from "lucide-react"
import { ReactNode, useState } from "react"

interface props {
	children: ReactNode
}

const NavItems = ({ mobile = false }) => (
	<>
		<a className={`text-sm font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} href="#">
			Inicio
		</a>
		<a className={`text-sm font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} href="#">
			Servicios
		</a>
		<a className={`text-sm font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} href="#">
			Sobre Nosotros
		</a>
		<a className={`text-sm font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} href="#">
			Contacto
		</a>
	</>
)


function Layout({ children }: props) {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className=" px-4 lg:px-6 flex items-center bg-blue-600 text-white">
				
				<a className="flex items-center justify-center" href="#">
					<Zap className="h-6 w-6 text-orange-400" />
					<span className="ml-2 text-lg font-semibold">DyCE</span>
				</a>

				<nav className="ml-auto hidden md:flex gap-6">
					<NavItems />
				</nav>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" className="ml-auto text-white hover:bg-blue-700">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Abrir menú</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[240px] sm:w-[300px] bg-blue-700 text-white p-0">
						<div className="flex flex-col h-full">
							<div className="flex items-center justify-between p-4 border-b border-blue-600">
								<span className="text-lg font-semibold">Menú</span>
								<SheetClose asChild>
									<Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
										<X className="h-5 w-5" />
										<span className="sr-only">Cerrar menú</span>
									</Button>
								</SheetClose>
							</div>
							<nav className="flex flex-col gap-4 p-4">
								<NavItems mobile />
							</nav>
							<div className="mt-auto p-4 border-t border-blue-600">
								<Button className="w-full bg-orange-500 text-white hover:bg-orange-600">
									Contactar
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>
				
			</header>

			<main className="flex flex-col min-h-screen bg-blue-50">
				{children}
			</main>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-800 text-white">
        <p className="text-xs">© 2023 DyCE. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </a>
        </nav>
      </footer>

		</>
	)
}



export default Layout