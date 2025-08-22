import {
  Button,
  Dropdown,
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { DropdownItemLink } from '@/routes/__root'
import { Link, useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'
import InspectionButton from './InspectionButton'
import { ChevronDown } from 'lucide-react'
import pestLibrary from '../../public/pestLibrary'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = router.history.subscribe(() => setIsMenuOpen(false))

    return () => unsubscribe()
  }, [router])
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/">
            <p className="font-bold text-inherit lg:text-2xl">
              Advance Pest Solutions
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex gap-4">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent lg:text-xl"
                endContent={<ChevronDown />}
                radius="sm"
                variant="light"
              >
                Pest Library
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {pestLibrary.map((pest, idx) => (
                <DropdownItemLink key={`${pest}-${idx}`} to={pest.link}>
                  {pest.name}
                </DropdownItemLink>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <InspectionButton />
        </NavbarItem>
      </NavbarContent>

      {/* mobile menu */}
      <NavbarMenu className="justify-center items-center">
        <NavbarMenuItem>
          <Link to="/">Home</Link>
        </NavbarMenuItem>
        {pestLibrary.map((pest, index) => (
          <NavbarMenuItem key={`${pest}-${index}`}>
            <Link to={pest.link} className="w-full">
              {pest.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <InspectionButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
