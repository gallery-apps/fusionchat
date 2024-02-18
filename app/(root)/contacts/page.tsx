'use client'
import LeftSidebar from '@/components/LeftSidebar';
import React from 'react'
import { useSelector } from 'react-redux';

export default function page() {
  return (
    <>
      <LeftSidebar/>
      <section className="main-container">
        <div className="w-full">
          <section className="flex flex-col gap-10">Chat</section>
        </div>
      </section>
    </>
  );
}
