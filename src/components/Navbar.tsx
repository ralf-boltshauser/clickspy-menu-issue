"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

export default function Navbar({
  navbartitle,
}: {
  navbartitle: React.ReactNode;
}) {
  const path = usePathname();
  const segments = useSelectedLayoutSegments();
  console.log(path);
  console.log(segments);
  const creatorSelected = segments.includes("creators");
  const creatorId = segments[segments.indexOf("creators") + 1];
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <p>creators</p>
        <Link href={"/creators/1"} className="p-5 bg-gray-500">
          creator 1
        </Link>
        <Link href={"/creators/2"} className="p-5 bg-gray-500">
          creator 2
        </Link>
      </div>
      {creatorSelected && (
        <div className="flex flex-col gap-4 w-64">
          {navbartitle}
          <Link
            href={`/creators/${creatorId}/analytics`}
            className="p-5 bg-gray-500"
          >
            Analytics for {creatorId}
          </Link>
          <Link
            href={`/creators/${creatorId}/settings`}
            className="p-5 bg-gray-500"
          >
            Settings for {creatorId}
          </Link>
        </div>
      )}
    </div>
  );
}
