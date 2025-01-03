"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function TestRedux() {
  const [num, setNum] = useState(0);
  return (
    <div className="pl-20 py-10">
      <div>
        <Button
          onClick={() => {
            console.log("Moses Mwangi");
          }}
        >
          Testing
        </Button>
      </div>
    </div>
  );
}
