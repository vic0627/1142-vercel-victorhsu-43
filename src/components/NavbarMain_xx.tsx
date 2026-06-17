'use client';

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Link from 'next/link';

import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';

const NavbarMain_xx = () => {
  return (
    <div className='flex items-center justify-around mx-auto py-4 bg-amber-100 dark:bg-gray-700'>
      <Link href='/'>
        <div className='text-[18px]'>TKUdemo_xx</div>
      </Link>
      <Menubar className='w-72'>
        <MenubarMenu>
          <MenubarTrigger>Demo</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/counter_xx'>Counter_xx</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/tours_xx'>Tours_xx</Link>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>
                <Link href='/users_db_xx'>Users_db_xx</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_xx'>Grocery_xx</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/grocery_db_xx'>Grocery_db_xx</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz1</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/quiz1_xx/blog_xx'>blog_xx</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href='/quiz1_xx/blog_db_xx'>blog_db_xx</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Midterm</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/mid_xx'>Mid_xx</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Quiz2</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/quiz2_xx'>Quiz2_xx</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Final</MenubarTrigger>
          <MenubarContent className='w-44'>
            <MenubarGroup>
              <MenubarItem>
                <Link href='/final_xx'>Final_xx</Link>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className='flex items-center gap-4'>
        <Link href='/store_xx'>
          <Button variant='outline'>Store</Button>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarMain_xx;
