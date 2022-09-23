import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";

const NavMenu = () => {
  const { data: session } = useSession();

  return (
    <div
      className={`fixed top-14 min-h-200 transition-all px-5 py-4 left-0 z-20 w-full text-sm bg-red-200`}
      style={{ backgroundColor: "rgb(254 202 202)" }}
    >
      <ul>
        <li className="pt-0.5 pl-0.5 pb-3">
          <Link href={"/home"}>Home</Link>
        </li>
        <hr />
        <li className="py-3 pl-0.5">
          <Link href={"/about"}>About</Link>
        </li>
        <hr />
        <li className="py-3 pl-0.5">
          <Link href={"/search"}>Find Gathering</Link>
        </li>
        <hr />
        <li className="py-3 pl-0.5">
          <Link href={"/admin/home"}>
            {session ? "Admin page" : "Login for admin"}
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default NavMenu;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
