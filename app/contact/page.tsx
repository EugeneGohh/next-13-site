"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();

  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">Home</Link>

      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}

export default Contact;
