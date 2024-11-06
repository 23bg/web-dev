import React from "react";
import { Separator } from "./ui/separator";
import { dataSource } from "@/constants";
import Image from "next/image";
import { FileDown } from "lucide-react";

const actions: string[] = [
  "Import company list",
  "Import people list",
  "Import job list",
  "Import Chrome ext. list",
  "Recruiting sales managers",
];

export default function CRMTable() {
  return (
    <div className="border p-3 border-gray-300 rounded font-semibold">
      <div className="px-1">
        Start from your CRM / prospect from 10+ sources / import a list
      </div>
      <Separator className="bg-gray-300" />

      <div className="flex flex-row ">
        <div className="grid grid-cols-2">
          {dataSource.map((item, index: number) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 m-1 rounded bg-gray-100/40"
            >
              <div className="w-10 p-2 rounded">
                <Image
                  fill
                  src={item.logo}
                  alt={item.name}
                  className="!relative rounded"
                />
              </div>
              <div className="text-xs">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="grid-cols-1">
          {actions.map((item, index: number) => (
            <div
              key={index}
              className="flex flex-row items-center gap-2 m-1 rounded p-2 bg-gray-100/40"
            >
              <FileDown />
              <div className="text-xs">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
