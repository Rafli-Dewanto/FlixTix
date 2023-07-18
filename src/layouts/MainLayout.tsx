import React, { ReactNode } from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function MainLayout({
  children,
  page
}: {
  children: ReactNode,
  page?: string
}) {
  return (
    <>
      <NavBar page={page} />
      {children}
      <Footer />
    </>
  );
};
